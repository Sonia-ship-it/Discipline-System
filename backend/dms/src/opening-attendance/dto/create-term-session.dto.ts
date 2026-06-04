import { IsString, IsInt, IsDateString, IsBoolean, IsOptional } from 'class-validator';

export class CreateTermSessionDto {
  @IsString()
  name: string; // "Term 1", "Term 2", "Term 3"

  @IsInt()
  year: number; // 2026, 2027, etc.

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsDateString()
  openingDate: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
