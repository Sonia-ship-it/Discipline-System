// src/staff/staff.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class StaffService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateStaffDto) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.prisma.staff.create({ data: { ...data, password: hashedPassword } });
  }

  async findAll() {
    return this.prisma.staff.findMany();
  }

  async findOne(id: number) {
    return this.prisma.staff.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateStaffDto) {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    return this.prisma.staff.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.staff.delete({ where: { id } });
  }
}