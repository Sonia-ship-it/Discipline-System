import { IsEnum, IsOptional } from 'class-validator';

export class UpdatePhoneBorrowDto {
  @IsEnum(['BORROWED', 'RETURNED'])
  @IsOptional()
  status?: 'BORROWED' | 'RETURNED';
}
