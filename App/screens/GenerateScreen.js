import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import StartButton from "../components/StartButton";
import Container from "../components/Container";
import mockdata from "../assets/data/mockdata";

const GenerateScreen = ({ route }) => {
  const chooseOutfit = () => {
    let randomChoice = Math.floor(Math.random() * mockdata.outfits.length);
    return mockdata.outfits[randomChoice];
  };

  const chooseDrink = () => {
    let randomChoice = Math.floor(Math.random() * mockdata.drinks.length);
    return mockdata.drinks[randomChoice];
  };

  const chooseBars = (nrOfBars) => {
    let theBars = [];
    let i = 0;
    let bar = "";
    while (i < nrOfBars) {
      let randomChoice = Math.floor(Math.random() * mockdata.bars.length);
      bar = mockdata.bars[randomChoice];
      if (!theBars.includes(bar)) {
        theBars.push(bar);
        i++;
      }
    }
    return theBars;
  };

  const chooseRestaurants = (nrOfRestaurants) => {
    let theRestaurants = [];
    let i = 0;
    let restaurant = "";
    while (i < nrOfRestaurants) {
      let randomChoice = Math.floor(Math.random() * mockdata.restaurants.length);
      restaurant = mockdata.restaurants[randomChoice];
      if (!theRestaurants.includes(restaurant)) {
        theRestaurants.push(restaurant);
        i++;
      }
    }
    return theRestaurants;
  };

  const chooseSexPosition = () => {
    let randomChoice = Math.floor(Math.random() * mockdata.sexpositions.length);
    return mockdata.sexpositions[randomChoice];
  };
  const { name, single } = route.params;
  const [numberOfBars, setNumberOfBars] = useState(2);
  const [numberOfRestaurants, setNumberOfRestaurants] = useState(1);
  const [outfit, setOutfit] = useState(() => chooseOutfit());
  const [drink, setDrink] = useState(() => chooseDrink());
  const [bars, setBars] = useState(() => chooseBars(numberOfBars));
  const [restaurants, setRestaurants] = useState(() => chooseRestaurants(numberOfRestaurants));
  const [sexPosition, setSexPosition] = useState(() => chooseSexPosition());

  const handlePress = () => {
    setOutfit(chooseOutfit);
    setDrink(chooseDrink);
    setBars(chooseBars(numberOfBars));
    setRestaurants(chooseRestaurants(numberOfRestaurants));
    setSexPosition(chooseSexPosition);
    console.log(outfit, drink, bars, restaurants, sexPosition);
  };

  return (
    <Container style={styles.container}>
      {/*prettier-ignore */}

      <Text>{outfit}</Text>
      <Text>{drink}</Text>
      {bars.map((bar) => (
        <Text>{bar}</Text>
      ))}
      {restaurants.map((restaurant) => (
        <Text>{restaurant}</Text>
      ))}
      {!single ? <Text>{sexPosition}</Text> : <Text />}

      <View style={styles.buttonContainer}>
        <StartButton style={styles.button} onPress={handlePress}>
          Generate
        </StartButton>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  button: {
    paddingBottom: "15%",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default GenerateScreen;
