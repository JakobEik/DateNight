import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import StartButton from "../components/StartButton";
import TypeButton from "../components/TypeButton";

const CreateScreen = ({ navigation }) => {
  const name = navigation.state.params.name;
  const [typeOfDate, setTypeOfDate] = useState("");

  return (
    <View>
      <View style={styles.title}>
        <Text style={{ fontSize: 20 }}>Hei, {name}!</Text>
        <Text style={{ fontSize: 25 }}>Make your date here:</Text>
      </View>
      <View style={styles.types}>
        <TypeButton
          onPress={() => {
            setTypeOfDate("Singel");
          }}
          style={{ backgroundColor: typeOfDate == "Singel" ? "#E91E63" : "#03A9F4"}}
        >
          Singel
        </TypeButton>
        <TypeButton
          onPress={() => {
            setTypeOfDate("Dama");
          }}
          style={{ backgroundColor: typeOfDate == "Dama" ? "#E91E63" : "#03A9F4"}}
        >
          Dama
        </TypeButton>
        <TypeButton
          onPress={() => {
            setTypeOfDate("Gutta");
          }}
          style={{ backgroundColor: typeOfDate == "Gutta" ? "#E91E63" : "#03A9F4" }}
        >
          Gutta
        </TypeButton>
      </View>
      <View style={styles.buttonContainer}>
        <StartButton
          title="Lets go"
          onPress={() => {
            console.log(typeOfDate);
          }}
        >
          LETS GO
        </StartButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: "2%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginBottom: "5%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40%",
  },
  types: {
    flex: 1,
    flexDirection: "row",
    marginTop: "5%",
  },
});

export default CreateScreen;
