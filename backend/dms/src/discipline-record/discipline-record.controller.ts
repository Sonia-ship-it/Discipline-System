// src/discipline-record/discipline-record.controller.ts
import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards } from '@nestjs/common';
import { DisciplineRecordService } from './discipline-record.service';
import { CreateDisciplineRecordDto } from './dto/create-discipline-record.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('records')
export class DisciplineRecordController {
  constructor(private readonly recordService: DisciplineRecordService) { }

  @Post()
  create(@Body() recordData: CreateDisciplineRecordDto) {
    return this.recordService.create(recordData);
  }

  @Get()
  findAll() {
    return this.recordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: CreateDisciplineRecordDto) {
    return this.recordService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recordService.remove(+id);
  }
}