import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PrivacyPolicyScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F7F8FC]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => router.back()}
          className="px-6 pt-4 flex-row items-center"
        >
          <Ionicons name="arrow-back" size={16} color="#4338CA" />

          <Text className="ml-2 text-indigo-700 text-xs font-semibold tracking-wider uppercase">
            Back
          </Text>
        </TouchableOpacity>

        {/* Header */}
        <View className="px-6 mt-8">
          <Text className="text-[42px] font-bold text-slate-900">
            Privacy Policy
          </Text>

          <Text className="text-slate-500 text-lg mt-2">
            Last Updated: October 24, 2023
          </Text>
        </View>

        {/* Main Card */}
        <View className="mx-5 mt-8 bg-white rounded-[32px] p-6">
          {/* Intro */}
          <Text className="text-slate-700 text-[18px] leading-9">
            At HabitFlow, we believe that effortless momentum requires a
            foundation of trust. This Privacy Policy outlines how we handle your
            personal information when you use our application to track your
            habits and build routines. We are committed to minimalism not just
            in design, but in data collection.
          </Text>

          {/* Data Collection */}
          <View className="mt-10">
            <View className="flex-row items-center">
              <Ionicons name="server-outline" size={24} color="#4338CA" />

              <Text className="text-4xl font-bold text-slate-900 ml-3">
                Data Collection
              </Text>
            </View>

            <Text className="text-slate-600 text-lg leading-8 mt-5">
              We only collect data that is strictly necessary to provide and
              improve the HabitFlow experience. This includes:
            </Text>

            <View className="mt-4">
              <Text className="text-slate-700 text-lg leading-8">
                • <Text className="font-bold">Account Information:</Text> Your
                email address and basic profile details required for
                authentication.
              </Text>

              <Text className="text-slate-700 text-lg leading-8 mt-3">
                • <Text className="font-bold">Habit Data:</Text> The names of
                your habits, completion timestamps, and streaks. This is the
                core data required for the app to function.
              </Text>

              <Text className="text-slate-700 text-lg leading-8 mt-3">
                • <Text className="font-bold">Usage Metrics:</Text> Anonymized,
                aggregated data on how features are used to help us refine the
                user experience and reduce cognitive load.
              </Text>
            </View>
          </View>

          {/* User Rights */}
          <View className="mt-12">
            <View className="flex-row items-center">
              <Ionicons
                name="shield-checkmark-outline"
                size={24}
                color="#4338CA"
              />

              <Text className="text-4xl font-bold text-slate-900 ml-3">
                User Rights
              </Text>
            </View>

            <Text className="text-slate-600 text-lg leading-8 mt-5">
              You have complete control over your data. As a premium user of
              HabitFlow, your rights include:
            </Text>

            {/* Access Card */}
            <View className="mt-5 bg-slate-50 rounded-2xl border border-slate-200 p-5">
              <Text className="text-2xl font-semibold text-slate-900">
                Access
              </Text>

              <Text className="text-slate-500 text-base leading-7 mt-3">
                You can request an export of all your habit data at any time in
                standard formats (CSV, JSON).
              </Text>
            </View>

            {/* Deletion Card */}
            <View className="mt-4 bg-slate-50 rounded-2xl border border-slate-200 p-5">
              <Text className="text-2xl font-semibold text-slate-900">
                Deletion
              </Text>

              <Text className="text-slate-500 text-base leading-7 mt-3">
                You can permanently delete your account and all associated data
                directly from the settings menu.
              </Text>
            </View>
          </View>

          {/* Security */}
          <View className="mt-12">
            <View className="flex-row items-center">
              <Feather name="lock" size={24} color="#4338CA" />

              <Text className="text-4xl font-bold text-slate-900 ml-3">
                Security
              </Text>
            </View>

            <Text className="text-slate-600 text-lg leading-9 mt-5">
              We employ modern corporate security standards to protect your
              information. Your data is encrypted in transit using
              industry-standard TLS and at rest within our secure databases. We
              regularly review our security practices to ensure your digital
              environment remains a calm and safe space for personal growth.
            </Text>
          </View>

          {/* Divider */}
          <View className="h-[1px] bg-slate-200 my-10" />

          {/* Footer */}
          <Text className="text-slate-500 text-lg text-center leading-8">
            If you have any questions or concerns regarding this policy, please
            contact our support team.
          </Text>

          <TouchableOpacity className="bg-indigo-600 rounded-full py-5 mt-8 self-center px-12">
            <Text className="text-white text-xl font-semibold">
              Contact Privacy Team
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
