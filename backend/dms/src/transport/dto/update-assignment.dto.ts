import { IsOptional, IsEnum } from 'class-validator';
import { TransportStatus } from '../../generated';

export class UpdateAssignmentDto {
    @IsOptional()
    @IsEnum(TransportStatus)
    status?: TransportStatus;
}
