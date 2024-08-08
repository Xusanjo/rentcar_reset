import { Injectable } from '@nestjs/common';
import { Prisma, Brand } from '@prisma/client';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class BrandsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBrandDto: Prisma.BrandCreateInput): Promise<Brand> {
    return this.prisma.brand.create({
      data: createBrandDto,
    });
  }

  async findAll(): Promise<Brand[]> {
    return this.prisma.brand.findMany();
  }

  async findOne(id: number): Promise<Brand | null> {
    return this.prisma.brand.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateBrandDto: Prisma.BrandUpdateInput): Promise<Brand> {
    return this.prisma.brand.update({
      where: { id },
      data: updateBrandDto,
    });
  }

  async remove(id: number): Promise<Brand> {
    return this.prisma.brand.delete({
      where: { id },
    });
  }
}

