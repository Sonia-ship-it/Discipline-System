import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { OpeningAttendanceService } from './opening-attendance.service';
import { AutoTermActivatorService } from './auto-term-activator.service';
import { CreateTermSessionDto } from './dto/create-term-session.dto';
import { UpdateTermSessionDto } from './dto/update-term-session.dto';
import { MarkOpeningAttendanceDto } from './dto/mark-opening-attendance.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('opening-attendance')
@UseGuards(JwtAuthGuard)
export class OpeningAttendanceController {
  constructor(
    private readonly openingAttendanceService: OpeningAttendanceService,
    private readonly autoTermActivatorService: AutoTermActivatorService,
  ) {}

  @Post('term-sessions')
  createTermSession(@Body() dto: CreateTermSessionDto) {
    return this.openingAttendanceService.createTermSession(dto);
  }

  @Get('term-sessions')
  getAllTermSessions() {
    return this.openingAttendanceService.getAllTermSessions();
  }

  @Get('term-sessions/active')
  getActiveTerm() {
    return this.openingAttendanceService.getActiveTerm();
  }

  @Patch('term-sessions/:id')
  updateTermSession(@Param('id') id: string, @Body() dto: UpdateTermSessionDto) {
    return this.openingAttendanceService.updateTermSession(+id, dto);
  }

  @Delete('term-sessions/:id')
  deleteTermSession(@Param('id') id: string) {
    return this.openingAttendanceService.deleteTermSession(+id);
  }

  @Post('term-sessions/:id/activate')
  setActiveTerm(@Param('id') id: string) {
    return this.openingAttendanceService.setActiveTerm(+id);
  }

  @Post('auto-activate-term')
  async autoActivateTerm() {
    await this.autoTermActivatorService.manualCheckAndActivate();
    return { message: 'Term activation check completed' };
  }

  @Post('term-sessions/:id/initialize')
  initializeTermAttendance(@Param('id') id: string) {
    return this.openingAttendanceService.initializeTermAttendance(+id);
  }

  @Get('terms/:id/attendances')
  getTermAttendance(@Param('id') id: string) {
    return this.openingAttendanceService.getTermAttendance(+id);
  }

  @Post('mark')
  markAttendance(@Body() dto: MarkOpeningAttendanceDto) {
    return this.openingAttendanceService.markAttendance(dto);
  }

  @Get('terms/:id/dashboard')
  getDashboard(@Param('id') id: string) {
    return this.openingAttendanceService.getDashboard(+id);
  }

  @Get('terms/:id/reports/opening-day')
  getOpeningDayReport(@Param('id') id: string) {
    return this.openingAttendanceService.getOpeningDayReport(+id);
  }

  @Get('terms/:id/reports/class-reporting')
  getClassReportingReport(@Param('id') id: string) {
    return this.openingAttendanceService.getClassReportingReport(+id);
  }
}
