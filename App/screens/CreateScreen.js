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
  const [category, setCategory] = useState("");
  const [startTime, setStartTime] = useState("17:00");

  const randomCode = () => {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i = 0; i < 5; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  };

  const theCode = randomCode();

  const whenPressed = () => {
    let single;
    if (typeOfDate === "" || category === "") {
      Alert.alert("Obsobs", "Vennligst fyll ut alle feltene");
    } else {
      if (category === "halfPlan") {
        typeOfDate === "Singel" ? (single = true) : (single = false);
        navigation.navigate("Generate", {
          name: creator,
          isSingle: single,
          numberOfBars: 3,
          numberOfRestaurants: 1,
          hasDrink: true,
          hasOutfit: true,
          startTime: startTime,
        });
      }

      //console.log(date);
    }
  };

  return (
    <Container>
      <View style={styles.text}>
        <Text style={{ fontSize: 20 }}>Who you gonna date?</Text>
      </View>

      {/*prettier-ignore */}
      <View style={styles.whoDate}>
        <TypeButton
          onPress={() => {setTypeOfDate("Singel");}}
          style={{backgroundColor: typeOfDate == "Singel" ? colors.red : colors.blue, width: "40%", height: "20%"}}
          title="Random"
        />
        <TypeButton 
          onPress={() => {setTypeOfDate("Dama");}}
          style={{backgroundColor: typeOfDate == "Dama" ? colors.red : colors.blue, width: "40%", height: "20%"}}
          title="Kjæresten"
        />
      </View>
      {/*prettier-ignore */}
      <View style={styles.category}>
        <TypeButton 
          onPress={() => {setCategory("fullPlan")}}
          style={{ backgroundColor: category == "fullPlan" ? colors.red : colors.blue, width: "25%", height: "45%"}}
          title="FullPlan"
        />
        <TypeButton 
          onPress={() => {setCategory("halfPlan")}}
          style={{ backgroundColor: category == "halfPlan" ? colors.red : colors.blue, width: "25%", height: "45%"}}
          title="halfPlan"
        />
        <TypeButton 
          onPress={() => {setCategory("noPlan")}}
          style={{ backgroundColor: category == "noPlan" ? colors.red : colors.blue, width: "25%", height: "45%"}}
          title="noPlan"        
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
          {mockdata.timesHalf.map((time) => (
            <Picker.Item label={time} value={time} />
          ))}
        </Picker>
      </View>

      <View style={styles.buttonContainer}>
        <StartButton title="Lets go" onPress={whenPressed}>
          LETS GO
        </StartButton>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
  },
  category: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
  },

  timeContainer: {
    flex: 3,
    alignItems: "center",
  },
  text: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },

  textTime: {
    justifyContent: "center",
    alignItems: "center",
  },

  whoDate: {
    flexDirection: "row",
    flex: 3,
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default CreateScreen;
