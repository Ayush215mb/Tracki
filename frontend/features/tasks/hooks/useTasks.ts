import { useEffect, useState } from "react";
import { api, CreateTaskPayload } from "@/lib/api";
import type { Task } from "@/lib/types";

export type UseTasksResult = {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  createTask: (payload: CreateTaskPayload) => Promise<void>;
  toggleTaskStatus: (id: string) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
};

export function useTasks(): UseTasksResult {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTasks = async () => {
    try {
      setError(null);
      const data = await api.getTasks();
      setTasks(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const refresh = async () => {
    setLoading(true);
    await loadTasks();
  };

  const createTask = async (payload: CreateTaskPayload) => {
    try {
      setError(null);
      const created = await api.createTask(payload);
      setTasks((prev) => [created, ...prev]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to create task");
      throw e;
    }
  };

  const toggleTaskStatus = async (id: string) => {
    try {
      setError(null);
      const updated = await api.toggleTaskStatus(id);
      setTasks((prev) => prev.map((task) => (task.id === id ? updated : task)));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to update task");
      throw e;
    }
  };

  const deleteTask = async (id: string) => {
    try {
      setError(null);
      await api.deleteTask(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to delete task");
      throw e;
    }
  };

  return {
    tasks,
    loading,
    error,
    refresh,
    createTask,
    toggleTaskStatus,
    deleteTask,
  };
}
