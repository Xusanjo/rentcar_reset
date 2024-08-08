// import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { UpdatePasswordDto } from "../auth/dto/update-password.dto"
// import { PrismaService } from '../prisma/prisma.service';
// import { PrismaClient, User } from '@prisma/client'; 

// @Injectable()
// export class UsersService {
//   constructor(private readonly prisma: PrismaService) {}

//   async findByEmail(email: string): Promise<User | null> {
//     return this.prisma.user.findUnique({
//       where: { email },
//     });
//   }

//   async create(createUserDto: CreateUserDto): Promise<User> {
//     return this.prisma.user.create({
//       data: createUserDto,
//     });
//   }

//   async findAll(): Promise<User[]> {
//     return this.prisma.user.findMany();
//   }

//   async findOne(id: number): Promise<User | null> {
//     return this.prisma.user.findUnique({
//       where: { id },
//     });
//   }

//   async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
//     return this.prisma.user.update({
//       where: { id },
//       data: updateUserDto,
//     });
//   }

//   async remove(id: number): Promise<User> {
//     return this.prisma.user.delete({
//       where: { id },
//     });
//   }

//   async updatePassword(id: number, updatePasswordDto: UpdatePasswordDto): Promise<User> {
//     const user = await this.findOne(id);
//     if (!user) {
//       throw new Error('User not found');
//     }

//     // Parolni tekshirish va yangilash uchun kodni qo'shing
//     // Masalan, parolni bcrypt yordamida tekshirish va hashlash

//     const isMatch = await bcrypt.compare(updatePasswordDto.oldPassword, user.password);
//     if (!isMatch) {
//       throw new Error('Old password is incorrect');
//     }

//     const hashedPassword = await bcrypt.hash(updatePasswordDto.newPassword, 10);
//     return this.prisma.user.update({
//       where: { id },
//       data: { password: hashedPassword },
//     });
//   }
// }























import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdatePasswordDto } from '../auth/dto/update-password.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    return this.prisma.user.create({
      data: { ...createUserDto, password: hashedPassword },
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  async updatePassword(id: number, updatePasswordDto: UpdatePasswordDto) {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(updatePasswordDto.oldPassword, user.password);
    if (!isMatch) {
      throw new Error('Old password is incorrect');
    }

    const hashedPassword = await bcrypt.hash(updatePasswordDto.newPassword, 10);
    return this.prisma.user.update({
      where: { id },
      data: { password: hashedPassword },
    });
  }
}
