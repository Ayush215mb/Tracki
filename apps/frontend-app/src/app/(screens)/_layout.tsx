import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Screenlayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="settings" />
      <Stack.Screen name="editProfile" />
      <Stack.Screen name="helpCentre" />
      <Stack.Screen name="achievements" />
      <Stack.Screen name="leaderboard" />
      <Stack.Screen name="privacyPolicy" />
    </Stack>
  );
};

export default Screenlayout;

const styles = StyleSheet.create({});
