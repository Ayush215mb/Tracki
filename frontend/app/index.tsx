import React, {useEffect, useMemo, useState} from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { Screen } from "@/components/layout/Screen";
import { TaskItem } from "@/features/tasks/components/TaskItem";
import { TaskForm } from "@/features/tasks/components/TaskForm";
import type {ErrorTyp, Task} from "@/lib/types";
import {getAllTasks} from "@/services/api";

export default function Index() {
const [tasks, setTasks]= useState<Task[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await getAllTasks();
        console.log(tasks,response)
        setTasks(response);
      } catch (error) {
        console.error(error);
      }
    }

    loadData();
  }, []);

  return (
    <Screen>
      <View className="mb-4 gap-2">
        <Text className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Today&apos;s progress
        </Text>

      </View>

      <TaskForm onSubmit={async () => {}} />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}

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
