import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";

import StartButton from "../components/StartButton";
import TypeButton from "../components/TypeButton";
import Container from "../components/Container";
import colors from "../config/colors";
import mockdata from "../assets/data/mockdata";

const CreateScreen = ({ route, navigation }) => {
  const { creator } = route.params;
  const [typeOfDate, setTypeOfDate] = useState("");
  const [budget, setBudget] = useState("");
  const [startTime, setStartTime] = useState("17:00");

  const randomCode = () => {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i = 0; i < 5; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  };

  const theCode = randomCode();

  const date = {
    creator: creator,
    dateType: typeOfDate,
    budget: budget,
    startTime: startTime,
    code: theCode,
  };

  const whenPressed = () => {
    if (date.dateType == "") {
      Alert.alert("Obsobs", "Vennligst fyll ut alle feltene");
    } else {
      navigation.navigate("Lobby", { name: creator, code: theCode });
      console.log(date);
    }
  };

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={{ fontSize: 20 }}>Who you gonna date?</Text>
        </View>

        {/*prettier-ignore */}
        <View style={styles.types}>

          <TypeButton
            onPress={() => {setTypeOfDate("Singel");}}
            style={{backgroundColor: typeOfDate == "Singel" ? colors.red : colors.blue}}
            title="Random"
          />
          <TypeButton 
            onPress={() => {setTypeOfDate("Dama");}}
            style={{backgroundColor: typeOfDate == "Dama" ? colors.red : colors.blue}}
            title="Kjæresten"
          />

      </View>

        <View style={styles.textTime}>
          <Text style={{ fontSize: 20 }}>Startstidspunkt</Text>
        </View>

        <View style={styles.timeContainer}>
          <Picker
            selectedValue={startTime}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue) => setStartTime(itemValue)}
          >
            {mockdata.times.map((time) => (
              <Picker.Item label={time} value={time} />
            ))}
          </Picker>
        </View>

        <View style={styles.buttonContainer}>
          <StartButton title="Lets go" onPress={whenPressed}>
            LETS GO
          </StartButton>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignContent: "center",
  },
  timeContainer: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  textTime: {
    justifyContent: "center",
    alignItems: "center",
  },

  types: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
  },
});

export default CreateScreen;
