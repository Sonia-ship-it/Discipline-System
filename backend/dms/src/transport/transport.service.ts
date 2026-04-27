import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTransportDto } from './dto/create-transport.dto';
import { UpdateTransportDto } from './dto/update-transport.dto';
import { AssignStudentDto } from './dto/assign-student.dto';

@Injectable()
export class TransportService {
  constructor(private prisma: PrismaService) { }

  async create(createTransportDto: CreateTransportDto) {
    return this.prisma.transport.create({
      data: {
        location: createTransportDto.location,
        price: createTransportDto.price,
      },
    });
  }

  async assignStudent(assignStudentDto: AssignStudentDto) {
    const student = await this.prisma.student.findUnique({ where: { id: assignStudentDto.studentId } });
    if (!student) throw new NotFoundException('Student not found');

    const transport = await this.prisma.transport.findUnique({ where: { id: assignStudentDto.transportId } });
    if (!transport) throw new NotFoundException('Transport route not found');

    const statusValue = assignStudentDto.status || 'NOT_PAID';

    return this.prisma.transportAssignment.create({
      data: {
        studentId: assignStudentDto.studentId,
        transportId: assignStudentDto.transportId,
        status: statusValue,
      }
    });
  }

  async findAll() {
    return this.prisma.transport.findMany({
      include: {
        assignments: {
          include: {
            student: true,
          }
        }
      }
    });
  }

  async findOne(id: number) {
    return this.prisma.transport.findUnique({
      where: { id },
      include: {
        assignments: {
          include: {
            student: true,
          }
        }
      }
    });
  }

  async update(id: number, updateTransportDto: UpdateTransportDto) {
    return this.prisma.transport.update({
      where: { id },
      data: updateTransportDto,
    });
  }

  async remove(id: number) {
    return this.prisma.transport.delete({
      where: { id },
    });
  }

  async findAllAssignments() {
    return this.prisma.transportAssignment.findMany({
      include: {
        student: true,
        transport: true,
      }
    });
  }

  async findOneAssignment(id: number) {
    return this.prisma.transportAssignment.findUnique({
      where: { id },
      include: {
        student: true,
        transport: true,
      }
    });
  }

  async updateAssignment(id: number, status: string) {
    const statusValue = status as any;
    return this.prisma.transportAssignment.update({
      where: { id },
      data: { status: statusValue },
    });
  }

  async removeAssignment(id: number) {
    return this.prisma.transportAssignment.delete({
      where: { id },
    });
  }
}
