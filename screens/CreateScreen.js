import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StartButton from "../components/StartButton";

const CreateScreen = (props) => {

  return (
    <View>
      <View style={styles.title}>
        <Text style={{ fontSize: 25 }}>Make your date! </Text>
      </View>
      <View style={styles.button}>
        <StartButton
          
          title="Lets go"
          onPress={() => {
            props.navigation.navigate("Lobby");
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
    marginTop: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginBottom: "3%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "110%",
  },
});

export default CreateScreen;
