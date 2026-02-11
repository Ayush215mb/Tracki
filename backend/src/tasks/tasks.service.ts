// modules/tasks/tasks.service.ts
import {Injectable, NotFoundException} from '@nestjs/common';
import {Task} from './task.entity.js';
import {DatabaseService} from "../database/database.service.js";
import { Prisma } from '../generated/prisma/client.js';
import {CreateTaskOutput, DeleteTaskOutput, UpdateTaskOutput} from "./Output.entity.js";

@Injectable()
export class TasksService {
    constructor(private prisma: DatabaseService) {}

  async getTaskById(id: Prisma.TaskWhereUniqueInput) :Promise<Task | null>{
        const taskExists:Task|null = await this.prisma.task.findUnique({where:id})
        if(!taskExists){
            throw new NotFoundException("Task does not exist");
        }
        return taskExists
    }

  async findAllTasks(): Promise<Task[]> {
      return this.prisma.task.findMany();
    }

    async createTask(data:Prisma.TaskCreateInput):Promise<CreateTaskOutput> {
        const task:Task = await this.prisma.task.create({data})
        return  {message: "Success", id: task.id}
    }

   async deleteTask(id: Prisma.TaskWhereUniqueInput):Promise<DeleteTaskOutput> {
       const taskExists:Task|null = await this.getTaskById(id)
       if(!taskExists){
           throw new NotFoundException("Task does not exist");
       }
        const TaskDeletion:Task= await this.prisma.task.delete({where:id})

        console.log(TaskDeletion)
       return {message: "success"}
    }

   async updateTask(params: {
        where: Prisma.TaskWhereUniqueInput;
        data: Prisma.TaskUpdateInput;
    }):Promise<UpdateTaskOutput> {

        const { where, data } = params;

       const taskExists:Task|null = await this.getTaskById(where)
       if(!taskExists){
           throw new NotFoundException("Task does not exist");
       }
       const updatedTask:Task = await this.prisma.task.update({
            data,
            where,
        });
        return {message: "success", id: updatedTask.id}
    }


}