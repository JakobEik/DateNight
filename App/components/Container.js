import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";

const Container = (props) => {
  return (
    <LinearGradient style={styles.gradient} colors={[colors.blue, colors.red]}>
      <SafeAreaView style={[styles.container, props.style]}>{props.children}</SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});

export default Container;
