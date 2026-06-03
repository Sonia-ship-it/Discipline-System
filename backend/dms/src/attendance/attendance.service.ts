import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TermService } from '../term/term.service';
import { MarkAttendanceDto, TermOpeningDto } from './dto/mark-attendance.dto';
import { AttendanceStatus } from '../generated';

@Injectable()
export class AttendanceService {
  constructor(
    private prisma: PrismaService,
    private termService: TermService,
  ) {}

  private startOfDay(dateStr: string): Date {
    const d = new Date(dateStr);
    d.setUTCHours(0, 0, 0, 0);
    return d;
  }

  private async resolveTermId(termId?: number) {
    if (termId) {
      await this.termService.findOne(termId);
      return termId;
    }
    const active = await this.termService.findActive();
    if (!active) {
      throw new BadRequestException(
        'No active academic term. Create and activate a term first.',
      );
    }
    return active.id;
  }

  async findAll(params: {
    termId?: number;
    date?: string;
    year?: string;
    classGroup?: string;
  }) {
    const termId = params.termId
      ? params.termId
      : (await this.termService.findActive())?.id;

    const students = await this.prisma.student.findMany({
      where: {
        ...(params.year ? { year: params.year } : {}),
        ...(params.classGroup ? { classGroup: params.classGroup } : {}),
      },
      orderBy: [{ year: 'asc' }, { classGroup: 'asc' }, { lastName: 'asc' }],
    });

    const date = params.date ? this.startOfDay(params.date) : undefined;

    const records =
      termId && date
        ? await this.prisma.attendanceRecord.findMany({
            where: { termId, date },
          })
        : termId
          ? await this.prisma.attendanceRecord.findMany({
              where: { termId },
            })
          : [];

    const recordByStudent = new Map(records.map((r) => [r.studentId, r]));

    return students.map((student) => {
      const record = recordByStudent.get(student.id);
      return {
        student: {
          id: student.id,
          firstName: student.firstName,
          lastName: student.lastName,
          year: student.year,
          classGroup: student.classGroup,
          fatherPhoneNumber: student.fatherPhoneNumber,
          motherPhoneNumber: student.motherPhoneNumber,
          fatherName: student.fatherName,
          motherName: student.motherName,
        },
        attendance: record
          ? {
              id: record.id,
              status: record.status,
              note: record.note,
              date: record.date,
              termId: record.termId,
            }
          : null,
      };
    });
  }

  async markBulk(dto: MarkAttendanceDto, staffId?: number) {
    const termId = await this.resolveTermId(dto.termId);
    const date = this.startOfDay(dto.date);

    const results = await Promise.all(
      dto.records.map((entry) =>
        this.prisma.attendanceRecord.upsert({
          where: {
            studentId_termId_date: {
              studentId: entry.studentId,
              termId,
              date,
            },
          },
          create: {
            studentId: entry.studentId,
            termId,
            date,
            status: entry.status,
            note: entry.note,
            markedByStaffId: staffId ?? null,
          },
          update: {
            status: entry.status,
            note: entry.note,
            markedByStaffId: staffId ?? null,
          },
        }),
      ),
    );

    return { termId, date, count: results.length, records: results };
  }

  async termOpening(dto: TermOpeningDto, staffId?: number) {
    const termId = await this.resolveTermId(dto.termId);
    const term = await this.termService.findOne(termId);
    const date = dto.date
      ? this.startOfDay(dto.date)
      : this.startOfDay(term.startDate.toISOString());

    const students = await this.prisma.student.findMany({
      where: {
        ...(dto.year ? { year: dto.year } : {}),
        ...(dto.classGroup ? { classGroup: dto.classGroup } : {}),
      },
    });

    if (students.length === 0) {
      throw new NotFoundException('No students found for the selected filters');
    }

    const records = await Promise.all(
      students.map((s) =>
        this.prisma.attendanceRecord.upsert({
          where: {
            studentId_termId_date: {
              studentId: s.id,
              termId,
              date,
            },
          },
          create: {
            studentId: s.id,
            termId,
            date,
            status: AttendanceStatus.PRESENT,
            markedByStaffId: staffId ?? null,
          },
          update: {
            status: AttendanceStatus.PRESENT,
            markedByStaffId: staffId ?? null,
          },
        }),
      ),
    );

    return {
      termId,
      date,
      markedPresent: records.length,
      message: `Marked ${records.length} students present for term opening`,
    };
  }

  async getStudentAttendance(studentId: number, termId?: number) {
    const resolvedTermId = termId
      ? termId
      : (await this.termService.findActive())?.id;

    if (!resolvedTermId) return [];

    return this.prisma.attendanceRecord.findMany({
      where: { studentId, termId: resolvedTermId },
      orderBy: { date: 'desc' },
      include: { term: true },
    });
  }
}
