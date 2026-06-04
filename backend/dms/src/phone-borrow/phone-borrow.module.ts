import { Module } from '@nestjs/common';
import { PhoneBorrowService } from './phone-borrow.service';
import { PhoneBorrowController } from './phone-borrow.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PhoneBorrowController],
  providers: [PhoneBorrowService],
})
export class PhoneBorrowModule {}
