import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TransportService } from './transport.service';
import { CreateTransportDto } from './dto/create-transport.dto';
import { UpdateTransportDto } from './dto/update-transport.dto';
import { AssignStudentDto } from './dto/assign-student.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('transport')
export class TransportController {
  constructor(private readonly transportService: TransportService) { }

  @Post()
  create(@Body() createTransportDto: CreateTransportDto) {
    return this.transportService.create(createTransportDto);
  }

  @Post('assign')
  assignStudent(@Body() assignStudentDto: AssignStudentDto) {
    return this.transportService.assignStudent(assignStudentDto);
  }

  @Get('assignments')
  findAllAssignments() {
    return this.transportService.findAllAssignments();
  }

  @Get('assignments/:id')
  findOneAssignment(@Param('id') id: string) {
    return this.transportService.findOneAssignment(+id);
  }

  @Patch('assignments/:id')
  updateAssignment(@Param('id') id: string, @Body('status') status: string) {
    return this.transportService.updateAssignment(+id, status);
  }

  @Delete('assignments/:id')
  removeAssignment(@Param('id') id: string) {
    return this.transportService.removeAssignment(+id);
  }

  @Get()
  findAll() {
    return this.transportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transportService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransportDto: UpdateTransportDto) {
    return this.transportService.update(+id, updateTransportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transportService.remove(+id);
  }
}
