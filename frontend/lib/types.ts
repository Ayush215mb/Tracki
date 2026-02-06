export type Task = {
  id: string;
  name: string;
  description: string;
  points: number;
  isCompleted: boolean;
  createdAt: string;
};

export type CalendarDayStat = {
  date: string;
  status: "success" | "failed";
  totalPoints: number;
  taskCount: number;
};
