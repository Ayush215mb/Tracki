import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OnboardingDto } from './dto/onboarding.dto';
import { ApiResponse } from '@tracki/constants';
import { Profile } from '../../prisma/generated/prisma';

@Injectable()
export class ProfilesService {
  constructor(private readonly prisma: PrismaService) {}

  async onboarding(
    userDto: OnboardingDto,
  ): Promise<ApiResponse<{ id: string }>> {
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
        success: true,
        message: 'Onboarding completed',
        data: { id: updatedUser.id },
      };
    } catch (error) {
      if (error instanceof BadRequestException) throw error;
      throw new Error(error as any);
    }
  }

  async getProfile(user: Profile): Promise<ApiResponse<Profile>> {
    try {
      const profile: Profile | null = await this.prisma.profile.findUnique({
        where: { id: user.id },
      });
      if (!profile) {
        throw new BadRequestException("User dones't exist");
      }
      return { success: true, data: profile };
    } catch (err) {
      if (err instanceof BadRequestException) throw err;
      throw new Error(err as any);
    }
  }

  async updatePoints(
    userId: string,
    habitId: string,
  ): Promise<ApiResponse<{ id: string }>> {
    try {
      const habitexists = await this.prisma.habit.findUnique({
        where: { id: habitId, userId: userId },
      });

      console.log(habitexists);
      return { success: true, data: { id: 'hello' } };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw error;
    }
  }
}
