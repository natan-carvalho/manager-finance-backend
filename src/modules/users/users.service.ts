import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/infrastructure/database/prisma.service';
import { randomUUID } from 'node:crypto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({
      data: {
        id: randomUUID(),
        ...createUserDto
      }
    });
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
