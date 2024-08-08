import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Contact } from '@prisma/client';

@Injectable()
export class ContactsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createContactDto: Prisma.ContactCreateInput): Promise<Contact> {
    return this.prisma.contact.create({
      data: createContactDto,
    });
  }

  async findAll(): Promise<Contact[]> {
    return this.prisma.contact.findMany();
  }

  async findOne(id: number): Promise<Contact | null> {
    return this.prisma.contact.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateContactDto: Prisma.ContactUpdateInput): Promise<Contact> {
    return this.prisma.contact.update({
      where: { id },
      data: updateContactDto,
    });
  }

  async remove(id: number): Promise<Contact> {
    return this.prisma.contact.delete({
      where: { id },
    });
  }
}

