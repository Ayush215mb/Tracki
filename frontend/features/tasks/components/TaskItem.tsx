import React from "react";
import { Pressable, Text, View } from "react-native";
import type { Task } from "../../../lib/types";
import { Card } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";

type TaskItemProps = {
  task: Task;
  onToggleStatus: () => void;
  onDelete: () => void;
};

export function TaskItem({ task, onToggleStatus, onDelete }: TaskItemProps) {
  const isCompleted = task.isCompleted;

  return (
    <Card className="mb-3 flex-row items-center justify-between gap-3">
      <Pressable onPress={onToggleStatus} className="flex-1">
        <View className="flex-row items-start gap-3">
          <View
            className={`mt-1 h-4 w-4 rounded-full border-2 ${
              isCompleted
                ? "border-emerald-400 bg-emerald-500"
                : "border-slate-600"
            }`}
          />
          <View className="flex-1">
            <Text
              className={`text-sm font-semibold ${
                isCompleted ? "text-slate-400 line-through" : "text-slate-50"
              }`}
            >
              {task.name}
            </Text>
            {task.description ? (
              <Text className="mt-0.5 text-xs text-slate-400">
                {task.description}
              </Text>
            ) : null}
            <View className="mt-1 flex-row items-center gap-2">
              <View className="rounded-full bg-indigo-500/10 px-2 py-0.5">
                <Text className="text-[10px] font-semibold text-indigo-300">
                  {task.points} pts
                </Text>
              </View>
              <Text className="text-[10px] text-slate-500">
                {new Date(task.createdAt).toLocaleDateString()}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>

      <View className="flex-col items-end gap-2">
        <Button
          title={isCompleted ? "Undo" : "Done"}
          onPress={onToggleStatus}
          variant={isCompleted ? "secondary" : "primary"}
        />
        <Pressable onPress={onDelete}>
          <Text className="text-[11px] font-medium text-red-400">Delete</Text>
        </Pressable>
      </View>
    </Card>
  );
}
