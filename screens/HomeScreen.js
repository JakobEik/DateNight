import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Header from "../components/Header";
import StartButton from "../components/StartButton";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "HomeScreen",
  };
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
    };
  }
  send_data_create = () => {
    this.props.navigation.navigate("Create", {
      nameOBJ: this.state.userName,
    });
  };
  send_data_join = () => {
    this.props.navigation.navigate("Join", {
      nameOBJ: this.state.userName,
    });
  };
  

  render() {
    return (
      <View>
        <Header title="DateNight" />
        <View style={styles.nameHolder}>
          <Text style={{ fontSize: 20 }}>Please write your name</Text>
          <TextInput
            style={styles.input}
            placeholder="Name here"
            onChangeText={(inputText) => this.setState({ userName: inputText })}
          />
        </View>
        <View style={styles.text}>
          <Text style={{ fontSize: 25 }}>Choose your date</Text>
        </View>
        <View style={styles.buttonContainer}>
          <StartButton
            onPress={this.send_data_create}
          >
            Create your own date
          </StartButton>
          <StartButton
            onPress={this.send_data_join}
          >
            Join date
          </StartButton>
        </View>
      </View>
    );
  }
}

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
    alignItems: "center",
    marginTop: "3%",
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: "#009CE0",
    marginTop: "2%",
    fontSize: 15,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
