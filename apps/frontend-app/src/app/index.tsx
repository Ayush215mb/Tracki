import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1  items-center justify-center">
      <TouchableOpacity onPress={() => router.push("/(auth)")}>
        <Text className="text-xl font-bold">go to auth</Text>
      </TouchableOpacity>
    </View>
  );
}
