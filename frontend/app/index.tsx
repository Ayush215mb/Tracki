import React, { useMemo } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { Screen } from "../components/layout/Screen";
import { TaskItem } from "../features/tasks/components/TaskItem";
import { TaskForm } from "../features/tasks/components/TaskForm";
import type { Task } from "../lib/types";
import {useTasks, UseTasksResult} from "@/features/tasks/hooks/useTasks";

const mockTasks: Task[] = [
  {
    id: "1",
    name: "Morning Workout",
    description: "45 mins cardio",
    points: 5,
    isCompleted: true,
    createdAt: new Date(
      new Date().setDate(new Date().getDate() - 2)
    ).toISOString(),
  },
  {
    id: "2",
    name: "Read 10 pages",
    description: "Atomic Habits",
    points: 3,
    isCompleted: true,
    createdAt: new Date(
      new Date().setDate(new Date().getDate() - 2)
    ).toISOString(),
  },
  {
    id: "3",
    name: "Algorithm Practice",
    description: "LeetCode Medium",
    points: 8,
    isCompleted: false,
    createdAt: new Date(
      new Date().setDate(new Date().getDate() - 1)
    ).toISOString(),
  },
  {
    id: "4",
    name: "Project Setup",
    description: "Initialize NestJS backend",
    points: 10,
    isCompleted: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "5",
    name: "Mock Data Implementation",
    description: "Add seed data for testing",
    points: 4,
    isCompleted: false,
    createdAt: new Date().toISOString(),
  },
];

export default function Index() {
  // const tasks = mockTasks;
  const {   tasks,
    loading,
    error,
    refresh,
    createTask,
    toggleTaskStatus,
    deleteTask}:UseTasksResult  = useTasks()

  const summary = useMemo(() => {
    const totalPoints = tasks.reduce((sum, t) => sum + t.points, 0);
    const completedPoints = tasks
      .filter((t) => t.isCompleted)
      .reduce((sum, t) => sum + t.points, 0);
    const completedCount = tasks.filter((t) => t.isCompleted).length;
    return {
      totalPoints,
      completedPoints,
      completedCount,
    };
  }, [tasks]);

  return (
    <Screen>
      <View className="mb-4 gap-2">
        <Text className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Today&apos;s progress
        </Text>
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-3xl font-bold text-slate-50">
              {summary.completedPoints}
              <Text className="text-base font-semibold text-slate-400">
                /{summary.totalPoints} pts
              </Text>
            </Text>
            <Text className="mt-1 text-xs text-slate-400">
              {summary.completedCount} of {tasks.length} tasks completed
            </Text>
          </View>
          <Link href="/calendar" asChild>
            <Pressable className="rounded-full border border-slate-700 px-3 py-1.5">
              <Text className="text-xs font-semibold text-slate-200">
                View calendar
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>

      <TaskForm onSubmit={async () => {}} />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        contentContainerClassName={
          tasks.length === 0 ? "flex-1 justify-center" : ""
        }
        renderItem={({ item }) => (
          <TaskItem task={item} onToggleStatus={() => {}} onDelete={() => {}} />
        )}
        ListEmptyComponent={
          <View className="items-center justify-center">
            <Text className="text-sm text-slate-500">
              No tasks yet. Add your first one above.
            </Text>
          </View>
        }
      />
    </Screen>
  );
}
