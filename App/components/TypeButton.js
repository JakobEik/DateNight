import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TypeButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress} style={[styles.button, props.style]}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 22,
  },
  buttonText: {
    color: "black",
    fontSize: 13,
    textAlign: "center",
  },
});

export default TypeButton;
