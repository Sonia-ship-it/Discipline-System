import { IsInt, IsEnum, IsDateString, IsOptional } from 'class-validator';

export class MarkAttendanceDto {
  @IsInt()
  studentId: number;

  @IsEnum(['REPORTED', 'NOT_REPORTED'])
  status: 'REPORTED' | 'NOT_REPORTED';

  @IsDateString()
  @IsOptional()
  arrivalTime?: string;
}
