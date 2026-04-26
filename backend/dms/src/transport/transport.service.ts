import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTransportDto } from './dto/create-transport.dto';
import { UpdateTransportDto } from './dto/update-transport.dto';

@Injectable()
export class TransportService {
  constructor(private prisma: PrismaService) { }

  create(createTransportDto: CreateTransportDto) {
    return 'This action adds a new transport';
  }

  async findAll() {
    const students = await this.prisma.student.findMany({
      include: {
        records: {
          orderBy: { outDate: 'desc' },
          take: 1,
        },
      },
    });

    return students.map((student) => {
      let status = student.transportStatus === 'PAID' ? 'Paid' : 'Not Paid';

      const latestRecord = student.records[0];
      if (latestRecord && latestRecord.status === 'OUT') {
        status = 'Went Out';
      }

      return {
        name: `${student.firstName} ${student.lastName}`,
        location: student.location || 'N/A',
        status: status,
      };
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} transport`;
  }

  update(id: number, updateTransportDto: UpdateTransportDto) {
    return `This action updates a #${id} transport`;
  }

  remove(id: number) {
    return `This action removes a #${id} transport`;
  }
}
