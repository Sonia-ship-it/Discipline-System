import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SmsService } from '../sms/sms.service';
import { CreateTermSessionDto } from './dto/create-term-session.dto';
import { MarkAttendanceDto } from './dto/mark-attendance.dto';
import { getCurrentTermInfo } from './term-calendar';

@Injectable()
export class TermAttendanceService implements OnModuleInit {
  constructor(
    private prisma: PrismaService,
    private sms: SmsService,
  ) {}

  async onModuleInit() {
    // Commented out to prevent startup issues
    // await this.ensureCurrentTermSession();
  }

  async ensureCurrentTermSession() {
    const termInfo = getCurrentTermInfo();
    let session = await this.prisma.termSession.findUnique({
      where: { name_year: { name: termInfo.name, year: termInfo.year } },
    });

    if (!session) {
      session = await this.createTermSession({
        name: termInfo.name,
        year: termInfo.year,
        startDate: termInfo.startDate.toISOString(),
        endDate: termInfo.endDate.toISOString(),
        openingDate: termInfo.openingDate.toISOString(),
      });
    } else {
      await this.syncStudentsToSession(session.id);
    }

    if (!session.isActive) {
      await this.setActiveSession(session.id);
      session = { ...session, isActive: true };
    }

    return session;
  }

  async syncStudentsToSession(termId: number) {
    const [students, existing] = await Promise.all([
      this.prisma.student.findMany({ select: { id: true } }),
      this.prisma.termAttendance.findMany({
        where: { termId },
        select: { studentId: true },
      }),
    ]);

    const existingIds = new Set(existing.map((r) => r.studentId));
    const missing = students.filter((s) => !existingIds.has(s.id));

    if (missing.length > 0) {
      await this.prisma.termAttendance.createMany({
        data: missing.map((student) => ({
          termId,
          studentId: student.id,
          status: 'NOT_REPORTED',
        })),
      });
    }
  }

  async createTermSession(dto: CreateTermSessionDto) {
    const session = await this.prisma.termSession.create({
      data: {
        name: dto.name,
        year: dto.year,
        startDate: new Date(dto.startDate),
        endDate: new Date(dto.endDate),
        openingDate: new Date(dto.openingDate),
      },
    });

    const students = await this.prisma.student.findMany();

    await this.prisma.termAttendance.createMany({
      data: students.map((student) => ({
        termId: session.id,
        studentId: student.id,
        status: 'NOT_REPORTED',
      })),
    });

    return session;
  }

  async getAllSessions() {
    return this.prisma.termSession.findMany({
      orderBy: [{ year: 'desc' }, { name: 'asc' }],
    });
  }

  async getActiveSession() {
    return this.prisma.termSession.findFirst({
      where: { isActive: true },
    });
  }

  async setActiveSession(id: number) {
    await this.prisma.termSession.updateMany({
      data: { isActive: false },
    });

    return this.prisma.termSession.update({
      where: { id },
      data: { isActive: true },
    });
  }

  async getAttendanceByTerm(termId: number) {
    return this.prisma.termAttendance.findMany({
      where: { termId },
      include: {
        student: true,
        recordedBy: true,
      },
      orderBy: [{ status: 'asc' }, { arrivalTime: 'asc' }],
    });
  }

  async markAttendance(termId: number, dto: MarkAttendanceDto, staffId: number) {
    const attendance = await this.prisma.termAttendance.findUnique({
      where: {
        termId_studentId: {
          termId,
          studentId: dto.studentId,
        },
      },
      include: { student: true, term: true },
    });

    if (!attendance) {
      throw new NotFoundException('Attendance record not found');
    }

    const wasReported = attendance.status === 'REPORTED';
    const arrivalTime =
      dto.status === 'REPORTED'
        ? dto.arrivalTime
          ? new Date(dto.arrivalTime)
          : new Date()
        : null;

    const updated = await this.prisma.termAttendance.update({
      where: { id: attendance.id },
      data: {
        status: dto.status,
        arrivalTime,
        recordedById: dto.status === 'REPORTED' ? staffId : null,
      },
      include: {
        student: true,
        recordedBy: true,
        term: true,
      },
    });

    if (dto.status === 'REPORTED' && !wasReported) {
      await this.notifyParents(updated);
    }

    return updated;
  }

  private async notifyParents(attendance: {
    student: {
      firstName: string;
      lastName: string;
      fatherPhoneNumber: string;
      motherPhoneNumber: string;
    };
    term: { name: string };
    arrivalTime: Date | null;
  }) {
    const arrival = attendance.arrivalTime ?? new Date();
    const studentName = `${attendance.student.firstName} ${attendance.student.lastName}`;
    const dateStr = arrival.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    const timeStr = arrival.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    const message = `Dear Parent/Guardian, your child ${studentName} has successfully reported back to school for ${attendance.term.name} on ${dateStr} at ${timeStr}.`;

    await Promise.all([
      this.sms.sendSms(attendance.student.fatherPhoneNumber, message),
      this.sms.sendSms(attendance.student.motherPhoneNumber, message),
    ]);
  }

  async getDashboardStats(termId: number) {
    const total = await this.prisma.termAttendance.count({
      where: { termId },
    });

    const reported = await this.prisma.termAttendance.count({
      where: { termId, status: 'REPORTED' },
    });

    const notReported = total - reported;
    const percentage = total > 0 ? parseFloat(((reported / total) * 100).toFixed(1)) : 0;

    return {
      total,
      reported,
      notReported,
      percentage,
    };
  }

  async getClassReport(termId: number) {
    const attendances = await this.prisma.termAttendance.findMany({
      where: { termId },
      include: { student: true },
    });

    const classStats = attendances.reduce(
      (acc, att) => {
        const className = att.student.classGroup;
        if (!acc[className]) {
          acc[className] = { expected: 0, reported: 0, missing: 0 };
        }
        acc[className].expected++;
        if (att.status === 'REPORTED') {
          acc[className].reported++;
        } else {
          acc[className].missing++;
        }
        return acc;
      },
      {} as Record<string, { expected: number; reported: number; missing: number }>,
    );

    return Object.entries(classStats)
      .map(([className, stats]) => ({
        class: className,
        ...stats,
      }))
      .sort((a, b) => a.class.localeCompare(b.class));
  }
}
