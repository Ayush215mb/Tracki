import {Injectable, NotFoundException} from '@nestjs/common';
import { TasksService } from '../tasks/tasks.service.js';
import {DatabaseService} from "../database/database.service.js";
import {Task} from "../tasks/task.entity.js";
import { Prisma } from '../generated/prisma/client.js';
import {Completion} from "./completion.entity.js";
import {Dates} from "./dates.entity.js";

@Injectable()
export class CompletionService {
    constructor(private readonly tasksService: TasksService,private prisma: DatabaseService) {}

    getCompletionById(id:Prisma.CompletionWhereUniqueInput):Promise<Completion | null> {
        return this.prisma.completion.findUnique({where:id});
    }

    getAllCompletions():Promise<Completion[]>{
        return this.prisma.completion.findMany();
    }

   async getAllDates():Promise<Dates[]>{
        const completions:Completion[] = await this.prisma.completion.findMany();
        let dates:Array<Dates> = [];
        for (const completion of completions){
            dates.push({date: completion.date, month: completion.month});
        }
        return dates;
    }

    async createCompletion(data:Prisma.CompletionCreateInput):Promise<Completion> {

        const taskId = data.TaskId;
        const taskExists:Task|null = await this.tasksService.getTaskById({id: taskId});
        if(!taskExists){
            throw new NotFoundException("Tasks does not exist");
        }
        return this.prisma.completion.create({data})
    }

    updateCompletion(params: {
        where: Prisma.CompletionWhereUniqueInput;
        data: Prisma.CompletionUpdateInput;
    }):Promise<Completion> {
        const { where, data } = params;
        return this.prisma.completion.update({
            data,
            where,
        });
    }
}