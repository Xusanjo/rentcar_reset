import { PartialType } from '@nestjs/mapped-types';
import { CreateCarFindeksDto } from './create-carfindeks.dto';

export class UpdateCarFindeksDto extends PartialType(CreateCarFindeksDto) {}
