import React, { PropsWithChildren } from "react";
import { View } from "react-native";

type CardProps = PropsWithChildren<{
  className?: string;
}>;

export function Card({ children, className }: CardProps) {
  return (
    <View
      className={`rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 ${
        className ?? ""
      }`}
    >
      {children}
    </View>
  );
}
