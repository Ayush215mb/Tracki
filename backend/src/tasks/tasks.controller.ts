// modules/tasks/tasks.controller.ts
import {Controller, Get, Post, Body, Delete, Param, Patch, UseGuards} from '@nestjs/common';
import { TasksService } from './tasks.service.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import {Task} from "./task.entity.js";
import {UpdateTaskDto} from "./dto/update-task.dto.js";
import {Throttle, SkipThrottle, ThrottlerGuard} from '@nestjs/throttler';

@Controller('tasks')
@UseGuards(ThrottlerGuard)
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    findAllTasks():Promise<Task[]> {
        return this.tasksService.findAllTasks();
    }

    @Get(':id')
    getTaskById(@Param('id') id:string):Promise<Task | null> {
        return this.tasksService.getTaskById({id})
    }

    //60,000 millisecond (60 second)
    @Throttle({ default: { limit: 5, ttl: 60000 } })
    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto):Promise<Task> {
        return this.tasksService.createTask(createTaskDto);
    }

    @Throttle({ default: { limit: 3, ttl: 30000 } })
    @Delete(':id')
    deleteTask(@Param('id') id: string):Promise<Task> {
        return this.tasksService.deleteTask({id});
    }

    @Patch(':id')
    updateTask(@Param('id') id:string, @Body() updateTaskDto: UpdateTaskDto):Promise<Task> {
        return this.tasksService.updateTask({
            where: {id},
            data: updateTaskDto,
        });
    }
}