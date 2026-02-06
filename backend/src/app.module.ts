import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { CalendarModule } from './calendar/calendar.module';

@Module({
  imports: [TasksModule, CalendarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
