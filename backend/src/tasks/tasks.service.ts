// modules/tasks/tasks.service.ts
import {Injectable, NotFoundException} from '@nestjs/common';
import {Task} from './task.entity.js';
import {DatabaseService} from "../database/database.service.js";
import { Prisma } from '../generated/prisma/client.js';

@Injectable()
export class TasksService {
    constructor(private prisma: DatabaseService) {}

    getTaskById(id: Prisma.TaskWhereUniqueInput) :Promise<Task | null>{
        return this.prisma.task.findUnique({where: id});
    }

  async findAllTasks(): Promise<Task[]> {
      return this.prisma.task.findMany();
    }

    async createTask(data:Prisma.TaskCreateInput): Promise<Task> {
        return this.prisma.task.create({data})
    }

    deleteTask(id: Prisma.TaskWhereUniqueInput): Promise<Task> {
       return this.prisma.task.delete({where:id})
    }


    updateTask(params: {
        where: Prisma.TaskWhereUniqueInput;
        data: Prisma.TaskUpdateInput;
    }):Promise<Task> {
        const { where, data } = params;
        return this.prisma.task.update({
            data,
            where,
        });
    }


}