import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { TextInput } from "react-native-paper";
import StartButton from "../components/StartButton";
import Container from "../components/Container";

const JoinScreen = ({ route, navigation }) => {
  const name = route.params;
  const [userCode, setUserCode] = useState("");
  let approvedCode = 0;

  const inputHandler = (input) => {
    setUserCode(input);
  };

  const alertalert = () => {
    return Alert.alert("fack deg", "skriv riktig!!");
  };

  const invalidCode = () => {
    if (approvedCode > 0) {
      alertalert();
    }
  };

  const validCode = () => {
    if (userCode.length === 5 && approvedCode === 0) {
      navigation.navigate("Lobby", { name: name, code: userCode });
      console.log(approvedCode);
    } else {
      invalidCode();
    }
  };

  const validation = () => {
    let newCode = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ0123456789";
    for (let i = 0; i < userCode.length; i++) {
      if (possible.includes(userCode[i])) {
        newCode += userCode[i];
        approvedCode += 0;
      } else {
        newCode += userCode[i];
        approvedCode += 1;
      }
    }
    validCode();
    console.log(approvedCode);
    console.log(newCode);
  };

  return (
    <Container>
      <View style={styles.screen}>
        <View style={styles.text}>
          <Text style={{ fontSize: 25 }}>Hei {name}!</Text>
        </View>
        <View style={styles.codeHolder}>
          <Text style={{ fontSize: 20 }}>Skriv inn koden fra daten din her:</Text>
          <TextInput
            ref={(input) => {
              textInput = input;
            }}
            autoCapitalize="characters"
            style={styles.input}
            placeholder="Kode her"
            onChangeText={inputHandler}
            value={userCode}
          />
        </View>
        <View style={styles.buttonContainer}>
          <StartButton onPress={validation}>Gå til lobby</StartButton>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 150,
    height: 25,
    margin: "4%",
    backgroundColor: "#B9FBE0",
    padding: 10,
  },
  codeHolder: {
    alignItems: "center",
    marginTop: "5%",
    marginBottom: "5%",
  },
  screen: {
    height: "100%",
    backgroundColor: "#B9FBE0",
    alignItems: "center",
  },
  text: {
    margin: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginBottom: "7%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "60%",
  },
});

export default JoinScreen;
