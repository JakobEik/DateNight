import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import StartButton from "../components/StartButton";
import TypeButton from '../components/TypeButton';

class CreateScreen extends Component {
  static navigationOptions = {
    title: "CreateScreen",
  };
  render() {
    return (
      <View>
        <View style={styles.title}>
          <Text style={{ fontSize: 20}}>Hei, {this.props.navigation.state.params.nameOBJ}!</Text>
          <Text style={{ fontSize: 25 }}>
            Make your date here: 
          </Text>
        </View>
        <View style={styles.types}>
        <TypeButton>Singel</TypeButton>
        <TypeButton>Dama</TypeButton>
        <TypeButton>Guttakveld</TypeButton>
        </View>
        <View style={styles.buttonContainer}>
          <StartButton
            title="Lets go"
            onPress={() => {
              this.props.navigation.navigate("Lobby");
            }}
          >
            LETS GO
          </StartButton>
        </View>
      </View>
    );
  }
}

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
    margin: "2%",
    marginTop: "5%"
  }
});

export default CreateScreen;
