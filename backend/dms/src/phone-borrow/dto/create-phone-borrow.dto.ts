import { IsInt, IsNotEmpty } from 'class-validator';

export class CreatePhoneBorrowDto {
  @IsInt()
  @IsNotEmpty()
  studentId: number;
}
