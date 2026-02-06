import React from "react";
import { ActivityIndicator, View } from "react-native";

export function LoadingIndicator() {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="small" color="#3b82f6" />
    </View>
  );
}
