import { Test, TestingModule } from '@nestjs/testing';
import { DisciplineRecordController } from './discipline-record.controller';

describe('DisciplineRecordController', () => {
  let controller: DisciplineRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DisciplineRecordController],
    }).compile();

    controller = module.get<DisciplineRecordController>(DisciplineRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
