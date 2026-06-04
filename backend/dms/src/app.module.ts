import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { StaffModule } from './staff/staff.module';
import { PrismaModule } from './prisma/prisma.module';
import { DisciplineRecordModule } from './discipline-record/discipline-record.module';
import { AuthModule } from './auth/auth.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule } from '@nestjs/config';
import { TransportModule } from './transport/transport.module';
import { NotificationModule } from './notification/notification.module';
import { AdminModule } from './admin/admin.module';
import { PhoneBorrowModule } from './phone-borrow/phone-borrow.module';
import { OpeningAttendanceModule } from './opening-attendance/opening-attendance.module';
import { TermAttendanceModule } from './term-attendance/term-attendance.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([{ ttl: 60, limit: 5 }]),
    PrismaModule,
    AuthModule,
    StudentModule,
    StaffModule,
    DisciplineRecordModule,
    TransportModule,
    NotificationModule,
    AdminModule,
    PhoneBorrowModule,
    OpeningAttendanceModule,
    TermAttendanceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
