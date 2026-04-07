import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateStudentDto {
  @IsString() @IsNotEmpty() firstName: string;
  @IsString() @IsNotEmpty() lastName: string;
  @IsString() @IsNotEmpty() fatherName: string;
  @IsString() @IsNotEmpty() motherName: string;
  @IsString() @IsNotEmpty() fatherPhoneNumber: string;
  @IsString() @IsNotEmpty() motherPhoneNumber: string;
  @IsString() @IsNotEmpty() year: string;
  @IsString() @IsNotEmpty() classGroup: string;
  @IsOptional() @IsString() status?: string;
}