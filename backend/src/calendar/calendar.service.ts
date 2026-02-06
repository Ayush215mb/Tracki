// modules/calendar/calendar.service.ts
import {Injectable, NotFoundException} from '@nestjs/common';
import { TasksService } from '../tasks/tasks.service.js';
import {DatabaseService} from "../database/database.service.js";
import {Task} from "../tasks/task.entity.js";
import { Prisma } from '../generated/prisma/client.js';
import {Completion} from "./completion.entity.js";

@Injectable()
export class CalendarService {
    constructor(private readonly tasksService: TasksService,private prisma: DatabaseService) {}

   async createCompletion(data:Prisma.CompletionCreateInput):Promise<Completion> {

        const taskId = data.TaskId;

        const taskExists:Task|null = await this.tasksService.getTaskById({id: taskId});

        if(!taskExists){
            throw new NotFoundException("Task does not exist");
        }
       return this.prisma.completion.create({data})
    }

    updateCompletion(params: {
        where: Prisma.CompletionWhereUniqueInput;
        data: Prisma.CompletionUpdateInput;
    }) {
        const { where, data } = params;
        return this.prisma.completion.update({
            data,
            where,
        });
    }
}