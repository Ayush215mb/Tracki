import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HabitLogsCronService {
  private readonly logger = new Logger(HabitLogsCronService.name);

  constructor(private readonly prisma: PrismaService) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async generateDailyLogs() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayDayOfWeek = today.getDay(); // e.g. 4 for Thursday

    const activeHabits = await this.prisma.habit.findMany({
      where: { isActive: true },
    });

    const habitsScheduledToday = activeHabits.filter((habit) =>
      habit.scheduledDays.includes(todayDayOfWeek),
    );

    const results = await this.prisma.habitLog.createMany({
      data: habitsScheduledToday.map((habit) => ({
        habitId: habit.id,
        userId: habit.userId,
        completed: false,
        pointsEarned: 0,
        logDate: today,
      })),
      skipDuplicates: true,
    });

    this.logger.log(
      `Generated ${results.count} habit logs for ${today.toDateString()}`,
    );
  }
}
