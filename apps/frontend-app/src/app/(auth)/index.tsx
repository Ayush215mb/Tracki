import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "expo-image";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import scheduleOnRN, { scheduleOnUI } from "react-native-worklets";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const Index = () => {
  const router = useRouter();
  const arrowTranslateX = useSharedValue(0);

  const arrowStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: arrowTranslateX.value }],
  }));

  const goNext = () => {
    console.log("buttn click");
    // router.push("/(auth)/login");
  };

  const onclick = () => {
    arrowTranslateX.value = withTiming(1000, { duration: 2000 }, (finished) => {
      if (finished) {
        goNext();
      }
    });
  };
  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={require("../../../assets/images/NoRisk-NoPorsche.jpeg")}
        imageStyle={{
          flex: 1,
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT * 0.95,
        }}
      >
        <View
          style={{ marginTop: SCREEN_HEIGHT * 0.5 }}
          className="items-center"
        >
          <CustomButton onpress={onclick}>
            <View className="flex flex-row items-center">
              <Text className="text-neutral-700 text-lg font-bold tracking-wider">
                Get Started
              </Text>
              <Animated.View style={arrowStyle}>
                <Ionicons name="arrow-forward-outline" size={20} />
              </Animated.View>
            </View>
          </CustomButton>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({});
