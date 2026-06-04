import { IsString, IsInt, IsDateString } from 'class-validator';

export class CreateTermSessionDto {
  @IsString()
  name: string;

  @IsInt()
  year: number;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsDateString()
  openingDate: string;
}
