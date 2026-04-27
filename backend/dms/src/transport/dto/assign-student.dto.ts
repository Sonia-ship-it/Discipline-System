import { IsNumber, IsNotEmpty, IsOptional } from 'class-validator';
import { TransportStatus } from '../../generated';

export class AssignStudentDto {
  @IsNumber()
  @IsNotEmpty()
  studentId: number;

  @IsNumber()
  @IsNotEmpty()
  transportId: number;

  @IsOptional()
  status?: TransportStatus;
}