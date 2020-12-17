import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Header from "../components/Header";
import StartButton from "../components/StartButton";

const HomeScreen = (props) => {
  const [userName, setUserName] = useState("");

  const nameHandler = (inputText) => {
    setUserName(inputText);
  };

  return (
    <View>
      <Header title="DateNight" />
      <View style={styles.nameHolder}>
        <Text style={{fontSize: 20}}>Please write your name</Text>
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
          onPress={() => {
            props.navigation.navigate("Create");
          }}
        >
          Create your own date
        </StartButton>
        <StartButton
          onPress={() => {
            props.navigation.navigate("Join");
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
    alignItems: 'center',
    marginTop: "3%"
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: '#009CE0',
    marginTop: "2%",
    fontSize: 15,
    width: "50%",
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default HomeScreen;
