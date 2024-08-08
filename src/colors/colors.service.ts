import { Injectable } from '@nestjs/common';
import { CreateColorDto } from "./dto/create-color.dto"
import { UpdateColorDto } from './dto/update-color.dto';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ColorsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createColorDto: CreateColorDto) {
    return this.prisma.color.create({
      data: createColorDto,
    });
  }

  async findAll() {
    return this.prisma.color.findMany();
  }

  async findOne(id: number) {
    return this.prisma.color.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateColorDto: UpdateColorDto) {
    return this.prisma.color.update({
      where: { id },
      data: updateColorDto,
    });
  }

  async remove(id: number) {
    return this.prisma.color.delete({
      where: { id },
    });
  }
}
