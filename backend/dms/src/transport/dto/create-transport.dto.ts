import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTransportDto {
  @IsString() @IsNotEmpty() firstName: string;
  @IsString() @IsNotEmpty() lastName: string;
  @IsString() @IsNotEmpty() location: string;
  @IsString() @IsNotEmpty() status: string;
}
