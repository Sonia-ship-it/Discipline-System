// src/staff/staff.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import * as bcrypt from 'bcrypt';
import { toStaffCreateData, toStaffUpdateData } from '../common/staff-data.util';

@Injectable()
export class StaffService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateStaffDto) {
    const clean = toStaffCreateData(data as unknown as Record<string, unknown>);
    const hashedPassword = await bcrypt.hash(clean.password, 10);
    return this.prisma.staff.create({ data: { ...clean, password: hashedPassword } });
  }

  async findAll() {
    return this.prisma.staff.findMany();
  }

  async findOne(id: number) {
    return this.prisma.staff.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateStaffDto) {
    const clean = toStaffUpdateData(data as unknown as Record<string, unknown>);
    if (clean.password) {
      clean.password = await bcrypt.hash(clean.password, 10);
    }
    return this.prisma.staff.update({ where: { id }, data: clean });
  }

  async remove(id: number) {
    return this.prisma.staff.delete({ where: { id } });
  }
}