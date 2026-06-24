// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// const Home = () => {
//   return (
//     <SafeAreaView>
//       <Text className="text-xl font-extralight ">Home</Text>
//     </SafeAreaView>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({});

import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Svg, { Circle } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import AddHabitModal from "@/components/AddHabitModal";
const habits = [
  {
    id: 1,
    title: "Exercise",
    subtitle: "Daily workout",
    streak: 5,
    completed: true,
    icon: "run",
  },
  {
    id: 2,
    title: "Reading",
    subtitle: "10 pages",
    streak: 8,
    completed: false,
    icon: "book-open-page-variant",
  },
  {
    id: 3,
    title: "Water Intake",
    subtitle: "2L per day",
    streak: 3,
    completed: true,
    icon: "water-outline",
  },
];

const ProgressRing = () => {
  const radius = 75;
  const strokeWidth = 12;
  const circumference = 2 * Math.PI * radius;
  const progress = 70;

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <View className="items-center justify-center">
      <Svg width={180} height={180}>
        <Circle
          stroke="#7C7DFB"
          fill="none"
          cx="90"
          cy="90"
          r={radius}
          strokeWidth={strokeWidth}
        />

        <Circle
          stroke="#4ADE80"
          fill="none"
          cx="90"
          cy="90"
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin="90,90"
        />
      </Svg>

      <View className="absolute items-center">
        <Text className="text-white text-5xl font-bold">70%</Text>

        <Text className="text-white/80 text-sm tracking-widest">COMPLETE</Text>
      </View>
    </View>
  );
};

const HabitCard = ({ title, subtitle, streak, completed, icon }: any) => {
  return (
    <View className="bg-white rounded-3xl p-5 mb-4 flex-row items-center shadow-sm">
      <View className="h-16 w-16 rounded-full bg-slate-100 items-center justify-center">
        <MaterialCommunityIcons name={icon} size={30} color="#4F46E5" />
      </View>

      <View className="flex-1 ml-4">
        <Text
          className={`text-3xl font-semibold ${
            completed ? "line-through text-slate-500" : "text-black"
          }`}
        >
          {title}
        </Text>

        <Text className="text-slate-600 text-lg">{subtitle}</Text>

        <View className="flex-row items-center mt-2">
          <Ionicons name="flame-outline" size={16} color="#F59E0B" />

          <Text className="ml-1 text-amber-500 font-medium">
            {streak} Day Streak
          </Text>
        </View>
      </View>

      <TouchableOpacity
        className={`h-12 w-12 rounded-full items-center justify-center border-2 ${
          completed ? "bg-emerald-500 border-emerald-500" : "border-violet-200"
        }`}
      >
        {completed && <Ionicons name="checkmark" size={24} color="white" />}
      </TouchableOpacity>
    </View>
  );
};

export default function Home() {
  const [showAddHabit, setShowAddHabit] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-[#F7F8FC]">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 pt-4 flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Text className="ml-3 text-5xl font-bold text-indigo-600">
              HabitFlow
            </Text>
          </View>
          {/* <ion-icon name="add-outline"></ion-icon> */}
          <TouchableOpacity onPress={() => setShowAddHabit(true)}>
            <Ionicons name="add-circle-outline" size={28} color="#1E293B" />
          </TouchableOpacity>
        </View>

        {/* Greeting */}
        <View className="px-6 mt-10">
          <Text className="text-4xl font-bold">Good Morning, Ayush</Text>

          <Text className="text-slate-500 text-2xl mt-2">Tuesday, 24 June</Text>
        </View>

        {/* Progress Bar */}
        <View className="mx-6 mt-6 h-12 rounded-full bg-slate-100 justify-center px-5">
          <View className="flex-row items-center">
            <View className="h-3 w-3 rounded-full bg-emerald-400" />

            <Text className="ml-3 font-semibold">3 / 5 Habits Completed</Text>
          </View>
        </View>

        {/* Progress Card */}
        <View className="mx-6 mt-8 rounded-3xl bg-indigo-600 p-6">
          <ProgressRing />

          <View className="flex-row justify-between mt-6">
            <View className="bg-white/20 rounded-2xl flex-1 p-4 mr-2 items-center">
              <Ionicons name="flame-outline" size={24} color="#F59E0B" />

              <Text className="text-white text-3xl font-bold mt-2">12</Text>

              <Text className="text-white/70">DAY STREAK</Text>
            </View>

            <View className="bg-white/20 rounded-2xl flex-1 p-4 ml-2 items-center">
              <Ionicons name="star-outline" size={24} color="#F59E0B" />

              <Text className="text-white text-3xl font-bold mt-2">250</Text>

              <Text className="text-white/70">POINTS</Text>
            </View>
          </View>
        </View>

        {/* Quote */}
        <View className="mx-6 mt-6 bg-white rounded-3xl p-6">
          <Text className="italic text-slate-700 text-xl leading-8">
            "Success is the product of daily habits—not once-in-a-lifetime
            transformations."
          </Text>
        </View>

        {/* Section Header */}
        <View className="mx-6 mt-8 flex-row justify-between items-center">
          <Text className="text-3xl font-bold">Today's Habits</Text>

          <TouchableOpacity>
            <Text className="text-indigo-600 font-semibold">VIEW ALL</Text>
          </TouchableOpacity>
        </View>

        {/* Habit Cards */}
        <View className="mx-6 mt-4">
          {habits.map((habit) => (
            <HabitCard key={habit.id} {...habit} />
          ))}
        </View>
      </ScrollView>
      {/* 
      FAB
      <TouchableOpacity className="absolute bottom-24 right-6 h-16 w-16 rounded-full bg-indigo-600 items-center justify-center shadow-lg">
        <Ionicons name="add" size={34} color="white" />
      </TouchableOpacity> */}
      <AddHabitModal
        visible={showAddHabit}
        onClose={() => setShowAddHabit(false)}
        onSave={(habit) => {
          console.log(habit);

          // Save to Firebase / Supabase / API
        }}
      />
    </SafeAreaView>
  );
}
