import { Test, TestingModule } from '@nestjs/testing';
import { DisciplineRecordService } from './discipline-record.service';

describe('DisciplineRecordService', () => {
  let service: DisciplineRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DisciplineRecordService],
    }).compile();

    service = module.get<DisciplineRecordService>(DisciplineRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
