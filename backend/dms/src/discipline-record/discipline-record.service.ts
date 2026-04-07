// src/discipline-record/discipline-record.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDisciplineRecordDto } from './dto/create-discipline-record.dto';

@Injectable()
export class DisciplineRecordService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateDisciplineRecordDto) {
    return this.prisma.disciplineRecord.create({ data });
  }

  async findAll() {
    return this.prisma.disciplineRecord.findMany({ include: { student: true } });
  }

  async findOne(id: number) {
    return this.prisma.disciplineRecord.findUnique({ where: { id }, include: { student: true } });
  }

  async update(id: number, data: CreateDisciplineRecordDto) {
    return this.prisma.disciplineRecord.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.disciplineRecord.delete({ where: { id } });
  }
}