import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import StartButton from "../components/StartButton";
import TypeButton from "../components/TypeButton";
import { Picker } from "@react-native-picker/picker";
import ClearButton from "../components/ClearButton";

const CreateScreen = ({ navigation }) => {
  const creator = navigation.state.params.name;
  const [typeOfDate, setTypeOfDate] = useState("");
  const [budget, setBudget] = useState("");
  const [startTime, setStartTime] = useState("17:00");

  const randomCode = () => {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ0123456789";
    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
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

  const informationTypeHandler = () => {
    Alert.alert(
      "Type",
      "Singel: Daten for dere som skal møtes for første gang. \n \nDama: Daten for dere allerede i et forhold som vil ha gnisten tilbake. \n \nGutta: Når gutta trenger en dag med gutta"
    );
  };

  const informationBudgetHandler = () => {
    Alert.alert(
      "Budsjett",
      "Lavt: Daten for dere sliter med å få studentbudsjettet til å gå rundt. Men daten blir like bra! \n \nMiddels: For dere som nettopp har fått stipend og vil bruke det fornuftig. \n \nHøyt: Når pappa betaler"
    );
  };

  const validation = () => {
    if (date.dateType == "" || date.budget == "") {
      Alert.alert("Obsobs", "Vennligst fyll ut alle feltene");
    } else {
      navigation.navigate("Lobby", { creator: creator, code: theCode });
      console.log(date);
    }
  };

  const whenPressed = () => {
    validation();
  };

  return (
    <View style={{ backgroundColor: "#B9FBE0" }}>
      <View style={styles.title}>
        <Text style={{ fontSize: 25 }}>Lag daten din her {creator}</Text>
      </View>
      <View style={styles.text}>
        <Text style={{ fontSize: 20 }}>Velg hva slags date du skal på:</Text>
      </View>
      <View style={styles.types}>
        <TypeButton
          onPress={() => {
            setTypeOfDate("Singel");
          }}
          style={{
            backgroundColor: typeOfDate == "Singel" ? "#E91E63" : "#03A9F4",
          }}
        >
          Singel
        </TypeButton>
        <TypeButton
          onPress={() => {
            setTypeOfDate("Dama");
          }}
          style={{
            backgroundColor: typeOfDate == "Dama" ? "#E91E63" : "#03A9F4",
          }}
        >
          Dama
        </TypeButton>
        <TypeButton
          onPress={() => {
            setTypeOfDate("Gutta");
          }}
          style={{
            backgroundColor: typeOfDate == "Gutta" ? "#E91E63" : "#03A9F4",
          }}
        >
          
          Gutta
        </TypeButton>
        <View style={styles.informationBox}>
          <ClearButton onPress={informationTypeHandler}>?</ClearButton>
        </View>
      </View>
      <View style={styles.textBudget}>
        <Text style={{ fontSize: 20 }}>Velg budsjett:</Text>
      </View>
      <View style={styles.budget}>
        <TypeButton
          onPress={() => {
            setBudget("Low");
          }}
          style={{ backgroundColor: budget == "Low" ? "#F78DA7" : "#7BDCB5" }}
        >
          Lavt
        </TypeButton>
        <TypeButton
          onPress={() => {
            setBudget("Medium");
          }}
          style={{
            backgroundColor: budget == "Medium" ? "#F78DA7" : "#7BDCB5",
          }}
        >
          Middels
        </TypeButton>
        <TypeButton
          onPress={() => {
            setBudget("High");
          }}
          style={{ backgroundColor: budget == "High" ? "#F78DA7" : "#7BDCB5" }}
        >
          Ballers
        </TypeButton>
        <View style={styles.informationBox}>
          <ClearButton onPress={informationBudgetHandler}>?</ClearButton>
        </View>
      </View>
      <View style={styles.textTime}>
        <Text style={{ fontSize: 20 }}>Velg startstidspunkt:</Text>
      </View>

      <View style={styles.container}>
        <Picker
          selectedValue={startTime}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue) => setStartTime(itemValue)}
        >
          <Picker.Item label="17:00" value="17:00" />
          <Picker.Item label="17:30" value="17:30" />
          <Picker.Item label="18:00" value="18:00" />
          <Picker.Item label="18:30" value="18:30" />
          <Picker.Item label="19:00" value="19:00" />
          <Picker.Item label="19:30" value="19:30" />
          <Picker.Item label="20:00" value="20:00" />
          <Picker.Item label="20:30" value="20:30" />
          <Picker.Item label="21:00" value="21:00" />
        </Picker>
      </View>
      <View style={styles.buttonContainer}>
        <StartButton title="Lets go" onPress={whenPressed}>
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
    marginBottom: "4%",
  },
  buttonContainer: {
    marginBottom: "7%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1%",
  },
  text: {
    justifyContent: "center",
    margin: "3%",
    alignItems: "center",
  },
  types: {
    flex: 1,
    flexDirection: "row",
    marginTop: "5%",
    marginRight: "1%",
  },
  budget: {
    flex: 1,
    flexDirection: "row",
    marginBottom: "10%",
    marginTop: "-18%",
  },
  textBudget: {
    justifyContent: "center",
    marginTop: "18%",
    marginBottom: "23%",
    alignItems: "center",
  },
  textTime: {
    justifyContent: "center",
    marginTop: "10%",
    marginBottom: "-7%",
    alignItems: "center",
  },
  container: {
    flex: 1,
    marginBottom: "50%",
    alignItems: "center",
  },
  informationBox: {
    marginTop: "5%",
    marginLeft: "3%",
  },
});

export default CreateScreen;
