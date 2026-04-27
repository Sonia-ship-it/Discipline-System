import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTransportDto {
  @IsString()
  @IsNotEmpty()
  location: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}