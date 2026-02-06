import React, { PropsWithChildren } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

type ScreenProps = PropsWithChildren<{
  scroll?: boolean;
  className?: string;
  contentClassName?: string;
}>;

export function Screen({
  children,
  scroll = false,
  className,
  contentClassName,
}: ScreenProps) {
  if (scroll) {
    return (
      <SafeAreaView className={`flex-1 bg-slate-950 ${className ?? ""}`}>
        <ScrollView
          className="flex-1"
          contentContainerClassName={`px-4 pb-6 pt-4 ${contentClassName ?? ""}`}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className={`flex-1 bg-slate-950 ${className ?? ""}`}>
      <View className={`flex-1 px-4 pb-6 pt-4 ${contentClassName ?? ""}`}>
        {children}
      </View>
    </SafeAreaView>
  );
}
