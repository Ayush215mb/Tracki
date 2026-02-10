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

  return (
    <Card className="mb-3 flex-row items-center justify-between gap-3">
      <View className={"flex flex-col gapy-4"}>
        <Text className={"text-4xl font-extrabold text-white"}>
          {task.name}
        </Text>
        <Text className={"text-xl text-semibold text-white"}>
          {task.description}
        </Text>
      </View>

    </Card>
  );
}
