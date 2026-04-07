// src/staff/dto/create-staff.dto.ts
import { IsString, IsNotEmpty, IsEmail, MinLength, IsOptional } from 'class-validator';

export class CreateStaffDto {
  @IsString() @IsNotEmpty() firstName: string;
  @IsString() @IsNotEmpty() lastName: string;
  @IsString() @IsNotEmpty() phoneNumber: string;
  @IsString() @IsNotEmpty() role: string;
  @IsEmail() @IsNotEmpty() email: string;
  @IsString() @MinLength(6) password: string;
  @IsOptional() @IsString() status?: string;
}
