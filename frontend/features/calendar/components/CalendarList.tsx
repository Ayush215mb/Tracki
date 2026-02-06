import React, { useMemo } from "react";
import { FlatList, Text, View } from "react-native";
import type { CalendarDayStat } from "../../../lib/types";
import { Card } from "../../../components/ui/Card";

type CalendarListProps = {
  data: CalendarDayStat[];
};

export function CalendarList({ data }: CalendarListProps) {
  const sorted = useMemo(
    () => [...data].sort((a, b) => b.date.localeCompare(a.date)),
    [data]
  );

  return (
    <FlatList
      data={sorted}
      keyExtractor={(item) => item.date}
      renderItem={({ item }) => {
        const isSuccess = item.status === "success";
        return (
          <Card className="mb-3">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {new Date(item.date).toLocaleDateString(undefined, {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </Text>
                <Text className="mt-1 text-xs text-slate-400">
                  {item.taskCount} task{item.taskCount === 1 ? "" : "s"} ·{" "}
                  {item.totalPoints} pts
                </Text>
              </View>
              <View
                className={`rounded-full px-3 py-1 ${
                  isSuccess ? "bg-emerald-500/10" : "bg-rose-500/10"
                }`}
              >
                <Text
                  className={`text-xs font-semibold ${
                    isSuccess ? "text-emerald-300" : "text-rose-300"
                  }`}
                >
                  {isSuccess ? "All done" : "Not complete"}
                </Text>
              </View>
            </View>
          </Card>
        );
      }}
      ListEmptyComponent={
        <View className="mt-10 items-center">
          <Text className="text-sm text-slate-500">
            Start completing tasks to see your streaks here.
          </Text>
        </View>
      }
    />
  );
}
