import { Injectable } from '@nestjs/common';
import { CreateCarFindeksDto } from "./dto/create-carfindeks.dto"
import { UpdateCarFindeksDto } from "./dto/update-carfindeks.dto"

import { PrismaService } from "../prisma/prisma.service"

@Injectable()
export class CarFindeksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCarFindeksDto: CreateCarFindeksDto) {
    return this.prisma.carFindeks.create({
      data: createCarFindeksDto,
    });
  }

  async findAll() {
    return this.prisma.carFindeks.findMany();
  }

  async findOne(id: number) {
    return this.prisma.carFindeks.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateCarFindeksDto: UpdateCarFindeksDto) {
    return this.prisma.carFindeks.update({
      where: { id },
      data: updateCarFindeksDto,
    });
  }

  async remove(id: number) {
    return this.prisma.carFindeks.delete({
      where: { id },
    });
  }
}
