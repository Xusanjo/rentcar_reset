import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarFindeksService } from './carfindeks.service';
import { CreateCarFindeksDto } from "./dto/create-carfindeks.dto"
import { UpdateCarFindeksDto } from "./dto/update-carfindeks.dto"

@Controller('carfindeks')
export class CarFindeksController {
  constructor(private readonly carFindeksService: CarFindeksService) {}

  @Post()
  create(@Body() createCarFindeksDto: CreateCarFindeksDto) {
    return this.carFindeksService.create(createCarFindeksDto);
  }

  @Get()
  findAll() {
    return this.carFindeksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carFindeksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarFindeksDto: UpdateCarFindeksDto) {
    return this.carFindeksService.update(+id, updateCarFindeksDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carFindeksService.remove(+id);
  }
}
