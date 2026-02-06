import React from "react";
import { Text, View } from "react-native";
import { Screen } from "@/components/layout/Screen";
import { useCalendarStats } from "@/features/calendar/hooks/useCalendarStats";
import { CalendarList } from "@/features/calendar/components/CalendarList";
import { LoadingIndicator } from "@/components/ui/LoadingIndicator";
import { ErrorMessage } from "@/components/ui/ErrorMessage";

export default function CalendarScreen() {
  const { stats, loading, error } = useCalendarStats();

  return (
    <Screen>
      <View className="mb-4 gap-1">
        <Text className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Overview
        </Text>
        <Text className="text-2xl font-bold text-slate-50">
          Completion calendar
        </Text>
        <Text className="mt-1 text-xs text-slate-400">
          Each day shows whether you completed all tasks and how many points you
          earned.
        </Text>
      </View>

      {error ? <ErrorMessage message={error} /> : null}

      {loading && stats.length === 0 ? (
        <LoadingIndicator />
      ) : (
        <CalendarList data={stats} />
      )}
    </Screen>
  );
}
