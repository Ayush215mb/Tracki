import { Module } from '@nestjs/common';
import { CalendarService } from './calendar.service.js';
import { CalendarController } from './calendar.controller.js';
import {TasksModule} from "../tasks/tasks.module.js";
import {DatabaseService} from "../database/database.service.js";
import {DatabaseModule} from "../database/database.module.js";

@Module({
  imports: [TasksModule,DatabaseModule],
  providers: [CalendarService],
  controllers: [CalendarController]
})
export class CalendarModule {}
