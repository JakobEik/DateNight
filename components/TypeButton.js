import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TypeButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.onPress}
      style={[styles.button, props.style]}
    >
      <View>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 1,
    borderRadius: 25,
    marginLeft: "7%",
    width: "24%",
    height: 65,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 13,
  },
});

export default TypeButton;

/*
({ pressed }) => [
    {
      backgroundColor: pressed
        ? "#D32F2F"
        : "#00BCD4"
    }, styles.button]
    */
