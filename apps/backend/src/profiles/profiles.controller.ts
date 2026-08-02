import {
  Controller,
  Get,
  Body,
  Patch,
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
  getProfile(@Req() req: Request & { user: Profile }) {
    return this.profilesService.getProfile(req.user);
  }
}
