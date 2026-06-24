import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Tablayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Tablayout;

const styles = StyleSheet.create({});
