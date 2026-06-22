import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-red-500 items-center justify-center">
      <Text className="text-white text-xl font-bold">NativeWind works!</Text>
      <View className="bg-blue-400 w-full">
        <Text className="text-2xl font-bold ">testing </Text>
        <Text className="text-xl font-bold">testing </Text>
      </View>
      <View className="bg-blue-500 w-full">
        <Text className="text-4xl font-bold ">testing </Text>
        <Text className="text-3xl font-bold">test </Text>
      </View>
    </View>
  );
}
