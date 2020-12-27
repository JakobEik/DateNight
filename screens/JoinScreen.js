import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const JoinScreen = ({navigation}) => {
  const name = navigation.state.params.name;
  return (
    <View style={styles.screen}>
      <Text>Hei, {name}!</Text>
      <Text>Write in the code</Text>
      <Button
        style={styles.btn}
        title="Lets go"
        onPress={() => {
          navigation.navigate("Lobby");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default JoinScreen;