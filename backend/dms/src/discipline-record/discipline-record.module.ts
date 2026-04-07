import { Module } from '@nestjs/common';
import { DisciplineRecordService } from './discipline-record.service';
import { DisciplineRecordController } from './discipline-record.controller';

@Module({
  providers: [DisciplineRecordService],
  controllers: [DisciplineRecordController]
})
export class DisciplineRecordModule {}
