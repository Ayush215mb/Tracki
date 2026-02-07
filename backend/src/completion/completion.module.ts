import { Module } from '@nestjs/common';
import { CompletionService } from './completion.service.js';
import { CompletionController } from './completion.controller.js';
import {TasksModule} from "../tasks/tasks.module.js";
import {DatabaseModule} from "../database/database.module.js";

@Module({
  imports: [TasksModule,DatabaseModule],
  providers: [CompletionService],
  controllers: [CompletionController]
})
export class CompletionModule {}
