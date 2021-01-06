import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import StartButton from "../components/StartButton";
import Container from "../components/Container";

const LobbyScreen = ({ route, navigation }) => {
  const { name, code } = route.params;
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.code}>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Kode</Text>
            <Text style={{ fontSize: 20, marginTop: "4%" }}>{code}</Text>
          </View>

          <View style={styles.participants}>
            <Text style={{ fontSize: 25 }}>Deltakere:</Text>
            <Text style={{ fontSize: 25 }}>{name}</Text>
          </View>
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
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: "15%",
  },

  code: {
    flex: 2,
    justifyContent: "center",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  header: {
    flex: 3,
    height: 95,
    alignItems: "center",
    justifyContent: "center",
  },

  participants: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 4,
  },
});

export default LobbyScreen;
