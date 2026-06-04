import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  ParseIntPipe,
  UseGuards,
  Request,
} from '@nestjs/common';
import { TermAttendanceService } from './term-attendance.service';
import { CreateTermSessionDto } from './dto/create-term-session.dto';
import { MarkAttendanceDto } from './dto/mark-attendance.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('term-attendance')
@UseGuards(JwtAuthGuard)
export class TermAttendanceController {
  constructor(private readonly service: TermAttendanceService) {}

  @Post('sessions')
  createSession(@Body() dto: CreateTermSessionDto) {
    return this.service.createTermSession(dto);
  }

  @Get('sessions')
  getAllSessions() {
    return this.service.getAllSessions();
  }

  @Get('sessions/active')
  getActiveSession() {
    return this.service.getActiveSession();
  }

  @Get('sessions/ensure-current')
  ensureCurrentSession() {
    return this.service.ensureCurrentTermSession();
  }

  @Patch('sessions/:id/activate')
  setActiveSession(@Param('id', ParseIntPipe) id: number) {
    return this.service.setActiveSession(id);
  }

  @Get('sessions/:termId/attendances')
  getAttendances(@Param('termId', ParseIntPipe) termId: number) {
    return this.service.getAttendanceByTerm(termId);
  }

  @Post('sessions/:termId/mark')
  markAttendance(
    @Param('termId', ParseIntPipe) termId: number,
    @Body() dto: MarkAttendanceDto,
    @Request() req: any,
  ) {
    return this.service.markAttendance(termId, dto, req.user.id);
  }

  @Get('sessions/:termId/dashboard')
  getDashboard(@Param('termId', ParseIntPipe) termId: number) {
    return this.service.getDashboardStats(termId);
  }

  @Get('sessions/:termId/class-report')
  getClassReport(@Param('termId', ParseIntPipe) termId: number) {
    return this.service.getClassReport(termId);
  }
}
