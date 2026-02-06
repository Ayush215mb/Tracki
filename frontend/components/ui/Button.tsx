import React from "react";
import { Pressable, Text } from "react-native";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
};

const baseClasses = "flex-row items-center justify-center rounded-xl px-4 py-3";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 active:bg-blue-700",
  secondary: "bg-slate-700 active:bg-slate-800",
  ghost: "bg-transparent",
};

const textVariants: Record<ButtonVariant, string> = {
  primary: "text-white",
  secondary: "text-white",
  ghost: "text-blue-500",
};

export function Button({
  title,
  onPress,
  disabled,
  variant = "primary",
}: ButtonProps) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      className={`${baseClasses} ${variants[variant]} ${
        disabled ? "opacity-60" : ""
      }`}
    >
      <Text className={`text-sm font-semibold ${textVariants[variant]}`}>
        {title}
      </Text>
    </Pressable>
  );
}
