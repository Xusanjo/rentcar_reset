import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCarFindeksDto {
  @IsString()
  @IsNotEmpty()
  readonly carId: string;

  @IsNumber()
  @IsNotEmpty()
  readonly score: number;
}
