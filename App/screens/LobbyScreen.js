import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import StartButton from "../components/StartButton";
import Container from "../components/Container";

const LobbyScreen = ({ route, navigation }) => {
  const { name, code } = route.params;
  return (
    <Container>
      <View style={styles.header}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Kode</Text>
        <Text style={{ fontSize: 20, marginTop: "3%" }}>{code}</Text>
      </View>
      <View style={styles.screen}>
        <View style={styles.participants}>
          <Text style={{ fontSize: 25 }}>Deltakere:</Text>
          <Text style={{ fontSize: 25 }}>{name}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <StartButton>Lets go</StartButton>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "110%",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    width: "100%",
    height: 95,
    alignItems: "center",
    justifyContent: "center",
  },

  participants: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2%",
  },
});

export default LobbyScreen;
