import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateCarImageDto {
  @IsString()
  @IsNotEmpty()
  readonly carId: string;

  @IsUrl()
  @IsNotEmpty()
  readonly imageUrl: string; // `url` ning to'g'ri nomi `imageUrl` bo'lishi kerak
}


