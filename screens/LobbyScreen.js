import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import StartButton from "../components/StartButton";


const LobbyScreen = ({navigation}) => {
  const code = navigation.state.params.code;
  const name = navigation.state.params.name;
  return (
    <View>
    <View style={styles.header}>
      <Text style={{fontSize: 25, fontWeight: 'bold'}}>Kveldens date</Text>
      <Text style={{fontSize: 20, marginTop: '3%'}}>{code}</Text>
    </View>
    <View style={styles.screen}>
      <View style={styles.participants}>
      <Text style={{fontSize: 25}}>Deltakere:</Text>
      </View>
      <View style={styles.names}>
      <Text style={{fontSize: 25}}>{name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <StartButton>Lets go</StartButton>
      </View>
    </View>
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
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '110%'
    },
    header: {
      width: '100%',
      height: 95,
      backgroundColor: '#03A9F4',
      alignItems: 'center',
      justifyContent: 'center'
    },
    participants: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '2%'
    },
    names: {
      
      flexDirection: 'row',
      marginTop: '10%',
      marginLeft: '5%'
    }
  });

export default LobbyScreen;