import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Href, router } from "expo-router";

const settingsSections = [
  {
    title: "ACCOUNT",
    items: [
      {
        label: "Edit Profile",
        icon: "account-outline",
        href: "/(screens)/editProfile" as Href,
      },
      {
        label: "Notification Settings",
        icon: "bell-outline",
        href: "/(screens)/editProfile" as Href,
      },
    ],
  },
  {
    title: "COMMUNITY & PROGRESS",
    items: [
      {
        label: "Leaderboard",
        icon: "podium-gold",
        href: "/(screens)/leaderboard" as Href,
      },
      {
        label: "Achievements",
        icon: "trophy-outline",
        href: "/(screens)/achievements" as Href,
      },
    ],
  },
  {
    title: "SUPPORT & FEEDBACK",
    items: [
      {
        label: "Rate Our App",
        icon: "star-outline",
        href: "/(screens)/helpCentre" as Href,
      },
      {
        label: "Help Center",
        icon: "help-circle-outline",
        href: "/(screens)/helpCentre" as Href,
      },
      {
        label: "Privacy Policy",
        icon: "shield-outline",
        href: "/(screens)/privacyPolicy" as Href,
      },
    ],
  },
];

function SettingRow({
  icon,
  label,
  href,
}: {
  icon: string;
  label: string;
  href: Href;
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(href);
      }}
      className="flex-row items-center justify-between py-6 px-6 border-b border-slate-100"
    >
      <View className="flex-row items-center">
        <View className="h-14 w-14 rounded-full bg-indigo-100 items-center justify-center">
          <MaterialCommunityIcons
            name={icon as any}
            size={28}
            color="#4F46E5"
          />
        </View>

        <Text className="ml-4 text-xl text-slate-800">{label}</Text>
      </View>

      <Ionicons name="chevron-forward" size={24} color="#C7C9D9" />
    </TouchableOpacity>
  );
}

export default function SettingsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F7F8FC]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between px-6 py-5 border-b border-slate-100 bg-white">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={28} color="#1E293B" />
          </TouchableOpacity>

          <Text className="text-3xl font-bold text-indigo-600">Settings</Text>

          <View className="w-7" />
        </View>

        {/* Sections */}
        {settingsSections.map((section) => (
          <View key={section.title} className="px-5 mt-10">
            <Text className="text-slate-500 font-bold text-lg tracking-wide mb-4">
              {section.title}
            </Text>

            <View className="bg-white rounded-3xl overflow-hidden shadow-sm">
              {section.items.map((item, index) => (
                <View key={item.label}>
                  <SettingRow
                    icon={item.icon}
                    label={item.label}
                    href={item.href}
                  />

                  {index === section.items.length - 1 ? null : (
                    <View className="h-[1px] bg-slate-100 ml-24" />
                  )}
                </View>
              ))}
            </View>
          </View>
        ))}

        {/* Logout */}
        <View className="px-5 mt-12">
          <TouchableOpacity className="bg-red-100 rounded-full py-6 flex-row justify-center items-center">
            <Feather name="log-out" size={24} color="#DC2626" />

            <Text className="text-red-600 text-2xl font-semibold ml-3">
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
