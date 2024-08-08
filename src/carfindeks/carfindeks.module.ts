import { Module } from '@nestjs/common';
import { CarFindeksService } from './carfindeks.service';
import { CarFindeksController } from './carfindeks.controller';
import { PrismaService } from "../prisma/prisma.service"

@Module({
  controllers: [CarFindeksController],
  providers: [CarFindeksService, PrismaService],
})
export class CarFindeksModule {}
