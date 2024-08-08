import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateFindeksDto {
  @IsNumber()
  @IsNotEmpty()
  readonly score: number;

  @IsNumber()
  @IsNotEmpty()
  readonly customerId: number;
}
