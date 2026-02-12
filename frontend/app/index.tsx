import React from "react";
import { Screen } from "@/components/layout/Screen";
import {router} from "expo-router";
import SplashAnimation from "@/components/animation/SplashAnimation";
export default function Index() {

  return (
    <Screen className={""}>
      {/*<Text className={"text-white"}>Landing page</Text>*/}
      {/*<TouchableOpacity onPress={() => { router.push("/(tabs)/Completion") }}>*/}
      {/*  <Text className={"text-white"}>Go to Completions</Text>*/}
      {/*</TouchableOpacity>*/}
      <SplashAnimation onAnimationComplete={()=>{ router.push('/(tabs)/Completion') }}  />
    </Screen>
  );
}
