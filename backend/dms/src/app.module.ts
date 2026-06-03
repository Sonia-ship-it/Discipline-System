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
import { TermModule } from './term/term.module';
import { AttendanceModule } from './attendance/attendance.module';
import { NotificationModule } from './notification/notification.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    StudentModule,
    StaffModule,
    PrismaModule,
    DisciplineRecordModule,
    AuthModule,
    ThrottlerModule.forRoot([{
      ttl: 60,
      limit: 5,
    }]),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TransportModule,
    TermModule,
    AttendanceModule,
    NotificationModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
