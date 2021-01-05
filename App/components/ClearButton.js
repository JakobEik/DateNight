import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ClearButton = (props) => {
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
      borderRadius: 100,
      height: 19,
      width: 19,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#004DCF',
      overflow: 'hidden',
      borderWidth: 1

    },
    buttonText: {
      color: "black",
      fontSize: 13,
    },
  });
  
  export default ClearButton;
  
  