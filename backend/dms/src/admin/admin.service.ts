import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { StaffRole } from '../generated';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) { }

  async getAllStaff() {
    return this.prisma.staff.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phoneNumber: true,
        role: true,
        permissions: true, // Include permissions
        isActive: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async assignRole(staffId: number, role: StaffRole) {
    const staff = await this.prisma.staff.findUnique({ where: { id: staffId } });
    if (!staff) throw new NotFoundException('Staff member not found');

    return this.prisma.staff.update({
      where: { id: staffId },
      data: { role },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        role: true,
        permissions: true,
        isActive: true,
      },
    });
  }

  async updatePermissions(staffId: number, permissions: string[]) {
    const staff = await this.prisma.staff.findUnique({ where: { id: staffId } });
    if (!staff) throw new NotFoundException('Staff member not found');

    return this.prisma.staff.update({
      where: { id: staffId },
      data: { permissions },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        role: true,
        permissions: true,
        isActive: true,
      },
    });
  }

  async toggleActive(staffId: number, isActive: boolean) {
    const staff = await this.prisma.staff.findUnique({ where: { id: staffId } });
    if (!staff) throw new NotFoundException('Staff member not found');

    return this.prisma.staff.update({
      where: { id: staffId },
      data: { isActive },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        role: true,
        permissions: true,
        isActive: true,
      },
    });
  }

  async getSystemOverview() {
    const [
      totalStudents,
      totalStaff,
      totalRecords,
      activeTerm,
      recentNotifications,
      staffByRole,
    ] = await Promise.all([
      this.prisma.student.count(),
      this.prisma.staff.count({ where: { isActive: true } }),
      this.prisma.disciplineRecord.count(),
      this.prisma.academicTerm.findFirst({ where: { isActive: true } }),
      this.prisma.parentNotification.count(),
      this.prisma.staff.groupBy({
        by: ['role'],
        _count: { role: true },
      }),
    ]);

    return {
      totalStudents,
      totalStaff,
      totalRecords,
      activeTerm: activeTerm ? { id: activeTerm.id, name: activeTerm.name } : null,
      totalNotificationsSent: recentNotifications,
      staffByRole: staffByRole.map((r) => ({ role: r.role, count: r._count.role })),
    };
  }
}
