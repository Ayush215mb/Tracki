import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TasksModule } from './tasks/tasks.module.js';
import { CalendarModule } from './calendar/calendar.module.js';
import { DatabaseModule } from './database/database.module.js';

@Module({
  imports: [TasksModule, CalendarModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
