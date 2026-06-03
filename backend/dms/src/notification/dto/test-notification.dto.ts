import { IsInt, IsString, IsEnum, IsOptional } from 'class-validator';
import { ParentNotificationType } from '../../generated';

export class TestNotificationDto {
  @IsInt()
  studentId: number;

  @IsString()
  phone: string;

  @IsEnum(ParentNotificationType)
  @IsOptional()
  type?: ParentNotificationType;

  @IsString()
  @IsOptional()
  customMessage?: string;
}
