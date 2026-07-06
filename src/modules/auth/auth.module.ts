import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JWT_EXPIRES_IN, JWT_SECRET } from 'src/config/jwt.config';
import { PrismaService } from 'src/infrastructure/database/prisma.service';
import { ConfigService } from '@nestjs/config';
import { type StringValue } from 'ms'

@Module({
  imports: [
    JwtModule.registerAsync({
      global: true,
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET') || JWT_SECRET,
        signOptions: {
          expiresIn: (config.getOrThrow<string>('JWT_EXPIRES_IN') || JWT_EXPIRES_IN) as StringValue,
          algorithm: 'HS256'
        },
      }),
    })],
  providers: [AuthService, PrismaService],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule { }
