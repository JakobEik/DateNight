import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00D084",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: "10%",
    marginTop: '10%',
    width: 250,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});

export default MainButton;
