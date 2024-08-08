import { Injectable } from '@nestjs/common';
import { CreateFindeksDto } from "./dto/create-findeks.dto"
import { UpdateFindeksDto } from "./dto/update-findeks.dto"

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FindeksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFindeksDto: CreateFindeksDto) {
    return this.prisma.findeks.create({
      data: createFindeksDto,
    });
  }

  async findAll() {
    return this.prisma.findeks.findMany();
  }

  async findOne(id: number) {
    return this.prisma.findeks.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateFindeksDto: UpdateFindeksDto) {
    return this.prisma.findeks.update({
      where: { id },
      data: updateFindeksDto,
    });
  }

  async remove(id: number) {
    return this.prisma.findeks.delete({
      where: { id },
    });
  }
}
