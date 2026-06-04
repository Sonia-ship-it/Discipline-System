import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTermSessionDto } from './dto/create-term-session.dto';
import { UpdateTermSessionDto } from './dto/update-term-session.dto';
import { MarkOpeningAttendanceDto } from './dto/mark-opening-attendance.dto';

@Injectable()
export class OpeningAttendanceService {
  constructor(private prisma: PrismaService) {}

  async createTermSession(dto: CreateTermSessionDto) {
    // Check if term already exists
    const existing = await this.prisma.termSession.findUnique({
      where: {
        name_year: {
          name: dto.name,
          year: dto.year,
        },
      },
    });

    if (existing) {
      throw new Error(`Term ${dto.name} ${dto.year} already exists`);
    }

    return this.prisma.termSession.create({
      data: dto,
    });
  }

  async getAllTermSessions() {
    return this.prisma.termSession.findMany({
      orderBy: [{ year: 'desc' }, { name: 'asc' }],
    });
  }

  async getActiveTerm() {
    return this.prisma.termSession.findFirst({
      where: { isActive: true },
    });
  }

  async setActiveTerm(termId: number) {
    await this.prisma.termSession.updateMany({
      data: { isActive: false },
    });
    return this.prisma.termSession.update({
      where: { id: termId },
      data: { isActive: true, status: 'ACTIVE' },
    });
  }

  async updateTermSession(termId: number, dto: UpdateTermSessionDto) {
    return this.prisma.termSession.update({
      where: { id: termId },
      data: dto,
    });
  }

  async deleteTermSession(termId: number) {
    // First delete all attendance records for this term
    await this.prisma.termAttendance.deleteMany({
      where: { termId },
    });

    // Then delete the term session
    return this.prisma.termSession.delete({
      where: { id: termId },
    });
  }

  async initializeTermAttendance(termId: number) {
    const students = await this.prisma.student.findMany({
      where: { status: 'IN' },
    });

    const existingRecords = await this.prisma.termAttendance.findMany({
      where: { termId },
    });

    const existingStudentIds = new Set(
      existingRecords.map((r) => r.studentId),
    );

    const newRecords = students
      .filter((s) => !existingStudentIds.has(s.id))
      .map((student) => ({
        termId,
        studentId: student.id,
        status: 'NOT_REPORTED' as const,
      }));

    if (newRecords.length > 0) {
      await this.prisma.termAttendance.createMany({
        data: newRecords,
      });
    }

    return { initialized: newRecords.length };
  }

  async getTermAttendance(termId: number) {
    const attendances = await this.prisma.termAttendance.findMany({
      where: { termId },
      include: {
        student: true,
        recordedBy: true,
      },
      orderBy: { student: { classGroup: 'asc' } },
    });

    return attendances;
  }

  async markAttendance(dto: MarkOpeningAttendanceDto) {
    const attendance = await this.prisma.termAttendance.upsert({
      where: {
        termId_studentId: {
          termId: dto.termId,
          studentId: dto.studentId,
        },
      },
      update: {
        status: dto.status,
        arrivalTime: dto.arrivalTime || new Date(),
        recordedById: dto.recordedById,
      },
      create: {
        termId: dto.termId,
        studentId: dto.studentId,
        status: dto.status,
        arrivalTime: dto.arrivalTime || new Date(),
        recordedById: dto.recordedById,
      },
      include: {
        student: true,
        term: true,
      },
    });

    // TODO: Send SMS notification to parent
    if (dto.status === 'REPORTED') {
      const message = `Dear Parent/Guardian, your child ${attendance.student.firstName} ${attendance.student.lastName} has successfully reported back to school for ${attendance.term.name} on ${new Date().toLocaleDateString()} at ${attendance.arrivalTime?.toLocaleTimeString()}.`;
      console.log('SMS:', message);
      // Integration with SMS service would go here
    }

    return attendance;
  }

  async getDashboard(termId: number) {
    const total = await this.prisma.termAttendance.count({
      where: { termId },
    });

    const reported = await this.prisma.termAttendance.count({
      where: { termId, status: 'REPORTED' },
    });

    const notReported = total - reported;
    const percentage = total > 0 ? (reported / total) * 100 : 0;

    return {
      expected: total,
      reported,
      notReported,
      percentage: parseFloat(percentage.toFixed(1)),
    };
  }

  async getOpeningDayReport(termId: number) {
    return this.prisma.termAttendance.findMany({
      where: { termId },
      include: {
        student: true,
        recordedBy: true,
      },
      orderBy: [
        { student: { classGroup: 'asc' } },
        { student: { lastName: 'asc' } },
      ],
    });
  }

  async getClassReportingReport(termId: number) {
    const attendances = await this.prisma.termAttendance.findMany({
      where: { termId },
      include: { student: true },
    });

    const classStats = attendances.reduce(
      (acc, att) => {
        const classGroup = att.student.classGroup;
        if (!acc[classGroup]) {
          acc[classGroup] = { expected: 0, reported: 0, missing: 0 };
        }
        acc[classGroup].expected++;
        if (att.status === 'REPORTED') {
          acc[classGroup].reported++;
        } else {
          acc[classGroup].missing++;
        }
        return acc;
      },
      {} as Record<string, { expected: number; reported: number; missing: number }>,
    );

    return Object.entries(classStats).map(([classGroup, stats]) => ({
      classGroup,
      ...stats,
    }));
  }
}
