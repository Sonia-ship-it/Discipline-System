import { Module } from '@nestjs/common';
import { TermAttendanceService } from './term-attendance.service';
import { TermAttendanceController } from './term-attendance.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { SmsService } from '../sms/sms.service';

@Module({
  imports: [PrismaModule],
  controllers: [TermAttendanceController],
  providers: [TermAttendanceService, SmsService],
})
export class TermAttendanceModule {}
