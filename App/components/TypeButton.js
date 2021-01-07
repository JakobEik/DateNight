import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TypeButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress} style={[styles.button, props.style]}>
      <View>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 22,
    marginLeft: "5%",
    width: "40%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 13,
  },
});

export default TypeButton;
