import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { OpeningAttendanceService } from './opening-attendance.service';
import { OpeningAttendanceController } from './opening-attendance.controller';
import { AutoTermActivatorService } from './auto-term-activator.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule, ScheduleModule.forRoot()],
  controllers: [OpeningAttendanceController],
  providers: [OpeningAttendanceService, AutoTermActivatorService],
})
export class OpeningAttendanceModule {}
