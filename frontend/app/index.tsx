import React, {useEffect, useState} from "react";
import { FlatList, Text, View } from "react-native";
import { Screen } from "@/components/layout/Screen";
import { TaskItem } from "@/features/tasks/components/TaskItem";
import type { Task} from "@/lib/types";
import {getAllTasks} from "@/services/api";

export function Index() {
  const [tasks, setTasks]= useState<Task[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await getAllTasks();
        setTasks(response);
      } catch (error) {
        console.error(error);
      }
    }
    loadData();
  }, []);

  return (
    <Screen className={"px-2 py-4 gap-3 "}>
      <View className="mb-4">
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
      </View>
    </Screen>
  );
}
