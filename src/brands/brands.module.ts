import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BrandsService } from './brands.service';

@Module({
  providers: [BrandsService, PrismaService],  
  exports: [BrandsService],
})
export class BrandsModule {}
