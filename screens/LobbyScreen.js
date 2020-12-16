import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const LobbyScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Choose your date</Text>
      <Button
        style={styles.btn}
        title="FUCK ME UP BABY"
        onPress={() => {
          props.navigation.navigate({ routename: "CreateScreen" });
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

export default LobbyScreen;