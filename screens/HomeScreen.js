import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Animated, StatusBar, Alert } from "react-native";
import { TextInput } from "react-native";
import Header from "../components/Header";
import StartButton from "../components/StartButton";
import ClearButton from '../components/ClearButton';


const HomeScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [isPressed, setIsPressed] = useState("");
  
  let createJoin = "";

  const nameHandler = (inputText) => {
    setUserName(inputText);
  };
  const validSubmit = () => {
  navigation.navigate(createJoin, {
    name: userName,
  });
    setIsPressed("Not Pressed")
  }

  const clearField = () => {
    textInput.clear()
    setUserName("")
    }

  const invalidSubmit = () => {
    setIsPressed("Pressed");
    clearField()
    }

  const checkCreateSubmit = () => {
    createJoin = 'Create'
    if (userName.length < 2 || userName == '') {
    invalidSubmit();
      }
    else {
      validSubmit()
      }
    }
  const checkJoinSubmit = () => {
    createJoin = "Join";
    if (userName.length < 2 || userName == '') {
      invalidSubmit();
    }
    else {
      validSubmit()
      }
  }

  return (
    <View style={{backgroundColor: '#B9FBE0', height: '100%'}}>
      <Header title="DateNight" />
      <View style={styles.nameHolder}>
        <Text style={{ fontSize: 20 }}>Hei! Skriv inn navnet ditt:</Text>

        <TextInput
          style={[styles.input, {borderColor: isPressed == 'Pressed' && userName.length < 2 ? "#FF0017" : "#004DCF"}]}
          placeholder="Name here"
          onChangeText={nameHandler}
          value={userName}
          ref={input => {textInput = input}}
        />
        <View style={styles.clearButton}>
        <ClearButton onPress={clearField}>x</ClearButton>
        </View>
      </View>
      <View style={styles.text}>
        <Text style={{color: isPressed == 'Pressed' && userName.length < 2 ? "#FF0017" : '#B9FBE0' }}>Vennligst skriv navnet ditt</Text>
      </View>
      <View style={styles.textBtns}>
        <Text style={{ fontSize: 25 }}>Skal du lage eller bli med på date?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <StartButton
          onPress={checkCreateSubmit}
        >
          Lage min egen date
        </StartButton>
        <StartButton
          onPress={checkJoinSubmit}
        >
          Bli med på date
        </StartButton>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  text: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: '4%',
    marginTop: '3%'
  },
  textBtns: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: '1%',
    marginTop: '7%'
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
    marginTop: "1%",
  },
  nameHolder: {
    alignItems: "center",
    marginTop: "3%",
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: "2%",
    fontSize: 15,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",

  },
  clearButton: {
    marginLeft: '40%',
    marginTop: '-8%',
    color: '#004DCF'


  },

  
});

export default HomeScreen;
