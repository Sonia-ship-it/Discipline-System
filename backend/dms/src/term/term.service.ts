import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTermDto } from './dto/create-term.dto';

@Injectable()
export class TermService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.academicTerm.findMany({
      orderBy: { startDate: 'desc' },
    });
  }

  async findActive() {
    const active = await this.prisma.academicTerm.findFirst({
      where: { isActive: true },
      orderBy: { startDate: 'desc' },
    });
    return active;
  }

  async findOne(id: number) {
    const term = await this.prisma.academicTerm.findUnique({ where: { id } });
    if (!term) throw new NotFoundException('Term not found');
    return term;
  }

  async create(data: CreateTermDto) {
    if (data.isActive) {
      await this.prisma.academicTerm.updateMany({
        where: { isActive: true },
        data: { isActive: false },
      });
    }
    return this.prisma.academicTerm.create({
      data: {
        name: data.name,
        startDate: new Date(data.startDate),
        endDate: data.endDate ? new Date(data.endDate) : null,
        isActive: data.isActive ?? false,
      },
    });
  }

  async activate(id: number) {
    await this.findOne(id);
    await this.prisma.academicTerm.updateMany({
      where: { isActive: true },
      data: { isActive: false },
    });
    return this.prisma.academicTerm.update({
      where: { id },
      data: { isActive: true },
    });
  }
}
