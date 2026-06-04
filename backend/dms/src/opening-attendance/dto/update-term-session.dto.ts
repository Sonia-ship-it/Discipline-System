import { IsString, IsDateString, IsEnum, IsOptional } from 'class-validator';

export class UpdateTermSessionDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsDateString()
  @IsOptional()
  startDate?: string;

  @IsDateString()
  @IsOptional()
  endDate?: string;

  @IsDateString()
  @IsOptional()
  openingDate?: string;

  @IsEnum(['UPCOMING', 'ACTIVE', 'COMPLETED'])
  @IsOptional()
  status?: 'UPCOMING' | 'ACTIVE' | 'COMPLETED';
}
