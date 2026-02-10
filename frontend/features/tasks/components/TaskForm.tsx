import React, { useState } from "react";
import {Keyboard, View, Text, TouchableOpacity, ActivityIndicator} from "react-native";
import { Input } from "@/components/ui/Input";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import {TaskPoints} from "@/lib/types";
import {createTask} from "@/services/api";
import ErrorNotification from "@/components/ui/ErrorNotification";

type TaskFormProps = {
  onSubmit: (values: {
    name: string;
    description: string;
    points: number;
  }) => Promise<void>;
};

export function TaskForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState("5");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const allowedPoints = new Set([TaskPoints.FIVE, TaskPoints.TEN, TaskPoints.TWENTY, TaskPoints.FIFTY]);


  const handleSubmit = async () => {
    const numericPoints = Number(points);
    if (!name.trim()) {
      setError("Please enter a name for the task.");
      return;
    }

    if (!description.trim()) {
      setError("Please enter a small description for the task.");
      return;
    }
    if (!allowedPoints.has(numericPoints)) {
      setError("Points must be a number either 5, 10, 20, 50");
      return;
    }

    try {
      setSubmitting(true);
      setError(null);


     const result= await createTask({
        name: name.trim(),
        description: description.trim(),
        points: numericPoints,
      });

      setName("");
      setDescription("");
      setPoints("0");
      Keyboard.dismiss();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to create task");
    } finally {
      setSubmitting(false);
    }
  };


  if(submitting){
    return (
        <ActivityIndicator/>
    )
  }

  return (
    <View className="mb-4 gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-4 ">
      <View className="">
        <View className={"gap-3 mb-4"}>
          <Text className={"text-xl font-extrabold text-white"}>
            Enter the Task
          </Text>
          <Input
              value={name}
              onChangeText={setName}
              placeholder="E.g. Morning workout"
              autoCapitalize="sentences"
              returnKeyType="next"
              className={"py-3 px-6 text-5xl tracking-wider "}
          />
        </View>
        <View className={"gap-3 mb-4"}>
          <Text className={"text-xl font-extrabold text-white"}>
            Enter the description
          </Text>
          <Input
              value={description}
              onChangeText={setDescription}
              placeholder="Optional details"
              autoCapitalize="sentences"
              multiline
              className={"py-3 px-6 text-5xl tracking-wider "}
          />


        </View>
        <View className={"gap-3 mb-4"}>
          <Text className={"text-xl font-extrabold text-white"}>
            Enter the Points
          </Text>
          <Input
              value={points}
              onChangeText={setPoints}
              placeholder={"10, 20, 50"}
              keyboardType="number-pad"
              maxLength={2}

              className={"py-3 px-6 text-5xl tracking-wider "}
          />
        </View>

      </View>
      {error ? <ErrorMessage message={error} /> : null}
      <TouchableOpacity className={"bg-blue-600 active:bg-blue-700 py-3 rounded-xl items-center "} onPress={handleSubmit}>
        <Text className={"text-4xl font-extrabold text-white"}>
          Add tasks
        </Text>
      </TouchableOpacity>

    </View>
  );
}
