import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePhoneBorrowDto } from './dto/create-phone-borrow.dto';
import { UpdatePhoneBorrowDto } from './dto/update-phone-borrow.dto';

@Injectable()
export class PhoneBorrowService {
  constructor(private prisma: PrismaService) {}

  async create(createPhoneBorrowDto: CreatePhoneBorrowDto) {
    const student = await this.prisma.student.findUnique({
      where: { id: createPhoneBorrowDto.studentId },
    });

    if (!student) {
      throw new NotFoundException(`Student with ID ${createPhoneBorrowDto.studentId} not found`);
    }

    return this.prisma.phoneBorrow.create({
      data: {
        studentId: createPhoneBorrowDto.studentId,
        phoneModel: 'Mara Z',
        status: 'BORROWED',
      },
      include: {
        student: true,
      },
    });
  }

  async findAll() {
    return this.prisma.phoneBorrow.findMany({
      include: {
        student: true,
      },
      orderBy: {
        borrowedAt: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const phoneBorrow = await this.prisma.phoneBorrow.findUnique({
      where: { id },
      include: {
        student: true,
      },
    });

    if (!phoneBorrow) {
      throw new NotFoundException(`Phone borrow record with ID ${id} not found`);
    }

    return phoneBorrow;
  }

  async update(id: number, updatePhoneBorrowDto: UpdatePhoneBorrowDto) {
    await this.findOne(id);

    const updateData: any = {
      ...updatePhoneBorrowDto,
    };

    if (updatePhoneBorrowDto.status === 'RETURNED') {
      updateData.returnedAt = new Date();
    }

    return this.prisma.phoneBorrow.update({
      where: { id },
      data: updateData,
      include: {
        student: true,
      },
    });
  }

  async markAsReturned(id: number) {
    await this.findOne(id);

    return this.prisma.phoneBorrow.update({
      where: { id },
      data: {
        status: 'RETURNED',
        returnedAt: new Date(),
      },
      include: {
        student: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.phoneBorrow.delete({
      where: { id },
    });
  }
}
