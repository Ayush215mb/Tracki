// modules/tasks/tasks.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
    private tasks: Task[] = [
        {
            id: uuid(),
            name: 'Morning Workout',
            description: '45 mins cardio',
            points: 5,
            isCompleted: true,
            createdAt: new Date(new Date().setDate(new Date().getDate() - 2)), // 2 days ago
        },
        {
            id: uuid(),
            name: 'Read 10 pages',
            description: 'Atomic Habits',
            points: 3,
            isCompleted: true,
            createdAt: new Date(new Date().setDate(new Date().getDate() - 2)), // 2 days ago (Day should be SUCCESS)
        },
        {
            id: uuid(),
            name: 'Algorithm Practice',
            description: 'LeetCode Medium',
            points: 8,
            isCompleted: false,
            createdAt: new Date(new Date().setDate(new Date().getDate() - 1)), // Yesterday (Day should be FAILED)
        },
        {
            id: uuid(),
            name: 'Project Setup',
            description: 'Initialize NestJS backend',
            points: 10,
            isCompleted: true,
            createdAt: new Date(), // Today
        },
        {
            id: uuid(),
            name: 'Mock Data Implementation',
            description: 'Add seed data for testing',
            points: 4,
            isCompleted: false,
            createdAt: new Date(), // Today (Day currently FAILED)
        },
    ]; // Our mock database

    findAll(): Task[] {
        return this.tasks;
    }

    create(createTaskDto: CreateTaskDto): Task {
        const newTask: Task = {
            id: uuid(),
            ...createTaskDto,
            isCompleted: false,
            createdAt: new Date(),
        };
        this.tasks.push(newTask);
        return newTask;
    }

    delete(id: string): void {
        const index = this.tasks.findIndex(t => t.id === id);
        if (index === -1) throw new NotFoundException(`Task with ID ${id} not found`);
        this.tasks.splice(index, 1);
    }

    updateStatus(id: string): Task {
        const task = this.tasks.find(t => t.id === id);
        if (!task) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }

        // Toggle the completion state
        task.isCompleted = !task.isCompleted;
        return task;
    }
}