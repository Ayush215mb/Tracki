import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TasksModule } from './tasks/tasks.module.js';
import { DatabaseModule } from './database/database.module.js';
import {ThrottlerModule} from "@nestjs/throttler";

@Module({
  imports: [TasksModule, DatabaseModule, ThrottlerModule.forRoot([{
    name: 'default',
    ttl: 60000,
    limit: 10,
  }]),
    TasksModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
