import { IsDate, IsNumber, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRentalDto {
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  readonly carId: number;

  @IsNumber()
  @IsNotEmpty()
  readonly userId: number;

  @IsDate()
  @IsNotEmpty()
  readonly startDate: Date;

  @IsDate()
  @IsNotEmpty()
  readonly endDate: Date;

  @IsNumber()
  @IsNotEmpty()
  readonly totalPrice: number;

  @IsString() // Agar customer string bo'lsa
  @IsNotEmpty()
  readonly customer: string; // Yoki kerak bo'lmasa olib tashlang
}
