import { Injectable } from '@nestjs/common';
import { CreateCarImageDto } from './dto/create-carimage.dto';
import { UpdateCarImageDto } from './dto/update-carimage.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CarImagesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCarImageDto: CreateCarImageDto) {
    return this.prisma.carImage.create({
      data: {
        carId: +createCarImageDto.carId, // carId ni number ga o'zgartirish
        imageUrl: createCarImageDto.imageUrl,
      } as Prisma.CarImageCreateInput,
    });
  }

  async findAll() {
    return this.prisma.carImage.findMany();
  }

  async findOne(id: number) {
    return this.prisma.carImage.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateCarImageDto: UpdateCarImageDto) {
    return this.prisma.carImage.update({
      where: { id },
      data: updateCarImageDto as Prisma.CarImageUpdateInput,
    });
  }

  async remove(id: number) {
    return this.prisma.carImage.delete({
      where: { id },
    });
  }
}


