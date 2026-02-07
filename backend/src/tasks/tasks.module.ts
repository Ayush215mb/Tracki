import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller.js';
import { TasksService } from './tasks.service.js';
import {DatabaseModule} from "../database/database.module.js";
import {ThrottlerModule} from "@nestjs/throttler";

@Module({
  imports:[DatabaseModule,ThrottlerModule],
  controllers: [TasksController],
  providers: [TasksService],
  exports: [TasksService],
})
export class TasksModule {}
