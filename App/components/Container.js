import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";

const Container = ({ children }) => {
  return (
    <LinearGradient style={styles.gradient} colors={[colors.blue, colors.red]}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  gradient: {
    flex: 1,
  },
});

export default Container;
