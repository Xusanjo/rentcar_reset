import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import { join } from 'path';

@Injectable()
export class FilesService {
  async saveAvatar(file: Express.Multer.File, userId: number) {
    const filePath = join(__dirname, '..', 'uploads', `${userId}-${file.originalname}`);
    await fs.rename(file.path, filePath);
    return filePath;
  }
}
