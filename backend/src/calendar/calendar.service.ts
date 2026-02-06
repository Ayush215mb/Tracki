// modules/calendar/calendar.service.ts
import { Injectable } from '@nestjs/common';
import { TasksService } from '../tasks/tasks.service';

@Injectable()
export class CalendarService {
    constructor(private readonly tasksService: TasksService) {}

    getCompletionStatusByDate() {
        const allTasks = this.tasksService.findAll();

        // Group tasks by date (YYYY-MM-DD)
        const grouped = allTasks.reduce((acc, task) => {
            const dateKey = task.createdAt.toISOString().split('T')[0];
            if (!acc[dateKey]) acc[dateKey] = [];
            acc[dateKey].push(task);
            return acc;
        }, {});

        // Map the groups to a status: "success" if all tasks on that day are done
        return Object.keys(grouped).map(date => {
            const dayTasks = grouped[date];
            const allDone = dayTasks.every(t => t.isCompleted);
            const totalPoints = dayTasks.reduce((sum, t) => sum + t.points, 0);

            return {
                date,
                status: allDone ? 'success' : 'failed',
                totalPoints,
                taskCount: dayTasks.length
            };
        });
    }
}