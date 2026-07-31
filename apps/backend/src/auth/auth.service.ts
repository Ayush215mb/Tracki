/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';

import { compare, hash } from 'bcrypt';
import { OnboardingDto } from '../profiles/dto/onboarding.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { JwtAuthPayload } from './types/auth-jwtpayload';
import { PrismaService } from '../prisma/prisma.service';
import { Profile } from '../../prisma/generated/prisma';
import { ApiResponse } from '@tracki/constants';
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async create_user(
    createAuthDto: CreateAuthDto,
  ): Promise<ApiResponse<{ id: string }>> {
    try {
      const [usernametaken, emailtaken] = await Promise.all([
        this.prisma.profile.findUnique({
          where: { username: createAuthDto.username },
        }),
        this.prisma.profile.findUnique({
          where: { email: createAuthDto.email },
        }),
      ]);

      if (usernametaken) {
        throw new BadRequestException('Username already taken');
      }

      if (emailtaken) {
        throw new BadRequestException('Email already exists');
      }
      const hashedpassword = await hash(createAuthDto.password, 10);

      const user: Profile = await this.prisma.profile.create({
        data: {
          email: createAuthDto.email,
          password: hashedpassword,
          username: createAuthDto.username,
        },
      });

      return { success: true, message: 'User created', data: { id: user.id } };
    } catch (error: unknown) {
      if (error instanceof BadRequestException) throw error;

      throw new Error(error as any);
    }
  }

  async login(
    loginDto: LoginDto,
  ): Promise<ApiResponse<{ accessToken: string }>> {
    const { username, password } = loginDto;
    if (!username || !password) {
      throw new BadRequestException('username and password are required');
    }

    const user: Profile | null = await this.prisma.profile.findUnique({
      where: { username },
    });

    if (!user) {
      throw new UnauthorizedException("user doesn't exist");
    }

    const valid = await compare(password, user.password);

    if (!valid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return {
      success: true,
      message: 'Login successful',
      data: { accessToken: this.genJwtToken(user) },
    };
  }

  sendOtp(email: string) {}

  verifyOtp(code: string, email: string) {}

  private genJwtToken(user: Profile): string {
    const payload: JwtAuthPayload = { username: user.username, sub: user.id };
    return this.jwtService.sign(payload);
  }
}
