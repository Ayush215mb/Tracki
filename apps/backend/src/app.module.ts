import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { HabitModule } from './habit/habit.module';
import { HabitLogsModule } from './habit-logs/habit-logs.module';

@Module({
  imports: [AuthModule, PrismaModule, HabitModule, HabitLogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
