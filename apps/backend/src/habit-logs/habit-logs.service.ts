import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateHabitLogDto } from './dto/create-habit-log.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Profile } from '../../prisma/generated/prisma';
import { ProfilesService } from '../profiles/profiles.service';

@Injectable()
export class HabitLogsService {
  constructor(
    private readonly profile: ProfilesService,
    private readonly prisma: PrismaService,
  ) {}

  async logHabitCompletion({
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
    } catch (error: unknown) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new BadRequestException(
          'Log already exists for this habit and date',
        );
      }
      throw error;
    }
  }
}
