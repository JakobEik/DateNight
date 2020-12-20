import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TypeButton = (props) => {

 
  return (
    <TouchableOpacity activeOpacity={0.2} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00BCD4",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 25,
    marginLeft: "17%",
    width: '80%',
    height: 65,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: "white",
    fontSize: 13,
  },
  buttonPressed: {
    backgroundColor: "#D32F2F",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 25,
    marginLeft: "17%",
    width: '80%',
    height: 65,
    alignItems: 'center',
    justifyContent: 'center'
  },


});

export default TypeButton;
