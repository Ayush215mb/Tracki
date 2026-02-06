import { API_BASE_URL } from "./config";
import type { CalendarDayStat, Task } from "./types";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${path}`;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    ...init,
  });

  if (!response.ok) {
    let message = `Request failed with status ${response.status}`;
    try {
      const text = await response.text();
      if (text) {
        message = text;
      }
    } catch {
      // ignore parse errors
    }
    throw new Error(message);
  }

  if (response.status === 204) {
    // No Content
    return undefined as unknown as T;
  }

  return (await response.json()) as T;
}

export type CreateTaskPayload = {
  name: string;
  description: string;
  points: number;
};

export const api = {
  getTasks(): Promise<Task[]> {
    return request<Task[]>("/tasks");
  },

  createTask(payload: CreateTaskPayload): Promise<Task> {
    return request<Task>("/tasks", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },

  deleteTask(id: string): Promise<void> {
    return request<void>(`/tasks/${id}`, { method: "DELETE" });
  },

  toggleTaskStatus(id: string): Promise<Task> {
    return request<Task>(`/tasks/${id}/status`, { method: "PATCH" });
  },

  getCalendarStats(): Promise<CalendarDayStat[]> {
    return request<CalendarDayStat[]>("/calendar");
  },
};
