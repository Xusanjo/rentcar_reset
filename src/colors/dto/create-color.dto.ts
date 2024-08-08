import { IsString, IsNotEmpty } from 'class-validator';

export class CreateColorDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
