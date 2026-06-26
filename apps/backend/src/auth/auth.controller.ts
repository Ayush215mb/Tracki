/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  BadRequestException,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { OnboardingDto } from './dto/onboarding.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth/jwt-auth.guard';
import { Profile } from '../../prisma/generated/prisma';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() createAuthDto: CreateAuthDto) {
    if (!createAuthDto.email) {
      throw new BadRequestException('Email is required');
    }

    if (!createAuthDto.username) {
      throw new BadRequestException('Username is required');
    }

    return await this.authService.create_user(createAuthDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }

  @Patch('onboarding')
  async onboarding(@Body() userDto: OnboardingDto) {
    if (!userDto.username) {
      throw new BadRequestException('Username is required');
    }

    return await this.authService.onboarding(userDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return this.authService.getProfile(req.user as Profile);
  }
  @Post('send-otp')
  sendOtp(@Body() email: string) {
    if (!email) {
      throw new BadRequestException('Email is required');
    }

    return this.authService.sendOtp(email);
  }

  @Post('verify-otp')
  verifyOtp(@Body() email: string, code: string) {
    if (!email) {
      throw new BadRequestException('Email is required');
    }

    return this.authService.verifyOtp(code, email);
  }
}
