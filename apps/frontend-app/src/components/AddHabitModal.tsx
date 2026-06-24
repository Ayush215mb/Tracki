import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

interface AddHabitModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (habit: {
    name: string;
    description: string;
    category: string;
    goal: number;
    icon: string;
  }) => void;
}

const icons = [
  "meditation",
  "run",
  "cup-water",
  "book-open-page-variant",
  "dumbbell",
  "moon-waning-crescent",
  "leaf",
  "heart-outline",
  "brain",
  "pencil",
  "piggy-bank-outline",
  "dots-horizontal",
];

export default function AddHabitModal({
  visible,
  onClose,
  onSave,
}: AddHabitModalProps) {
  const [habitName, setHabitName] = useState("");
  const [description, setDescription] = useState("");
  const [category] = useState("Health & Fitness");
  const [goal, setGoal] = useState(1);
  const [selectedIcon, setSelectedIcon] = useState("meditation");

  const handleSave = () => {
    if (!habitName.trim()) return;

    onSave({
      name: habitName,
      description,
      category,
      goal,
      icon: selectedIcon,
    });

    setHabitName("");
    setDescription("");
    setGoal(1);
    setSelectedIcon("meditation");

    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.4)",
          justifyContent: "flex-end",
        }}
      >
        <SafeAreaView
          edges={["top"]}
          style={{
            height: "90%",
            backgroundColor: "#fff",
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            overflow: "hidden",
          }}
        >
          {/* Handle */}
          <View
            style={{
              alignItems: "center",
              paddingTop: 12,
            }}
          >
            <View
              style={{
                width: 80,
                height: 6,
                borderRadius: 999,
                backgroundColor: "#CBD5E1",
              }}
            />
          </View>

          {/* Header */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 24,
              paddingVertical: 20,
              borderBottomWidth: 1,
              borderBottomColor: "#F1F5F9",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "700",
                color: "#0F172A",
              }}
            >
              Create New Habit
            </Text>

            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={32} color="#334155" />
            </TouchableOpacity>
          </View>

          {/* Body */}
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{
              padding: 24,
              paddingBottom: 40,
            }}
            keyboardShouldPersistTaps="handled"
          >
            {/* Habit Name */}
            <Text
              style={{
                fontWeight: "600",
                color: "#475569",
                marginBottom: 10,
              }}
            >
              HABIT NAME
            </Text>

            <TextInput
              value={habitName}
              onChangeText={setHabitName}
              placeholder="e.g. Morning Meditation"
              placeholderTextColor="#94A3B8"
              style={{
                borderWidth: 1,
                borderColor: "#E2E8F0",
                borderRadius: 16,
                paddingHorizontal: 18,
                paddingVertical: 18,
                fontSize: 18,
              }}
            />

            {/* Description */}
            <Text
              style={{
                fontWeight: "600",
                color: "#475569",
                marginTop: 24,
                marginBottom: 10,
              }}
            >
              DESCRIPTION (OPTIONAL)
            </Text>

            <TextInput
              value={description}
              onChangeText={setDescription}
              multiline
              textAlignVertical="top"
              placeholder="Why do you want to build this habit?"
              placeholderTextColor="#94A3B8"
              style={{
                borderWidth: 1,
                borderColor: "#E2E8F0",
                borderRadius: 16,
                paddingHorizontal: 18,
                paddingVertical: 18,
                minHeight: 120,
                fontSize: 18,
              }}
            />

            {/* Category */}
            <Text
              style={{
                fontWeight: "600",
                color: "#475569",
                marginTop: 24,
                marginBottom: 10,
              }}
            >
              CATEGORY
            </Text>

            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "#E2E8F0",
                borderRadius: 16,
                padding: 18,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 18 }}>{category}</Text>

              <Feather name="chevron-down" size={22} color="#475569" />
            </TouchableOpacity>

            {/* Goal */}
            <Text
              style={{
                fontWeight: "600",
                color: "#475569",
                marginTop: 24,
                marginBottom: 10,
              }}
            >
              DAILY GOAL
            </Text>

            <View
              style={{
                borderWidth: 1,
                borderColor: "#E2E8F0",
                borderRadius: 16,
                padding: 18,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => setGoal((prev) => (prev > 1 ? prev - 1 : 1))}
              >
                <Ionicons name="remove" size={34} color="#4F46E5" />
              </TouchableOpacity>

              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 42,
                    fontWeight: "700",
                  }}
                >
                  {goal}
                </Text>

                <Text
                  style={{
                    color: "#64748B",
                    marginTop: 4,
                  }}
                >
                  TIMES / DAY
                </Text>
              </View>

              <TouchableOpacity onPress={() => setGoal((prev) => prev + 1)}>
                <Ionicons name="add" size={34} color="#4F46E5" />
              </TouchableOpacity>
            </View>

            {/* Icons */}
            <Text
              style={{
                fontWeight: "600",
                color: "#475569",
                marginTop: 24,
                marginBottom: 16,
              }}
            >
              CHOOSE ICON
            </Text>

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              {icons.map((icon) => {
                const active = selectedIcon === icon;

                return (
                  <TouchableOpacity
                    key={icon}
                    onPress={() => setSelectedIcon(icon)}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 999,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: active ? "#4F46E5" : "#F1F5F9",
                    }}
                  >
                    <MaterialCommunityIcons
                      name={icon as any}
                      size={28}
                      color={active ? "#fff" : "#475569"}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>

          {/* Footer */}
          <View
            style={{
              flexDirection: "row",
              padding: 20,
              borderTopWidth: 1,
              borderTopColor: "#F1F5F9",
              backgroundColor: "#fff",
            }}
          >
            <TouchableOpacity
              onPress={onClose}
              style={{
                flex: 1,
                height: 58,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                }}
              >
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSave}
              style={{
                flex: 1.5,
                height: 58,
                backgroundColor: "#4F46E5",
                borderRadius: 16,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="save-outline" size={22} color="#fff" />

              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: "600",
                  marginLeft: 8,
                }}
              >
                Save Habit
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
}
