import { PartialType } from '@nestjs/mapped-types';
import { CreateFindeksDto } from "./create-findeks.dto"


export class UpdateFindeksDto extends PartialType(CreateFindeksDto) {}
