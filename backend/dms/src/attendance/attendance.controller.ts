import { Controller, Get, Post, Body, Query, Param, UseGuards, Req } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { MarkAttendanceDto, TermOpeningDto } from './dto/mark-attendance.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Get()
  findAll(
    @Query('termId') termId?: string,
    @Query('date') date?: string,
    @Query('year') year?: string,
    @Query('classGroup') classGroup?: string,
  ) {
    return this.attendanceService.findAll({
      termId: termId ? +termId : undefined,
      date,
      year,
      classGroup,
    });
  }

  @Get('student/:studentId')
  getForStudent(
    @Param('studentId') studentId: string,
    @Query('termId') termId?: string,
  ) {
    return this.attendanceService.getStudentAttendance(
      +studentId,
      termId ? +termId : undefined,
    );
  }

  @Post('mark')
  mark(@Body() dto: MarkAttendanceDto, @Req() req: { user?: { id: number } }) {
    return this.attendanceService.markBulk(dto, req.user?.id);
  }

  @Post('term-opening')
  termOpening(@Body() dto: TermOpeningDto, @Req() req: { user?: { id: number } }) {
    return this.attendanceService.termOpening(dto, req.user?.id);
  }
}
