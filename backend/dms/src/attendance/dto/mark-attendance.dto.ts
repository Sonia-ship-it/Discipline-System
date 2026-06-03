import { IsArray, IsDateString, IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { AttendanceStatus } from '../../generated';

export class AttendanceEntryDto {
  @IsInt()
  studentId: number;

  @IsEnum(AttendanceStatus)
  status: AttendanceStatus;

  @IsOptional()
  @IsString()
  note?: string;
}

export class MarkAttendanceDto {
  @IsOptional()
  @IsInt()
  termId?: number;

  @IsDateString()
  date: string;

  @IsArray()
  records: AttendanceEntryDto[];
}

export class TermOpeningDto {
  @IsOptional()
  @IsInt()
  termId?: number;

  @IsOptional()
  @IsDateString()
  date?: string;

  @IsOptional()
  @IsString()
  year?: string;

  @IsOptional()
  @IsString()
  classGroup?: string;
}
