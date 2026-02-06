// modules/tasks/tasks.controller.ts
import {Controller, Get, Post, Body, Delete, Param, Patch} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    getAll() {
        return this.tasksService.findAll();
    }

    @Post()
    create(@Body() createTaskDto: CreateTaskDto) {
        return this.tasksService.create(createTaskDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.tasksService.delete(id);
    }

    @Patch(':id/status')
    toggleStatus(@Param('id') id: string) {
        return this.tasksService.updateStatus(id);
    }

}