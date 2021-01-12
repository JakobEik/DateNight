import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native";

import StartButton from "../components/StartButton";
import Container from "../components/Container";

const HomeScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  const validSubmit = () => {
    console.log(userName);
    navigation.navigate("Create", {
      creator: userName,
    });
    setIsPressed(false);
  };

  const invalidSubmit = () => {
    setIsPressed(true);
    setUserName("");
  };

  const checkCreateSubmit = () => {
    if (userName.length < 1 || userName == "") {
      invalidSubmit();
    } else {
      navigation.navigate("Create", {
        creator: userName,
      });
      setIsPressed(false);
    }
  };
  const checkJoinSubmit = () => {
    if (userName.length < 2 || userName == "") {
      invalidSubmit();
    } else {
      navigation.navigate("Lobby", {
        name: userName,
        // code er bare placeholder foreløpig
        code: "SKFHE",
      });
      setIsPressed(false);
    }
  };

  return (
    <Container style={styles.container}>
      <View>
        <Text>Logo placeholder</Text>
      </View>

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
        />
      </View>

      <StartButton style={styles.btnCreate} onPress={checkCreateSubmit}>
        Lag en date
      </StartButton>

      {/* <StartButton onPress={checkJoinSubmit}>Bli med på date</StartButton>*/}
    </Container>
  );
};

const styles = StyleSheet.create({
  btnCreate: {
    marginTop: "0%",
  },
  container: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  textInput: {
    borderWidth: 1,
    width: "50%",
    height: 30,
    borderRadius: 15,
    fontSize: 20,
  },
  textView: {
    width: "100%",
    alignItems: "center",
    margin: "0%",
  },
});

export default HomeScreen;
