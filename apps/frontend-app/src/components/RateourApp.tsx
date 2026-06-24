import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface RateAppModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit?: (rating: number, feedback: string) => void;
}

export default function RateAppModal({
  visible,
  onClose,
  onSubmit,
}: RateAppModalProps) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    onSubmit?.(rating, feedback);

    setRating(0);
    setFeedback("");
    onClose();
  };

  const handleLater = () => {
    setRating(0);
    setFeedback("");
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      <View className="flex-1 bg-black/30 justify-center px-6">
        <View className="bg-white rounded-[32px] overflow-hidden">
          {/* Top Section */}
          <View className="h-52 bg-indigo-100 items-center justify-center">
            <View className="h-28 w-28 rounded-full bg-white items-center justify-center shadow-lg">
              <Ionicons name="heart-outline" size={52} color="#4F46E5" />
            </View>
          </View>

          {/* Content */}
          <View className="px-8 py-8">
            <Text className="text-center text-5xl font-bold text-slate-900">
              Enjoying HabitFlow?
            </Text>

            <Text className="text-center text-slate-500 text-xl leading-9 mt-4">
              Your feedback helps us create a better experience for you and
              others building effortless momentum.
            </Text>

            {/* Rating */}
            <View className="flex-row justify-center mt-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity
                  key={star}
                  onPress={() => setRating(star)}
                  className="mx-2"
                >
                  <Ionicons
                    name={star <= rating ? "star" : "star-outline"}
                    size={38}
                    color={star <= rating ? "#F59E0B" : "#C7C4E4"}
                  />
                </TouchableOpacity>
              ))}
            </View>

            {/* Feedback */}
            <TextInput
              multiline
              numberOfLines={4}
              value={feedback}
              onChangeText={setFeedback}
              placeholder="Tell us what you love or what we could improve (optional)..."
              placeholderTextColor="#64748B"
              textAlignVertical="top"
              className="border border-indigo-200 rounded-2xl px-5 py-5 text-lg text-slate-800 mt-8 h-36"
            />

            {/* Later Button */}
            <TouchableOpacity
              onPress={handleLater}
              className="h-16 bg-slate-100 rounded-2xl items-center justify-center mt-8"
            >
              <Text className="text-slate-500 text-2xl font-semibold">
                Later
              </Text>
            </TouchableOpacity>

            {/* Submit Button */}
            <TouchableOpacity
              onPress={handleSubmit}
              className="h-16 bg-indigo-600 rounded-2xl items-center justify-center mt-5 shadow-lg"
            >
              <Text className="text-white text-2xl font-bold">Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
