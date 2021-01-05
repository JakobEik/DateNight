import React, { useState } from "react";
import { Button, View, Text, StyleSheet, ImageBackground } from "react-native";
import { TextInput } from "react-native";
import StartButton from "../components/StartButton";

import colors from "../config/colors";

const HomeScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  let createJoin = "";

  const validSubmit = () => {
    navigation.navigate(createJoin, {
      name: userName,
    });
    setIsPressed(false);
  };

  const clearField = () => {
    textInput.clear();
    setUserName("");
  };

  const invalidSubmit = () => {
    setIsPressed(true);
    clearField();
  };

  const checkCreateSubmit = () => {
    createJoin = "Create";
    if (userName.length < 2 || userName == "") {
      invalidSubmit();
    } else {
      validSubmit();
    }
  };
  const checkJoinSubmit = () => {
    createJoin = "Join";
    if (userName.length < 2 || userName == "") {
      invalidSubmit();
    } else {
      validSubmit();
    }
  };

  return (
    <ImageBackground source={require("../assets/photos/bulbBackground.jpeg")} style={styles.background}>
      <View style={styles.textView}>
        <TextInput
          style={[styles.textInput, { borderColor: isPressed == true && userName.length < 2 ? "#FF0017" : "#004DCF" }]}
          placeholder="Navn"
          onChangeText={(input) => setUserName(input)}
          value={userName}
          clearButtonMode="while-editing"
          maxLength={20}
          textAlign="center"
          textContentType="nickname"
          ref={(input) => {
            textInput = input;
          }}
        />
      </View>

      <StartButton style={styles.btnCreate} onPress={checkCreateSubmit}>
        Lag en date
      </StartButton>

      <StartButton style={styles.btnJoin} onPress={checkJoinSubmit}>
        Bli med på date
      </StartButton>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  btnCreate: {
    marginTop: "50%",
  },

  btnJoin: {},

  textInput: {
    borderWidth: 1,
    width: "50%",
    height: 30,
    borderRadius: 5,
    fontSize: 20,
  },

  textView: {
    width: "100%",
    alignItems: "center",
    margin: "25%",
  },
});

export default HomeScreen;
