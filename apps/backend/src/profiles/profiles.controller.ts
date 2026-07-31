import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth/jwt-auth.guard';
import { OnboardingDto } from './dto/onboarding.dto';
import { Profile } from '../../prisma/generated/prisma';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Patch('onboarding')
  onboarding(@Body() userDto: OnboardingDto) {
    if (!userDto.username) {
      throw new BadRequestException('Username is required');
    }

    return this.profilesService.onboarding(userDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return this.profilesService.getProfile(req.user as Profile);
  }
}
