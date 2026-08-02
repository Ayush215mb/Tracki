import { Module } from '@nestjs/common';
import { HabitLogsService } from './habit-logs.service';
import { HabitLogsController } from './habit-logs.controller';
import { HabitModule } from '../habit/habit.module';
import { PrismaModule } from '../prisma/prisma.module';
import { ProfilesModule } from '../profiles/profiles.module';
import { ScheduleModule } from '@nestjs/schedule';
import { HabitLogsCronService } from './habit-logs.cron.service';

@Module({
  imports: [
    HabitModule,
    PrismaModule,
    ProfilesModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [HabitLogsController],
  providers: [HabitLogsService, HabitLogsCronService],
})
export class HabitLogsModule {}
