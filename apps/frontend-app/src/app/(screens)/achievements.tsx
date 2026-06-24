import React from "react";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const badges = [
  {
    id: 1,
    title: "First Step",
    subtitle: "1 Habit Completed",
    icon: "flag-outline",
    color: "#6EE7B7",
    unlocked: true,
  },
  {
    id: 2,
    title: "Early Bird",
    subtitle: "5 AM Routine",
    icon: "flash-outline",
    color: "#6366F1",
    unlocked: true,
  },
  {
    id: 3,
    title: "Dedication",
    subtitle: "100 Habits Completed",
    icon: "medal-outline",
    color: "#FED7AA",
    unlocked: true,
  },
  {
    id: 4,
    title: "Flawless",
    subtitle: "100 Day Streak",
    icon: "diamond-outline",
    unlocked: false,
    progress: 72,
  },
  {
    id: 5,
    title: "Marathon",
    subtitle: "500 Habits Completed",
    icon: "walk-outline",
    unlocked: false,
    progress: 43,
  },
  {
    id: 6,
    title: "Night Owl",
    subtitle: "30 Evening Routines",
    icon: "moon-outline",
    unlocked: false,
    progress: 12,
  },
  {
    id: 7,
    title: "Iron Will",
    subtitle: "180 Day Streak",
    icon: "shield-checkmark-outline",
    unlocked: false,
    progress: 40,
  },
  {
    id: 8,
    title: "Bookworm",
    subtitle: "100 Reading Sessions",
    icon: "book-outline",
    unlocked: false,
    progress: 65,
  },
  {
    id: 9,
    title: "Hydrated",
    subtitle: "60 Water Goals",
    icon: "water-outline",
    unlocked: false,
    progress: 85,
  },
  {
    id: 10,
    title: "Fitness Freak",
    subtitle: "250 Workouts",
    icon: "barbell-outline",
    unlocked: false,
    progress: 22,
  },
  {
    id: 11,
    title: "Mind Master",
    subtitle: "90 Meditation Sessions",
    icon: "leaf-outline",
    unlocked: false,
    progress: 58,
  },
  {
    id: 12,
    title: "Legend",
    subtitle: "365 Day Streak",
    icon: "trophy-outline",
    unlocked: false,
    progress: 15,
  },
];

export default function AchievementsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F7F8FC]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        {/* Header */}
        <View className="flex-row items-center px-6 py-4">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={28} color="#1E293B" />
          </TouchableOpacity>

          <View className="flex-1 items-center mr-8">
            <Text className="text-[28px] font-bold text-indigo-600">
              Achievements
            </Text>
          </View>
        </View>

        {/* Latest Unlock */}
        <View className="mx-6 bg-white rounded-[32px] p-7 border border-indigo-50">
          <View className="items-center">
            <View className="h-32 w-32 rounded-full bg-indigo-600 items-center justify-center shadow-lg">
              <Ionicons name="flame-outline" size={60} color="white" />
            </View>
          </View>

          <Text className="text-indigo-700 font-semibold tracking-widest mt-8">
            LATEST UNLOCK
          </Text>

          <Text className="text-4xl font-bold text-slate-900 mt-2">
            30 Day Streak
          </Text>

          <Text className="text-slate-500 text-xl leading-8 mt-4">
            You've maintained your core habits for an entire month. Unstoppable
            momentum.
          </Text>
        </View>

        {/* Total Points */}
        <View className="mx-6 mt-5 bg-white rounded-[32px] p-7">
          <View className="flex-row justify-between items-center">
            <Text className="text-slate-500 font-semibold tracking-wide">
              TOTAL POINTS
            </Text>

            <Ionicons name="star-outline" size={28} color="#F59E0B" />
          </View>

          <Text className="text-[50px] font-bold text-slate-900 mt-4">
            2,450
          </Text>

          <View className="h-3 bg-slate-200 rounded-full mt-6 overflow-hidden">
            <View
              className="h-full bg-emerald-700 rounded-full"
              style={{ width: "78%" }}
            />
          </View>

          <Text className="text-right text-slate-500 font-semibold mt-3">
            550 to Next Level
          </Text>
        </View>

        {/* Stats Row */}
        <View className="flex-row mx-6 mt-5">
          <View className="flex-1 bg-white rounded-3xl p-5 mr-2 items-center">
            <Text className="text-4xl font-bold text-indigo-600">18</Text>
            <Text className="text-slate-500 mt-2">Badges Earned</Text>
          </View>

          <View className="flex-1 bg-white rounded-3xl p-5 ml-2 items-center">
            <Text className="text-4xl font-bold text-emerald-600">63%</Text>
            <Text className="text-slate-500 mt-2">Completion</Text>
          </View>
        </View>

        {/* Section */}
        <View className="px-6 mt-10">
          <Text className="text-4xl font-bold text-slate-900">All Badges</Text>
        </View>

        {/* Badges Grid */}
        <View className="flex-row flex-wrap justify-between px-6 mt-6">
          {badges.map((badge) => (
            <View
              key={badge.id}
              className={`w-[48%] rounded-3xl mb-5 p-5 ${
                badge.unlocked ? "bg-white" : "bg-slate-100"
              }`}
            >
              <View className="items-center">
                <View
                  className={`h-24 w-24 rounded-full items-center justify-center ${
                    badge.unlocked ? "" : "bg-slate-200"
                  }`}
                  style={{
                    backgroundColor: badge.unlocked ? badge.color : undefined,
                  }}
                >
                  <Ionicons
                    name={badge.icon as any}
                    size={40}
                    color={badge.unlocked ? "#111827" : "#A3A3A3"}
                  />
                </View>
              </View>

              <Text
                className={`text-center text-2xl font-semibold mt-5 ${
                  badge.unlocked ? "text-slate-900" : "text-slate-400"
                }`}
              >
                {badge.title}
              </Text>

              <Text
                className={`text-center mt-2 ${
                  badge.unlocked ? "text-slate-500" : "text-slate-400"
                }`}
              >
                {badge.subtitle}
              </Text>

              {!badge.unlocked && (
                <>
                  <View className="h-2 bg-slate-300 rounded-full mt-5 overflow-hidden">
                    <View
                      className="h-full bg-indigo-500 rounded-full"
                      //   style={{
                      //     width: `${badge.progress}%`,
                      //   }}
                    />
                  </View>

                  <Text className="text-center text-slate-500 text-xs mt-2">
                    {badge.progress}% Complete
                  </Text>
                </>
              )}
            </View>
          ))}
        </View>

        {/* Next Badge */}
        <View className="mx-6 mt-3 bg-indigo-600 rounded-[32px] p-6">
          <View className="flex-row items-center">
            <MaterialCommunityIcons
              name="trophy-award"
              size={42}
              color="white"
            />

            <View className="ml-4 flex-1">
              <Text className="text-white/70 text-sm">
                NEXT BIG ACHIEVEMENT
              </Text>

              <Text className="text-white text-3xl font-bold mt-1">
                Hydrated
              </Text>

              <Text className="text-white/80 mt-2">
                Complete 9 more water goals
              </Text>
            </View>
          </View>

          <View className="h-3 bg-white/20 rounded-full mt-6 overflow-hidden">
            <View
              className="h-full bg-white rounded-full"
              style={{ width: "85%" }}
            />
          </View>

          <Text className="text-white text-right mt-3">85% Complete</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
