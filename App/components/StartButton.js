import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

const MainButton = (props) => {
  return (
    <TouchableOpacity style={props.style} activeOpacity={0.8} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.darkest,
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
