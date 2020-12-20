import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import Header from "../components/Header";
import StartButton from "../components/StartButton";


const HomeScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");

  const nameHandler = (inputText) => {
    setUserName(inputText);
  };

  const invalidSubmit = () => {
      Alert.alert('Skjerpings', 'Pls skriv navnet ditt først')

  }
  const validSubmit = () => {
    navigation.navigate("Create", {
      name: userName,
    });
  }
  const checkSubmit = () => {
    if (userName.length < 2) {
      invalidSubmit();
    }
    else {
      validSubmit()
    }
  }

  return (
    <View>
      <Header title="DateNight" />
      <View style={styles.nameHolder}>
        <Text style={{ fontSize: 20 }}>Please write your name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name here"
          onChangeText={nameHandler}
          value={userName}
        />
      </View>
    
      <View style={styles.text}>
        <Text style={{ fontSize: 25 }}>Choose your date</Text>
      </View>
      <View style={styles.buttonContainer}>
        <StartButton
          onPress={checkSubmit}
        >
          Create your own date
        </StartButton>
        <StartButton
          onPress={() => {
            navigation.navigate("Join", {
              name: username,
            });
          }}
        >
          Join date
        </StartButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15%",
  },
  screen: {
    flex: 1,
    backgroundColor: "#8ED1FC",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3%",
  },
  nameHolder: {
    alignItems: "center",
    marginTop: "3%",
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: "#009CE0",
    marginTop: "2%",
    fontSize: 15,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },

  invalidInput: { 
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: "#D32F2F",
    marginTop: "2%",
    fontSize: 15,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
