import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
const faqData = [
  {
    question: "How do I track a new habit?",
    answer:
      "Tap the + button on the home screen, enter your habit details, and save it. You can then track it daily.",
  },
  {
    question: "Managing my subscription",
    answer:
      "Navigate to Settings > Billing to view, upgrade, or cancel your subscription.",
  },
  {
    question: "What are momentum points?",
    answer:
      "Momentum points are earned by completing habits consistently and maintaining streaks.",
  },
  {
    question: "Can I sync across multiple devices?",
    answer:
      "Yes. Simply log into the same account on all devices and your data will sync automatically.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => setExpanded(!expanded)}
      className="bg-white rounded-3xl p-6 mb-4 border border-slate-100"
    >
      <View className="flex-row justify-between items-center">
        <Text className="text-2xl font-semibold text-slate-800 flex-1 pr-4">
          {question}
        </Text>

        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={24}
          color="#6B7280"
        />
      </View>

      {expanded && (
        <Text className="mt-4 text-slate-500 text-lg leading-7">{answer}</Text>
      )}
    </TouchableOpacity>
  );
}

function CategoryCard({
  icon,
  title,
  active = false,
}: {
  icon: string;
  title: string;
  active?: boolean;
}) {
  return (
    <TouchableOpacity className="bg-white rounded-3xl flex-1 h-40 items-center justify-center border border-slate-100">
      <View
        className={`h-16 w-16 rounded-full items-center justify-center ${
          active ? "bg-indigo-600" : "bg-slate-100"
        }`}
      >
        <MaterialCommunityIcons
          name={icon as any}
          size={30}
          color={active ? "#FFFFFF" : "#6B7280"}
        />
      </View>

      <Text className="mt-5 text-xl font-semibold text-slate-800">{title}</Text>
    </TouchableOpacity>
  );
}

export default function HelpCenterScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F7F8FC]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        {/* Header */}
        <View className="flex-row items-center px-6 py-4">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={28} color="#1E293B" />
          </TouchableOpacity>

          <View className="flex-1 items-center mr-8">
            <Text className="text-[28px] font-bold text-indigo-600">
              Help Centre
            </Text>
          </View>
        </View>

        {/* Title */}
        <View className="px-6 mt-8">
          <Text className="text-4xl font-bold text-slate-800 text-center">
            How can we help you?
          </Text>
        </View>

        {/* Search */}
        <View className="px-6 mt-8">
          <View className="bg-white rounded-3xl px-5 py-5 flex-row items-center border border-slate-100">
            <Feather name="search" size={24} color="#6B7280" />

            <TextInput
              placeholder="Search articles, guides, and FAQs..."
              placeholderTextColor="#94A3B8"
              className="flex-1 ml-4 text-lg"
            />
          </View>
        </View>

        {/* Categories */}
        <View className="px-6 mt-10">
          <View className="flex-row">
            <CategoryCard
              title="Getting Started"
              icon="check-circle-outline"
              active
            />

            <View className="w-4" />

            <CategoryCard title="Tracking Habits" icon="target" />
          </View>

          <View className="h-4" />

          <View className="flex-row">
            <CategoryCard title="Account" icon="account-circle-outline" />

            <View className="w-4" />

            <CategoryCard title="Billing" icon="credit-card-outline" />
          </View>
        </View>

        {/* FAQ Header */}
        <View className="px-6 mt-12">
          <Text className="text-4xl font-bold text-slate-800">
            Frequently Asked Questions
          </Text>

          <View className="h-[1px] bg-slate-200 mt-4" />
        </View>

        {/* FAQ List */}
        <View className="px-6 mt-8">
          {faqData.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </View>

        {/* Support Card */}
        <View className="px-6 mt-10">
          <View
            style={{
              backgroundColor: "#EEF2FF",
            }}
            className="rounded-[32px] p-8 items-center"
          >
            <View className="h-20 w-20 rounded-full bg-white items-center justify-center">
              <MaterialCommunityIcons
                name="headset"
                size={36}
                color="#4F46E5"
              />
            </View>

            <Text className="text-4xl font-bold text-slate-800 mt-6">
              Still need help?
            </Text>

            <Text className="text-slate-500 text-center text-xl mt-3">
              Our support team is ready to assist you.
            </Text>

            <TouchableOpacity className="mt-8 bg-indigo-600 rounded-full px-12 py-5">
              <Text className="text-white text-2xl font-semibold">
                Contact Support
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
