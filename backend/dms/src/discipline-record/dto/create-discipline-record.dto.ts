import { IsInt, IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateDisciplineRecordDto {
  @IsInt() studentId: number;
  @IsString() reason: string;
  @IsOptional() @IsString() location?: string;
  @IsOptional() @IsString() status?: string;
  @IsOptional() @IsDateString() outDate?: string;
  @IsOptional() @IsDateString() returnDate?: string;
}