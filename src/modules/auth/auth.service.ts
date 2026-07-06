import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/infrastructure/database/prisma.service';
import { compareSync } from 'bcrypt';
import { JWT_SECRET } from 'src/config/jwt.config';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService
  ) {

  }

  async login(loginDto: LoginDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: loginDto.email
      }
    });

    if (!user) {
      throw new Error('Invalid Credentials');
    }
    const isPasswordValid = compareSync(loginDto.password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid Credentials');
    }

    const token = await this.jwtService.signAsync({ name: user.name, email: user.email });
    return { access_token: token };
  }
}
