import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TasksModule } from './tasks/tasks.module.js';
import { DatabaseModule } from './database/database.module.js';
import { CompletionModule } from './completion/completion.module.js';

@Module({
  imports: [TasksModule, DatabaseModule, CompletionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
