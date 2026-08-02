import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateHabitLogDto } from './dto/create-habit-log.dto';
import { PrismaService } from '../prisma/prisma.service';
import { HabitLog, Prisma, Profile } from '../../prisma/generated/prisma';
import { ProfilesService } from '../profiles/profiles.service';
import { ApiResponse } from '@tracki/constants';
import { FindHabitLogsDto } from './dto/find-habit-logs.dto';

@Injectable()
export class HabitLogsService {
  constructor(
    private readonly profile: ProfilesService,
    private readonly prisma: PrismaService,
  ) {}

  async createManualCompletion({
    createHabitLogDto,
    user,
  }: {
    createHabitLogDto: CreateHabitLogDto;
    user: Profile;
  }) {
    const { habitId, logDate } = createHabitLogDto;

    const habit = await this.prisma.habit.findFirst({
      where: { id: habitId, userId: user.id },
    });
    if (!habit) throw new NotFoundException("Habit doesn't exist");

    try {
      if (habit.isActive) {
        const [habitLog] = await this.prisma.$transaction([
          this.prisma.habitLog.create({
            data: {
              habitId: habit.id,
              userId: user.id,
              completed: true,
              pointsEarned: habit.pointsValue,
              logDate: new Date(logDate),
            },
          }),
          this.prisma.profile.update({
            where: { id: user.id },
            data: { totalScore: { increment: habit.pointsValue } },
          }),
        ]);

        return {
          success: true,
          message: 'Habit log created',
          data: { id: habitLog.id },
        };
      } else {
        throw new BadRequestException('Inactive Habit');
      }
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new BadRequestException(
          'Log already exists for this habit and date',
        );
      }
      throw error;
    }
  }

  async getTodaysLogs(
    user: Profile,
  ): Promise<ApiResponse<{ logs: HabitLog[] }>> {
    const date = new Date();

    const logs: HabitLog[] | null = await this.prisma.habitLog.findMany({
      where: { userId: user.id, logDate: date },
    });

    return {
      success: true,
      data: { logs },
    };
  }

  async getAllLogs({
    query,
    user,
  }: {
    query: FindHabitLogsDto;
    user: Profile;
  }): Promise<ApiResponse<{ HabitLogs: HabitLog[] }>> {
    const { habitId, startDate, endDate } = query;

    const where: Prisma.HabitLogWhereInput = {
      userId: user.id,
      ...(habitId && { habitId }),
      ...((startDate || endDate) && {
        logDate: {
          ...(startDate && { gte: new Date(startDate) }),
          ...(endDate && { lte: new Date(endDate) }),
        },
      }),
    };

    const logs: HabitLog[] = await this.prisma.habitLog.findMany({
      where,
      orderBy: { logDate: 'desc' },
    });

    return { success: true, data: { HabitLogs: logs } };
  }

  async getLogById({
    habitlogId,
    user,
  }: {
    habitlogId: string;
    user: Profile;
  }): Promise<ApiResponse<{ Habitlog: HabitLog }>> {
    const log = await this.prisma.habitLog.findFirst({
      where: { id: habitlogId, userId: user.id },
    });
    if (!log) throw new NotFoundException("Log doesn't exist");
    return { success: true, data: { Habitlog: log } };
  }

  async habitCompletion({
    habitlogId,
    user,
  }: {
    habitlogId: string;
    user: Profile;
  }): Promise<ApiResponse<{ id: string }>> {
    const habitlog = await this.prisma.habit.findFirst({
      where: { id: habitlogId, userId: user.id },
    });
    if (!habitlog) {
      throw new NotFoundException("log doesn't exist");
    }

    try {
      const today = new Date();
      const [habitLog] = await this.prisma.$transaction([
        this.prisma.habitLog.update({
          where: { id: habitlogId, userId: user.id, logDate: today },
          data: {
            completed: true,
          },
        }),
        this.prisma.profile.update({
          where: { id: user.id },
          data: { totalScore: { increment: habitlog.pointsValue } },
        }),
      ]);

      return { success: true, data: { id: habitLog.id } };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw error;
    }
  }

  async habitUncompletion({
    habitlogId,
    user,
  }: {
    habitlogId: string;
    user: Profile;
  }): Promise<ApiResponse<{ id: string }>> {
    const habitlog = await this.prisma.habitLog.findFirst({
      where: { id: habitlogId, userId: user.id },
    });
    if (!habitlog) {
      throw new NotFoundException("log doesn't exist");
    }

    try {
      const today = new Date();
      const [habitLog] = await this.prisma.$transaction([
        this.prisma.habitLog.update({
          where: { id: habitlogId, userId: user.id, logDate: today },
          data: {
            completed: false,
            pointsEarned: 0,
          },
        }),
        this.prisma.profile.update({
          where: { id: user.id },
          data: { totalScore: { decrement: habitlog.pointsEarned } },
        }),
      ]);

      return { success: true, data: { id: habitLog.id } };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new BadRequestException('Habit already logged for today');
      }
      throw error;
    }
  }

  async deleteLog({
    user,
    habitlogId,
  }: {
    user: Profile;
    habitlogId: string;
  }): Promise<ApiResponse<{ id: string }>> {
    const deletedhabit = await this.prisma.habitLog.delete({
      where: { id: habitlogId, userId: user.id },
    });

    return { success: true, data: { id: deletedhabit.id } };
  }
}
