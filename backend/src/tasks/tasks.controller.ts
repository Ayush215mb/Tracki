// modules/tasks/tasks.controller.ts
import {Controller, Get, Post, Body, Delete, Param, Patch} from '@nestjs/common';
import { TasksService } from './tasks.service.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import {Task} from "./task.entity.js";
import {UpdateTaskDto} from "./dto/update-task.dto.js";

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    getAll():Promise<Task[]> {
        return this.tasksService.findAllTasks();
    }

    @Post()
    create(@Body() createTaskDto: CreateTaskDto):Promise<Task> {
        return this.tasksService.createTask(createTaskDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string):Promise<Task> {
        return this.tasksService.deleteTask({id});
    }

    @Patch(':id')
    Update(@Param('id') id:string, @Body() updateTaskDto: UpdateTaskDto):Promise<Task> {
        return this.tasksService.updateTask({
            where: {id},
            data: updateTaskDto,
        });
    }
}