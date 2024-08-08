import { Injectable } from '@nestjs/common';
import { CreateRentalDto } from "./dto/create-rental.dto"
import { UpdateRentalDto } from './dto/update-rental.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RentalsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRentalDto: CreateRentalDto) {
    return this.prisma.rental.create({
      data: {
        carId: createRentalDto.carId,
        userId: createRentalDto.userId,
        startDate: createRentalDto.startDate,
        endDate: createRentalDto.endDate,
        totalPrice: createRentalDto.totalPrice,
        customer: createRentalDto.customer, // `customer` ni qo'shish
      } as Prisma.RentalCreateInput,
    });
  }

  async findAll() {
    return this.prisma.rental.findMany();
  }

  async findOne(id: number) {
    return this.prisma.rental.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateRentalDto: UpdateRentalDto) {
    return this.prisma.rental.update({
      where: { id },
      data: updateRentalDto as Prisma.RentalUpdateInput,
    });
  }

  async remove(id: number) {
    return this.prisma.rental.delete({
      where: { id },
    });
  }
}


