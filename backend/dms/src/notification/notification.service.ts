import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TermService } from '../term/term.service';
import { NotifyParentsDto } from './dto/notify-parents.dto';
import {
  AttendanceStatus,
  NotificationStatus,
  ParentNotificationType,
} from '../generated';

@Injectable()
export class NotificationService {
  constructor(
    private prisma: PrismaService,
    private termService: TermService,
  ) {}

  private startOfDay(dateStr: string): Date {
    const d = new Date(dateStr);
    d.setUTCHours(0, 0, 0, 0);
    return d;
  }

  private formatPhone(phone: string): string {
    return phone.replace(/\s+/g, '').trim();
  }

  private buildMessage(
    type: ParentNotificationType,
    studentName: string,
    date: Date,
    termName: string,
    status?: AttendanceStatus,
  ): string {
    const dateStr = date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    switch (type) {
      case ParentNotificationType.TERM_OPENING:
        return `RCA: Dear parent/guardian, ${termName} has begun (${dateStr}). ${studentName} has been marked present for the start of term. For queries contact the school office.`;
      case ParentNotificationType.ABSENCE_ALERT:
        return `RCA: Dear parent/guardian, ${studentName} was marked ABSENT on ${dateStr}. Please contact the school if this is unexpected.`;
      case ParentNotificationType.ATTENDANCE_SUMMARY:
        return `RCA: Dear parent/guardian, attendance update for ${studentName} on ${dateStr}: ${status ?? 'recorded'}.`;
      default:
        return `RCA: Attendance notification for ${studentName} on ${dateStr}.`;
    }
  }

  private async sendToPhone(
    phone: string,
    message: string,
  ): Promise<NotificationStatus> {
    const normalized = this.formatPhone(phone);
    if (!normalized || normalized.length < 9) {
      return NotificationStatus.FAILED;
    }
    // Log for delivery; integrate SMS provider (Twilio, etc.) via env when available
    if (process.env.SMS_WEBHOOK_URL) {
      try {
        await fetch(process.env.SMS_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ to: normalized, message }),
        });
        return NotificationStatus.SENT;
      } catch {
        return NotificationStatus.FAILED;
      }
    }
    console.info(`[Parent SMS] to=${normalized} message=${message}`);
    return NotificationStatus.SENT;
  }

  async notifyParents(dto: NotifyParentsDto) {
    const termId = dto.termId
      ? dto.termId
      : (await this.termService.findActive())?.id;

    if (!termId) {
      throw new BadRequestException('No active academic term');
    }

    const term = await this.termService.findOne(termId);
    const date = this.startOfDay(dto.date);

    let targets: {
      studentId: number;
      firstName: string;
      lastName: string;
      fatherPhoneNumber: string;
      motherPhoneNumber: string;
      status?: AttendanceStatus;
    }[] = [];

    if (dto.studentIds?.length) {
      const students = await this.prisma.student.findMany({
        where: { id: { in: dto.studentIds } },
      });
      const records = await this.prisma.attendanceRecord.findMany({
        where: {
          termId,
          date,
          studentId: { in: dto.studentIds },
        },
      });
      const statusMap = new Map(records.map((r) => [r.studentId, r.status]));
      targets = students.map((s) => ({
        studentId: s.id,
        firstName: s.firstName,
        lastName: s.lastName,
        fatherPhoneNumber: s.fatherPhoneNumber,
        motherPhoneNumber: s.motherPhoneNumber,
        status: statusMap.get(s.id),
      }));
    } else if (dto.type === ParentNotificationType.ABSENCE_ALERT) {
      const absent = await this.prisma.attendanceRecord.findMany({
        where: { termId, date, status: AttendanceStatus.ABSENT },
        include: { student: true },
      });
      targets = absent.map((r) => ({
        studentId: r.student.id,
        firstName: r.student.firstName,
        lastName: r.student.lastName,
        fatherPhoneNumber: r.student.fatherPhoneNumber,
        motherPhoneNumber: r.student.motherPhoneNumber,
        status: r.status,
      }));
    } else if (dto.type === ParentNotificationType.TERM_OPENING) {
      const present = await this.prisma.attendanceRecord.findMany({
        where: { termId, date, status: AttendanceStatus.PRESENT },
        include: { student: true },
      });
      targets = present.map((r) => ({
        studentId: r.student.id,
        firstName: r.student.firstName,
        lastName: r.student.lastName,
        fatherPhoneNumber: r.student.fatherPhoneNumber,
        motherPhoneNumber: r.student.motherPhoneNumber,
        status: r.status,
      }));
    }

    if (targets.length === 0) {
      return { sent: 0, failed: 0, notifications: [], message: 'No recipients' };
    }

    const notifications: Awaited<
      ReturnType<typeof this.prisma.parentNotification.create>
    >[] = [];
    let sent = 0;
    let failed = 0;

    for (const t of targets) {
      const studentName = `${t.firstName} ${t.lastName}`;
      const message = this.buildMessage(
        dto.type,
        studentName,
        date,
        term.name,
        t.status,
      );

      const phones = [
        ...new Set(
          [t.fatherPhoneNumber, t.motherPhoneNumber]
            .map((p) => this.formatPhone(p))
            .filter((p) => p.length >= 9),
        ),
      ];

      for (const phone of phones) {
        const status = await this.sendToPhone(phone, message);
        const row = await this.prisma.parentNotification.create({
          data: {
            studentId: t.studentId,
            phone,
            message,
            type: dto.type,
            status,
          },
        });
        notifications.push(row);
        if (status === NotificationStatus.SENT) sent++;
        else failed++;
      }
    }

    return {
      sent,
      failed,
      notifications,
      message: `Processed ${notifications.length} parent message(s)`,
    };
  }

  async findAll(studentId?: number) {
    return this.prisma.parentNotification.findMany({
      where: studentId ? { studentId } : {},
      orderBy: { sentAt: 'desc' },
      take: 100,
      include: {
        student: {
          select: { id: true, firstName: true, lastName: true },
        },
      },
    });
  }

  async testNotification(dto: {
    studentId: number;
    phone: string;
    type?: ParentNotificationType;
    customMessage?: string;
  }) {
    const student = await this.prisma.student.findUnique({
      where: { id: dto.studentId },
    });
    if (!student) {
      throw new BadRequestException('Student not found');
    }

    const term = await this.termService.findActive();
    const termName = term?.name ?? 'Current Term';
    const today = new Date();

    const message =
      dto.customMessage ||
      this.buildMessage(
        dto.type ?? ParentNotificationType.ATTENDANCE_SUMMARY,
        `${student.firstName} ${student.lastName}`,
        today,
        termName,
      );

    const status = await this.sendToPhone(dto.phone, message);

    const notification = await this.prisma.parentNotification.create({
      data: {
        studentId: dto.studentId,
        phone: this.formatPhone(dto.phone),
        message,
        type: dto.type ?? ParentNotificationType.ATTENDANCE_SUMMARY,
        status,
      },
    });

    return {
      success: status === NotificationStatus.SENT,
      status,
      notification,
      message:
        status === NotificationStatus.SENT
          ? `Test SMS sent to ${dto.phone}`
          : `Failed to send to ${dto.phone}`,
    };
  }
}
