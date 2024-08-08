import { Module } from '@nestjs/common';
import { FindeksService } from "./findeks.service"
import { FindeksController } from "./findeks.controller"

import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [FindeksController],
  providers: [FindeksService, PrismaService],
})
export class FindeksModule {}
