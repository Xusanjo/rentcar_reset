import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class CreatePaymentDto {
  @IsNumber()
  @IsNotEmpty()
  readonly amount: number;

  @IsString()
  @IsNotEmpty()
  readonly method: string;

  @IsNumber()
  @IsNotEmpty()
  readonly rentalId: number;
}
