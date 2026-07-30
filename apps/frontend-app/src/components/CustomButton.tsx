import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React from "react";
import { GlassView } from "expo-glass-effect";

const CustomButton = ({
  children,
  onpress,
  title,
  extraCN,
}: {
  children?: React.ReactNode;
  onpress?: () => void;
  title?: string;
  extraCN?: string;
}) => {
  if (title)
    return (
      <TouchableOpacity className="md:px-4 md:py-2 p-2 border border-neutral-700 rounded-l-lg hover:bg-neutral-700 hover:border-white cursor-pointer flex gap-2 hover:scale-105 ">
        <Text>{title}</Text>
      </TouchableOpacity>
    );

  if (children) {
    return (
      <TouchableOpacity className={`  `} onPress={onpress}>
        <GlassView
          style={styles.glassView}
          isInteractive
          glassEffectStyle={{
            style: "clear",
            animate: true,
            animationDuration: 0.5,
          }}
        >
          <View>{children}</View>
        </GlassView>
      </TouchableOpacity>
    );
  }
};

export default CustomButton;

const styles = StyleSheet.create({
  glassView: {
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    paddingBlock: 12,
    paddingInline: 32,
  },
});
