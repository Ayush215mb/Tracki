import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
};

export const Input = React.forwardRef<TextInput, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <View className="gap-1">
        {label ? (
          <Text className="text-xs font-medium text-slate-300">{label}</Text>
        ) : null}
        <TextInput
          ref={ref}
          className={`rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 ${
            className ?? ""
          }`}
          placeholderTextColor="#64748b"
          {...props}
        />
        {error ? <Text className="text-xs text-red-400">{error}</Text> : null}
      </View>
    );
  }
);

Input.displayName = "Input";
