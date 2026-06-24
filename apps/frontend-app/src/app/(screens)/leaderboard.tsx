import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const leaderboardData = [
  {
    rank: 1,
    name: "Sarah J.",
    points: 1580,
    badge: "Current Champ",
    image: "https://i.pravatar.cc/300?img=32",
    color: "#F59E0B",
  },
  {
    rank: 2,
    name: "Alex R.",
    points: 1240,
    image: "https://i.pravatar.cc/300?img=12",
    color: "#94A3B8",
  },
  {
    rank: 3,
    name: "Mike T.",
    points: 1120,
    image: "https://i.pravatar.cc/300?img=47",
    color: "#C2410C",
  },
];

const rankings = [
  {
    rank: 4,
    name: "David K.",
    score: 980,
    image: "https://i.pravatar.cc/200?img=15",
  },
  {
    rank: 5,
    name: "Elena P.",
    score: 945,
    image: "https://i.pravatar.cc/200?img=25",
  },
];

export default function LeaderboardScreen() {
  const [activeTab, setActiveTab] = useState("weekly");

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
              Leaderboard
            </Text>
          </View>
        </View>

        {/* Title */}
        <View className="items-center px-6">
          <Text className="text-center text-slate-500 text-xl mt-5 leading-8">
            See how your effortless momentum stacks up
            {"\n"}
            against the community.
          </Text>
        </View>

        {/* Toggle */}
        <View className="items-center mt-10">
          <View className="bg-white rounded-full p-1 flex-row shadow-sm">
            <TouchableOpacity
              onPress={() => setActiveTab("weekly")}
              className={`px-8 py-3 rounded-full ${
                activeTab === "weekly" ? "bg-indigo-600" : "bg-transparent"
              }`}
            >
              <Text
                className={`font-semibold ${
                  activeTab === "weekly" ? "text-white" : "text-slate-700"
                }`}
              >
                Weekly
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setActiveTab("all")}
              className="px-8 py-3 rounded-full"
            >
              <Text className="font-semibold text-slate-700">All Time</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* First Place */}
        <View className="mx-6 mt-12">
          <View className="bg-indigo-50 rounded-[30px] pt-20 pb-8 items-center border border-indigo-100">
            <View className="absolute -top-10">
              <Image
                source={{ uri: leaderboardData[0].image }}
                className="h-24 w-24 rounded-full"
              />

              <View className="absolute inset-0 border-4 border-amber-500 rounded-full" />
            </View>

            <MaterialCommunityIcons
              name="medal-outline"
              size={42}
              color="#F59E0B"
            />

            <Text className="text-indigo-600 text-5xl font-bold mt-2">
              {leaderboardData[0].name}
            </Text>

            <Text className="text-amber-600 text-2xl mt-2 font-medium">
              {leaderboardData[0].points.toLocaleString()} pts
            </Text>

            <View className="bg-amber-100 rounded-full px-4 py-2 mt-3">
              <Text className="text-amber-700 font-medium">Current Champ</Text>
            </View>
          </View>
        </View>

        {/* Second Place */}
        <View className="mx-6 mt-5">
          <View className="bg-white rounded-[30px] pt-20 pb-8 items-center">
            <View className="absolute -top-8">
              <Image
                source={{ uri: leaderboardData[1].image }}
                className="h-20 w-20 rounded-full"
              />
            </View>

            <MaterialCommunityIcons
              name="trophy-outline"
              size={28}
              color="#94A3B8"
            />

            <Text className="text-4xl font-semibold mt-3">
              {leaderboardData[1].name}
            </Text>

            <Text className="text-slate-400 text-2xl mt-2">
              {leaderboardData[1].points.toLocaleString()} pts
            </Text>
          </View>
        </View>

        {/* Third Place */}
        <View className="mx-6 mt-5">
          <View className="bg-white rounded-[30px] pt-20 pb-8 items-center">
            <View className="absolute -top-8">
              <Image
                source={{ uri: leaderboardData[2].image }}
                className="h-20 w-20 rounded-full"
              />
            </View>

            <MaterialCommunityIcons
              name="trophy-outline"
              size={28}
              color="#C2410C"
            />

            <Text className="text-4xl font-semibold mt-3">
              {leaderboardData[2].name}
            </Text>

            <Text className="text-orange-700 text-2xl mt-2">
              {leaderboardData[2].points.toLocaleString()} pts
            </Text>
          </View>
        </View>

        {/* Ranking Table */}
        <View className="mx-6 mt-10 bg-white rounded-t-3xl overflow-hidden">
          {/* Header */}
          <View className="flex-row px-5 py-4 border-b border-slate-200">
            <Text className="w-12 text-slate-500 font-semibold">#</Text>

            <Text className="flex-1 text-slate-500 font-semibold">
              Habiteer
            </Text>

            <Text className="text-slate-500 font-semibold">Score</Text>
          </View>

          {rankings.map((user) => (
            <View
              key={user.rank}
              className="flex-row items-center px-5 py-5 border-b border-slate-100"
            >
              <Text className="w-12 text-3xl font-semibold text-slate-500">
                {user.rank}
              </Text>

              <View className="flex-row items-center flex-1">
                <Image
                  source={{ uri: user.image }}
                  className="h-12 w-12 rounded-full"
                />

                <Text className="ml-4 text-2xl">{user.name}</Text>
              </View>

              <Text className="text-2xl text-slate-700">{user.score}</Text>
            </View>
          ))}

          {/* Current User */}
          <View className="flex-row items-center px-5 py-5 bg-indigo-50 border-l-4 border-indigo-600">
            <Text className="w-12 text-3xl font-bold text-indigo-600">42</Text>

            <View className="flex-row items-center flex-1">
              <Image
                source={{
                  uri: "https://i.pravatar.cc/200?img=32",
                }}
                className="h-14 w-14 rounded-full border-2 border-indigo-600"
              />

              <View className="ml-4">
                <Text className="text-3xl font-semibold">You</Text>

                <Text className="text-indigo-600 font-medium">Moving up!</Text>
              </View>
            </View>

            <Text className="text-3xl font-bold text-indigo-600">410</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
