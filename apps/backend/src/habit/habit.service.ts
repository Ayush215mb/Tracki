import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { Habit, Profile } from '../../prisma/generated/prisma';
import { PrismaService } from '../prisma/prisma.service';
import { HabitFrequency } from '../constants';

@Injectable()
export class HabitService {
  constructor(private readonly prisma: PrismaService) {}

  async createHabit({
    user,
    createHabitDto,
  }: {
    user: Profile;
    createHabitDto: CreateHabitDto;
  }): Promise<{ success: boolean; data: { id: string } }> {
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
          // Exhaustiveness check — if a new enum value is ever added without
          // updating this switch, TS will flag `frequency` as not `never` here.
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

      return { success: true, data: { id: habit.id } };
    } catch (error) {
      if (error instanceof BadRequestException) throw error;
      throw new Error(error as any);
    }
  }
  async getHabits(user: Profile): Promise<Partial<Habit>[]> {
    const habits = await this.prisma.habit.findMany({
      where: { userId: user.id },
      select: {
        id: true,
        name: true,
        pointsValue: true,
      },
    });

    return habits;
  }
  async getHabit({ user, habitId }: { user: Profile; habitId: string }) {
    const habitexists = await this.prisma.habit.findUnique({
      where: { id: habitId, userId: user.id },
    });
    if (!habitexists) {
      throw new NotFoundException("Habit doesn't exist");
    }
    const habit: Habit | null = await this.prisma.habit.findUnique({
      where: { id: habitId, userId: user.id },
    });

    return habit;
  }
  async updateHabit({
    user,
    habitId,
    body,
  }: {
    user: Profile;
    habitId: string;
    body: UpdateHabitDto;
  }) {
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
        return updatedhabit;
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
      const deltedhabit = await this.prisma.habit.delete({
        where: { id: habitId, userId: user.id },
      });
      return { success: true, message: 'Habit Deleted', data: deltedhabit };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new Error(error as any);
    }
  }
}
