import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../config/colors";

const MainButton = (props) => {
  return (
    <TouchableOpacity style={props.style} activeOpacity={0.8} onPress={props.onPress}>
      <LinearGradient style={styles.button} colors={[colors.darkest, colors.red]}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    borderRadius: 35,
    width: 250,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});

export default MainButton;
