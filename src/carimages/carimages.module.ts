import { Module } from '@nestjs/common';
import { CarImagesService } from "./carimages.service"
import { CarImagesController } from './carimages.controller';

import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [CarImagesController],
  providers: [CarImagesService, PrismaService],
})
export class CarImagesModule {}
