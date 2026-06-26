import { HabitFrequency } from "./constants";

export type Profile = {
  name: string | null;
  id: string;
  email: string;
  phoneNumber: number | null;
  password: string;
  username: string;
  age: number | null;
  city: string | null;
  timezone: string;
  appStreak: number;
  totalScore: number;
  createdAt: Date;
  updatedAt: Date;
  photoUrl: string | null;
};
export type Habit = {
  name: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  frequency: HabitFrequency;
  habitStreak: number;
  isActive: boolean;
  pointsValue: number;
  scheduledDays: number[];
  userId: string;
};

export type HabitLog = {
  id: string;
  createdAt: Date;
  userId: string;
  habitId: string;
  completed: boolean;
  logDate: Date;
  pointsEarned: number;
};

export type getHabitsResponse = {
  id: string;
  name: string;
  pointsValue: number;
};
