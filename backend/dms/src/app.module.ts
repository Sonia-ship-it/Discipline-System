import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { StaffModule } from './staff/staff.module';
import { PrismaModule } from './prisma/prisma.module';
import { DisciplineRecordModule } from './discipline-record/discipline-record.module';
import { AuthModule } from './auth/auth.module';
import { ThrottlerModule } from '@nestjs/throttler';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
