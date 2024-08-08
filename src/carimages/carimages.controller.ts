import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarImagesService } from "./carimages.service"
import { CreateCarImageDto } from './dto/create-carimage.dto';
import { UpdateCarImageDto } from './dto/update-carimage.dto';

@Controller('carimages')
export class CarImagesController {
  constructor(private readonly carImagesService: CarImagesService) {}

  @Post()
  create(@Body() createCarImageDto: CreateCarImageDto) {
    return this.carImagesService.create(createCarImageDto);
  }

  @Get()
  findAll() {
    return this.carImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carImagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarImageDto: UpdateCarImageDto) {
    return this.carImagesService.update(+id, updateCarImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carImagesService.remove(+id);
  }
}
