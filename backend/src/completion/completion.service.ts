import {Injectable, NotFoundException} from '@nestjs/common';
import { TasksService } from '../tasks/tasks.service.js';
import {DatabaseService} from "../database/database.service.js";
import {Task} from "../tasks/task.entity.js";
import { Prisma } from '../generated/prisma/client.js';
import {Completion} from "./completion.entity.js";
import {Dates} from "./dates.entity.js";
import {CreateCompletionOutput, UpdateCompletionOutput} from "./output.entity.js";

@Injectable()
export class CompletionService {
    constructor(private readonly tasksService: TasksService,private prisma: DatabaseService) {}

  async getCompletionById(id:Prisma.CompletionWhereUniqueInput):Promise<Completion | null> {

        const CompletionExists:Completion | null =await this.prisma.completion.findUnique({where:id});
        if(!CompletionExists){
            throw new NotFoundException("Completion does not exist");
        }

        return CompletionExists;
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

    async createCompletion(data:Prisma.CompletionCreateInput):Promise<CreateCompletionOutput> {

        const taskId = data.TaskId;
        const taskExists:Task|null = await this.tasksService.getTaskById({id: taskId});
        if(!taskExists){
            throw new NotFoundException("Tasks does not exist");
        }
        const createdCompletion = await this.prisma.completion.create({data})
        return {message:"success", id:createdCompletion.id}
    }

   async updateCompletion(params: {
        where: Prisma.CompletionWhereUniqueInput;
        data: Prisma.CompletionUpdateInput;
    }):Promise<UpdateCompletionOutput> {
        const { where, data } = params;
        const CompletionExists:Completion | null = await this.getCompletionById(where)
        if(!CompletionExists){
            throw new NotFoundException("Completion does not exist");
        }
        const updatedCompletion: Completion= await this.prisma.completion.update({
            data,
            where,
        });
        return {message: "success", id:updatedCompletion.id}
    }
}