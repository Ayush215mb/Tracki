import React, { useState } from "react";
import { Keyboard, View } from "react-native";
import { Input } from "../../../components/ui/Input";
import { Button } from "../../../components/ui/Button";
import { ErrorMessage } from "../../../components/ui/ErrorMessage";

type TaskFormProps = {
  onSubmit: (values: {
    name: string;
    description: string;
    points: number;
  }) => Promise<void>;
};

export function TaskForm({ onSubmit }: TaskFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState("1");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    const numericPoints = Number(points);
    if (!name.trim()) {
      setError("Please enter a name for the task.");
      return;
    }
    if (
      Number.isNaN(numericPoints) ||
      numericPoints < 1 ||
      numericPoints > 10
    ) {
      setError("Points must be a number between 1 and 10.");
      return;
    }

    try {
      setSubmitting(true);
      setError(null);
      await onSubmit({
        name: name.trim(),
        description: description.trim(),
        points: numericPoints,
      });
      setName("");
      setDescription("");
      setPoints("1");
      Keyboard.dismiss();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to create task");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View className="mb-4 gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
      <View className="flex-row items-end gap-3">
        <View className="flex-1 gap-2">
          <Input
            label="Task name"
            value={name}
            onChangeText={setName}
            placeholder="E.g. Morning workout"
            autoCapitalize="sentences"
            returnKeyType="next"
          />
          <Input
            label="Description"
            value={description}
            onChangeText={setDescription}
            placeholder="Optional details"
            autoCapitalize="sentences"
            multiline
          />
        </View>
        <View className="w-16">
          <Input
            label="Pts"
            value={points}
            onChangeText={setPoints}
            keyboardType="number-pad"
            maxLength={2}
          />
        </View>
      </View>
      {error ? <ErrorMessage message={error} /> : null}
      <Button
        title={submitting ? "Adding..." : "Add task"}
        onPress={handleSubmit}
        disabled={submitting}
      />
    </View>
  );
}
