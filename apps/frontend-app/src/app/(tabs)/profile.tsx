// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// const Profile = () => {
//   return (
//     <SafeAreaView>
//       <Text>Profile</Text>
//     </SafeAreaView>
//   );
// };

// export default Profile;

// const styles = StyleSheet.create({});

import React from "react";
import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const achievements = [
  {
    title: "First Habit Completed",
    date: "Unlocked Jun 2, 2023",
    icon: "rocket-outline",
    color: "#FB923C",
    bg: "#FFF7ED",
  },
  {
    title: "30 Day Streak",
    date: "Unlocked Jul 15, 2023",
    icon: "flame-outline",
    color: "#10B981",
    bg: "#ECFDF5",
  },
  {
    title: "1000 Points Earned",
    date: "Unlocked Aug 5, 2023",
    icon: "star-outline",
    color: "#4F46E5",
    bg: "#EEF2FF",
  },
];

const weeklyData = [45, 65, 95, 80, 85, 55, 10];

const consistencyData = [
  1, 1, 1, 0, 2, 1, 0, 0, 1, 1, 0, 2, 0, 2, 0, 1, 2, 1, 0, 2, 2, 1, 0, 1, 2, 2,
  1, 1, 2, 1, 2, 0, 0, 1, 0, 2, 2, 2, 2, 0, 0, 2,
];

const OverviewCard = ({
  title,
  value,
  icon,
  active = false,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  active?: boolean;
}) => (
  <View
    className={`w-[48%] rounded-3xl p-5 ${
      active ? "bg-indigo-600" : "bg-white"
    }`}
  >
    <View className="flex-row items-center">
      {icon}
      <Text
        className={`ml-2 text-sm ${active ? "text-white" : "text-slate-600"}`}
      >
        {title}
      </Text>
    </View>

    <Text
      className={`text-4xl font-bold mt-5 ${
        active ? "text-white" : "text-black"
      }`}
    >
      {value}
    </Text>
  </View>
);

export default function Profile() {
  return (
    <SafeAreaView className="flex-1 bg-[#F8FAFC]">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 pt-4 flex-row justify-between items-center">
          <Text className="text-5xl font-bold text-indigo-600">HabitFlow</Text>

          <TouchableOpacity onPress={() => router.push("/(screens)/settings")}>
            <Ionicons name="settings-outline" size={26} color="#0F172A" />
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View className="items-center mt-8">
          <Image
            source={{
              uri: "https://i.pravatar.cc/300",
            }}
            className="h-32 w-32 rounded-full"
          />

          <Text className="text-4xl font-bold mt-5">Ayush Sharma</Text>

          <Text className="text-slate-500 text-lg mt-1">ayush@example.com</Text>

          <View className="mt-5 bg-white px-5 py-3 rounded-full flex-row items-center">
            <Feather name="calendar" size={18} color="#15803D" />

            <Text className="ml-2 text-slate-600">Joined June 2023</Text>
          </View>
        </View>

        {/* Overview */}
        <View className="px-5 mt-10">
          <Text className="text-3xl font-semibold mb-5">Overview</Text>

          <View className="flex-row justify-between">
            <OverviewCard
              title="Total Points"
              value="12,540"
              icon={<Ionicons name="star-outline" size={18} color="#4F46E5" />}
            />

            <OverviewCard
              title="Current Streak"
              value="24 Days"
              active
              icon={<Ionicons name="flame-outline" size={18} color="#FBBF24" />}
            />
          </View>

          <View className="flex-row justify-between mt-4">
            <OverviewCard
              title="Longest Streak"
              value="76 Days"
              icon={
                <Ionicons name="trophy-outline" size={18} color="#15803D" />
              }
            />

            <OverviewCard
              title="Total Habits"
              value="1,245"
              icon={
                <Ionicons
                  name="checkmark-done-outline"
                  size={18}
                  color="#111827"
                />
              }
            />
          </View>
        </View>

        {/* Weekly Activity */}
        <View className="mx-5 mt-10 bg-white rounded-3xl p-5">
          <Text className="text-2xl font-semibold mb-8">Weekly Activity</Text>

          <View className="h-52 flex-row items-end justify-between">
            {weeklyData.map((height, index) => (
              <View key={index} className="items-center">
                <View
                  style={{
                    height,
                    width: 30,
                    borderRadius: 6,
                    backgroundColor:
                      index === 2 || index === 4
                        ? "#4F46E5"
                        : index === 6
                          ? "#E5E7EB"
                          : "#DAD7FE",
                  }}
                />

                <Text className="text-xs mt-3">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Consistency */}
        <View className="mx-5 mt-6 bg-white rounded-3xl p-5">
          <Text className="text-2xl font-semibold mb-6">Consistency</Text>

          <View className="flex-row flex-wrap">
            {consistencyData.map((level, index) => {
              const colors = ["#FFFFFF", "#6EE7B7", "#10B981"];

              return (
                <View
                  key={index}
                  style={{
                    width: 16,
                    height: 16,
                    margin: 4,
                    borderRadius: 4,
                    backgroundColor: colors[level],
                  }}
                />
              );
            })}
          </View>
        </View>

        {/* Achievements */}
        <View className="px-5 mt-10">
          <View className="flex-row items-center mb-5">
            <MaterialCommunityIcons
              name="medal-outline"
              size={22}
              color="#EA580C"
            />

            <Text className="text-3xl font-semibold ml-2">Achievements</Text>
          </View>

          {achievements.map((achievement, index) => (
            <View key={index} className="flex-row items-center mb-8">
              <View
                style={{
                  backgroundColor: achievement.bg,
                }}
                className="h-14 w-14 rounded-full items-center justify-center"
              >
                <Ionicons
                  name={achievement.icon as any}
                  size={24}
                  color={achievement.color}
                />
              </View>

              <View className="ml-4">
                <Text className="text-xl font-medium">{achievement.title}</Text>

                <Text className="text-slate-500 mt-1">{achievement.date}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
