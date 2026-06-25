/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';

import { compare, hash } from 'bcrypt';
import { OnboardingDto } from './dto/onboarding.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { JwtAuthPayload } from './types/auth-jwtpayload';
import { PrismaService } from '../prisma/prisma.service';
import { Profile } from '../../prisma/generated/prisma';
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async create_user(
    createAuthDto: CreateAuthDto,
  ): Promise<{ code: number; message: string; data: { id: string } }> {
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

      return {
        code: 201,
        message: 'user created successfully',
        data: { id: user.id },
      };
    } catch (error: unknown) {
      if (error instanceof BadRequestException) throw error;

      throw new Error(error as any);
    }
  }

  async login(
    loginDto: LoginDto,
  ): Promise<{ code: number; message: string; token: string }> {
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
      code: 200,
      message: 'login successful',
      token: this.genJwtToken(user),
    };
  }

  async onboarding(
    userDto: OnboardingDto,
  ): Promise<{ code: number; message: string; data: { id: string } }> {
    try {
      const { username, email, phoneNumber } = userDto;
      const user: Profile | null = await this.prisma.profile.findUnique({
        where: { username },
      });

      if (!user) {
        throw new BadRequestException('username doesnt exist');
      }
      if (email && email !== user.email) {
        const existingEmail = await this.prisma.profile.findUnique({
          where: { email },
        });
        if (existingEmail) {
          throw new BadRequestException('Email already exists');
        }
      }
      if (phoneNumber && phoneNumber !== user.phoneNumber) {
        const existingPhone = await this.prisma.profile.findUnique({
          where: { phoneNumber },
        });
        if (existingPhone) {
          throw new BadRequestException('Phone number already exists');
        }
      }

      const updatedUser: Profile = await this.prisma.profile.update({
        where: { username },
        data: {
          name: userDto.name,
          email: userDto.email,
          phoneNumber: userDto.phoneNumber,
          age: userDto.age,
          city: userDto.city,
          photoUrl: userDto.photoUrl,
          updatedAt: new Date(),
        },
      });

      return {
        code: 200,
        message: 'Update done',
        data: { id: updatedUser.id },
      };
    } catch (error) {
      if (error instanceof BadRequestException) throw error;
      throw new Error(error as any);
    }
  }

  async getProfile(user: Profile): Promise<Profile> {
    try {
      const profile: Profile | null = await this.prisma.profile.findUnique({
        where: { id: user.id },
      });
      if (!profile) {
        throw new BadRequestException("User dones't exist");
      }
      return profile;
    } catch (err) {
      throw new Error(err as any);
    }
  }

  sendOtp(email: string) {}

  verifyOtp(code: string, email: string) {}

  async changePassword(
    username: string,
    oldpassword: string,
    newPassword: string,
  ): Promise<{ code: number; message: string; data: { id: string } }> {
    const user: Profile | null = await this.prisma.profile.findUnique({
      where: { username },
    });

    if (!user) {
      throw new BadRequestException("Username doesn't exist");
    }

    const valid = await compare(oldpassword, user.password);

    if (!valid) {
      throw new BadRequestException("Password doesn't match");
    }

    const updateuser = await this.prisma.profile.update({
      where: { username },
      data: { password: newPassword },
    });

    return {
      code: 200,
      message: 'Password changed',
      data: { id: updateuser.id },
    };
  }

  private genJwtToken(user: Profile): string {
    const payload: JwtAuthPayload = { username: user.username, sub: user.id };
    console.log(payload);
    return this.jwtService.sign(payload);
  }
}
