import { IsEnum, IsBoolean, IsOptional } from 'class-validator';
import { StaffRole } from '../../generated';

export class AssignRoleDto {
  @IsEnum(StaffRole)
  role: StaffRole;
}

export class ToggleActiveDto {
  @IsBoolean()
  isActive: boolean;
}
