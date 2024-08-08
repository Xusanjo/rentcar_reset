import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [MulterModule.register({
    dest: './uploads', // Upload qilingan fayllar saqlanadigan joy
  })],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
