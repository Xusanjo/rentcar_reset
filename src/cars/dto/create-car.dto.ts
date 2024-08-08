import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCarDto {
  @IsString()
  @IsNotEmpty()
  readonly model: string;

  @IsString()
  @IsNotEmpty()
  readonly brand: string;

  @IsNumber()
  @IsNotEmpty()
  readonly year: number;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsString()
  @IsNotEmpty()
  readonly color: string;
}
