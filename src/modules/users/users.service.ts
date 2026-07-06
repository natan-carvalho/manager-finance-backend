import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/infrastructure/database/prisma.service';
import { randomUUID } from 'node:crypto';
import { hashSync } from 'bcrypt'


@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({
      data: {
        id: randomUUID(),
        ...createUserDto,
        password: hashSync(createUserDto.password, 12)
      }
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return this.prisma.user.findFirst({
      where: {
        id
      }
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: {
        id
      },
      data: {
        ...updateUserDto
      }
    });
  }

  async remove(id: string) {
    return this.prisma.user.delete({
      where: {
        id
      }
    });
  }
}
