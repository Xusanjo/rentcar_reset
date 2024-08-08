import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FindeksService } from "./findeks.service"
import { CreateFindeksDto } from "./dto/create-findeks.dto"
import { UpdateFindeksDto } from "./dto/update-findeks.dto"

@Controller('findeks')
export class FindeksController {
  constructor(private readonly findeksService: FindeksService) {}

  @Post()
  create(@Body() createFindeksDto: CreateFindeksDto) {
    return this.findeksService.create(createFindeksDto);
  }

  @Get()
  findAll() {
    return this.findeksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findeksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFindeksDto: UpdateFindeksDto) {
    return this.findeksService.update(+id, updateFindeksDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.findeksService.remove(+id);
  }
}
