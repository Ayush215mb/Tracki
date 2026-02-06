// modules/tasks/entities/task.entity.ts
export class Task {
    id: string;
    name: string;
    description: string;
    points: number;
    isCompleted: boolean;
    createdAt: Date;
}