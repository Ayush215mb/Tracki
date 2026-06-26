import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ApiResponse } from '@tracki/constants';
import { Profile, Habit, HabitFrequency } from '../../prisma/generated/prisma';

@Injectable()
export class HabitService {
  constructor(private readonly prisma: PrismaService) {}

  async createHabit({
    user,
    createHabitDto,
  }: {
    user: Profile;
    createHabitDto: CreateHabitDto;
  }): Promise<ApiResponse<{ id: string }>> {
    try {
      const userid = user.id;

      const frequency: HabitFrequency = createHabitDto.frequency;

      let scheduledDays: number[];

      switch (frequency) {
        case HabitFrequency.DAILY:
          scheduledDays = [0, 1, 2, 3, 4, 5, 6];
          break;

        case HabitFrequency.WEEKLY:
          scheduledDays = [1, 2, 3, 4, 5];
          break;

        case HabitFrequency.CUSTOM:
          if (
            !createHabitDto.scheduledDays ||
            createHabitDto.scheduledDays.length === 0
          ) {
            throw new BadRequestException(
              'scheduledDays is required when frequency is CUSTOM',
            );
          }
          scheduledDays = createHabitDto.scheduledDays;
          break;

        default:
          throw new BadRequestException(
            `Unhandled frequency: ${createHabitDto.frequency}`,
          );
      }

      const habit = await this.prisma.habit.create({
        data: {
          name: createHabitDto.name,
          userId: userid,
          description: createHabitDto.description,
          pointsValue: createHabitDto.score,
          frequency: createHabitDto.frequency,
          scheduledDays,
        },
      });

      return {
        success: true,
        message: 'Habit Created',
        data: { id: habit.id },
      };
    } catch (error) {
      if (error instanceof BadRequestException) throw error;
      throw new Error(error as any);
    }
  }

  async getHabits(user: Profile): Promise<ApiResponse<Partial<Habit>[]>> {
    const userexists = await this.prisma.profile.findUnique({
      where: { id: user.id },
    });
    if (!userexists) {
      throw new NotFoundException("User doesn't exist");
    }
    const habits: Partial<Habit>[] | null = await this.prisma.habit.findMany({
      where: { userId: user.id },
      select: {
        id: true,
        name: true,
        pointsValue: true,
        isActive: true,
      },
    });

    return { success: true, data: habits };
  }

  async getHabit({
    user,
    habitId,
  }: {
    user: Profile;
    habitId: string;
  }): Promise<ApiResponse<Habit>> {
    const habit: Habit | null = await this.prisma.habit.findUnique({
      where: { id: habitId, userId: user.id },
    });

    if (!habit) {
      throw new NotFoundException('Habit not found');
    }

    return { success: true, data: habit };
  }

  async updateHabit({
    user,
    habitId,
    body,
  }: {
    user: Profile;
    habitId: string;
    body: UpdateHabitDto;
  }): Promise<ApiResponse<Habit>> {
    try {
      const habitexists: Habit | null = await this.prisma.habit.findUnique({
        where: { id: habitId, userId: user.id },
      });
      if (habitexists) {
        const updatedhabit = await this.prisma.habit.update({
          where: { id: habitId, userId: user.id },
          data: {
            name: body.name,
            description: body.description,
            pointsValue: body.score,
            scheduledDays: body.scheduledDays,
          },
        });
        return { success: true, message: 'Habit Updated', data: updatedhabit };
      } else {
        throw new NotFoundException("Habit doesn't exist");
      }
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new Error(error as any);
    }
  }
  async deleteHabit({ user, habitId }: { user: Profile; habitId: string }) {
    try {
      const habitexists = await this.prisma.habit.findUnique({
        where: { id: habitId, userId: user.id },
      });
      if (!habitexists) {
        throw new NotFoundException("Habit doesn't exist");
      }
      const deactivateHabit = await this.prisma.habit.update({
        where: { id: habitId },
        data: {
          isActive: false,
        },
      });
      return {
        success: true,
        message: 'Habit deactivated',
        data: deactivateHabit,
      };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new Error(error as any);
    }
  }
}
