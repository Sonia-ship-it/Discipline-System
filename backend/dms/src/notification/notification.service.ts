import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotifyParentsDto } from './dto/notify-parents.dto';
import { NotificationStatus, ParentNotificationType } from '../generated';

@Injectable()
export class NotificationService {
  constructor(private prisma: PrismaService) {}

  private formatPhone(phone: string): string {
    return phone.replace(/\s+/g, '').trim();
  }

  private buildMessage(
    type: ParentNotificationType,
    studentName: string,
    date: Date,
    termName: string,
  ): string {
    const dateStr = date.toLocaleDateString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric',
    });
    switch (type) {
      case ParentNotificationType.TERM_OPENING:
        return `RCA: Dear parent/guardian, ${termName} has begun (${dateStr}). ${studentName} has been marked present for the start of term. For queries contact the school office.`;
      case ParentNotificationType.ABSENCE_ALERT:
        return `RCA: Dear parent/guardian, ${studentName} was marked ABSENT on ${dateStr}. Please contact the school if this is unexpected.`;
      default:
        return `RCA: Attendance notification for ${studentName} on ${dateStr}.`;
    }
  }

  private async sendToPhone(phone: string, message: string): Promise<NotificationStatus> {
    const normalized = this.formatPhone(phone);
    if (!normalized || normalized.length < 9) return NotificationStatus.FAILED;

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
    console.info(`[Parent SMS] to=${normalized} msg=${message}`);
    return NotificationStatus.SENT;
  }

  async notifyParents(dto: NotifyParentsDto) {
    // Resolve active TermSession
    const term = dto.termId
      ? await this.prisma.termSession.findUnique({ where: { id: dto.termId } })
      : await this.prisma.termSession.findFirst({ where: { isActive: true } });

    if (!term) throw new BadRequestException('No active term session found');

    // Get students to notify
    let targets: { studentId: number; firstName: string; lastName: string; fatherPhoneNumber: string; motherPhoneNumber: string }[] = [];

    if (dto.studentIds?.length) {
      const students = await this.prisma.student.findMany({ where: { id: { in: dto.studentIds } } });
      targets = students.map((s) => ({
        studentId: s.id, firstName: s.firstName, lastName: s.lastName,
        fatherPhoneNumber: s.fatherPhoneNumber, motherPhoneNumber: s.motherPhoneNumber,
      }));
    } else {
      // Notify all students in the term attendance
      const attendances = await this.prisma.termAttendance.findMany({
        where: { termId: term.id },
        include: { student: true },
      });
      targets = attendances.map((a) => ({
        studentId: a.student.id, firstName: a.student.firstName, lastName: a.student.lastName,
        fatherPhoneNumber: a.student.fatherPhoneNumber, motherPhoneNumber: a.student.motherPhoneNumber,
      }));
    }

    if (targets.length === 0) return { sent: 0, failed: 0, message: 'No recipients' };

    let sent = 0; let failed = 0;
    const notifications: any[] = [];
    const today = new Date();

    for (const t of targets) {
      const studentName = `${t.firstName} ${t.lastName}`;
      const message = this.buildMessage(dto.type, studentName, today, term.name);
      const phones = [...new Set([t.fatherPhoneNumber, t.motherPhoneNumber].map(this.formatPhone).filter((p) => p.length >= 9))];

      for (const phone of phones) {
        const status = await this.sendToPhone(phone, message);
        const row = await this.prisma.parentNotification.create({
          data: { studentId: t.studentId, phone, message, type: dto.type, status },
        });
        notifications.push(row);
        if (status === NotificationStatus.SENT) sent++; else failed++;
      }
    }

    return { sent, failed, notifications, message: `Processed ${notifications.length} parent message(s)` };
  }

  async testNotification(dto: { studentId: number; phone: string; type?: ParentNotificationType; customMessage?: string }) {
    const student = await this.prisma.student.findUnique({ where: { id: dto.studentId } });
    if (!student) throw new BadRequestException('Student not found');

    const term = await this.prisma.termSession.findFirst({ where: { isActive: true } });
    const termName = term?.name ?? 'Current Term';
    const message = dto.customMessage || this.buildMessage(
      dto.type ?? ParentNotificationType.ATTENDANCE_SUMMARY,
      `${student.firstName} ${student.lastName}`,
      new Date(), termName,
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
      message: status === NotificationStatus.SENT ? `Test SMS sent to ${dto.phone}` : `Failed to send to ${dto.phone}`,
    };
  }

  async findAll(studentId?: number) {
    return this.prisma.parentNotification.findMany({
      where: studentId ? { studentId } : {},
      orderBy: { sentAt: 'desc' },
      take: 100,
      include: { student: { select: { id: true, firstName: true, lastName: true } } },
    });
  }
}
