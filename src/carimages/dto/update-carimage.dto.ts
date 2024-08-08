import { PartialType } from '@nestjs/mapped-types';
import { CreateCarImageDto } from './create-carimage.dto';

export class UpdateCarImageDto extends PartialType(CreateCarImageDto) {}
