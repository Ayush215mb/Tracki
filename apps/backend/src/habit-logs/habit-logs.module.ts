import { Module } from '@nestjs/common';
import { HabitLogsService } from './habit-logs.service';
import { HabitLogsController } from './habit-logs.controller';
import { HabitModule } from '../habit/habit.module';
import { PrismaModule } from '../prisma/prisma.module';
import { ProfilesModule } from '../profiles/profiles.module';

@Module({
  imports: [HabitModule, PrismaModule, ProfilesModule],
  controllers: [HabitLogsController],
  providers: [HabitLogsService],
})
export class HabitLogsModule {}
