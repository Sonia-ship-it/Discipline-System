import { IsArray, IsDateString, IsEnum, IsInt, IsOptional } from 'class-validator';
import { ParentNotificationType } from '../../generated';

export class NotifyParentsDto {
  @IsOptional()
  @IsInt()
  termId?: number;

  @IsOptional()
  @IsDateString()
  date?: string;

  @IsEnum(ParentNotificationType)
  type: ParentNotificationType;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  studentIds?: number[];
}
