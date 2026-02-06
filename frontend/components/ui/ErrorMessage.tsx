import React from "react";
import { Text, View } from "react-native";

type ErrorMessageProps = {
  message?: string;
};

export function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null;

  return (
    <View className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2">
      <Text className="text-xs text-red-300">{message}</Text>
    </View>
  );
}
