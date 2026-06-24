import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";

export default function EditProfileScreen() {
  const [name, setName] = useState("Ayush Sharma");
  const [email, setEmail] = useState("ayush@example.com");
  const [bio, setBio] = useState(
    "Focusing on 1% better every day. Avid runner and productivity enthusiast.",
  );

  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
  );

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    console.log({
      name,
      email,
      bio,
      profileImage,
    });

    // Save to Firebase / Supabase / Backend
  };

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
            <Ionicons name="arrow-back" size={30} color="#1E293B" />
          </TouchableOpacity>

          <View className="flex-1 items-center mr-8">
            <Text className="text-[28px] font-bold text-indigo-600">
              Edit Profile
            </Text>
          </View>
        </View>

        {/* Profile Image */}
        <View className="items-center mt-8">
          <View className="relative">
            <Image
              source={{ uri: profileImage }}
              className="h-48 w-48 rounded-full"
            />

            <TouchableOpacity
              onPress={pickImage}
              className="absolute bottom-2 right-2 h-14 w-14 rounded-full bg-indigo-600 items-center justify-center shadow-lg"
            >
              <Feather name="edit-2" size={22} color="white" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={pickImage}>
            <Text className="mt-6 text-slate-500 text-xl">
              Tap to change profile picture
            </Text>
          </TouchableOpacity>
        </View>

        {/* Form */}
        <View className="px-6 mt-12">
          {/* Full Name */}
          <Text className="text-slate-700 font-semibold text-xl mb-3">
            Full Name
          </Text>

          <View className="flex-row items-center border border-slate-200 rounded-3xl px-5 py-5 bg-white">
            <Ionicons name="person-outline" size={28} color="#6B7280" />

            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
              className="flex-1 ml-4 text-[18px] text-slate-800"
            />
          </View>

          {/* Email */}
          <Text className="text-slate-700 font-semibold text-xl mt-10 mb-3">
            Email Address
          </Text>

          <View className="flex-row items-center border border-slate-200 rounded-3xl px-5 py-5 bg-white">
            <Ionicons name="mail-outline" size={28} color="#6B7280" />

            <TextInput
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholder="Enter email"
              className="flex-1 ml-4 text-[18px] text-slate-800"
            />
          </View>

          {/* Bio */}
          <Text className="text-slate-700 font-semibold text-xl mt-10 mb-3">
            Bio
          </Text>

          <View className="border border-slate-200 rounded-3xl bg-white p-5">
            <TextInput
              value={bio}
              onChangeText={setBio}
              multiline
              maxLength={150}
              textAlignVertical="top"
              placeholder="Tell us about yourself..."
              className="text-[18px] text-slate-800 min-h-[180px]"
            />
          </View>

          <View className="items-end mt-2">
            <Text className="text-slate-400 text-lg">{bio.length}/150</Text>
          </View>

          {/* Divider */}
          <View className="h-[1px] bg-slate-200 mt-12" />

          {/* Save Button */}
          <TouchableOpacity
            onPress={handleSave}
            className="mt-10 bg-indigo-600 rounded-3xl h-20 items-center justify-center flex-row"
          >
            <Ionicons name="save-outline" size={28} color="white" />

            <Text className="text-white text-[22px] font-semibold ml-3">
              Save Changes
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
