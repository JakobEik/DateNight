import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Dash from "react-native-dash";

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
      <View style={styles.container2}>
        <View style={styles.column1}>
          <Image style={styles.icon} source={require("../assets/icons/casualFin.png")} />
          <Dash style={styles.dash} dashGap={4} dashColor="grey" />
          <Image style={styles.icon} source={require("../assets/icons/casualFin.png")} />
          <Dash style={styles.dash} dashGap={4} dashColor="grey" />
          <Image style={styles.icon} source={require("../assets/icons/casualFin.png")} />
          <Dash style={styles.dash} dashGap={4} dashColor="grey" />
          <Image style={styles.icon} source={require("../assets/icons/casualFin.png")} />
          <Dash style={styles.dash} dashGap={4} dashColor="grey" />
          <Image style={styles.icon} source={require("../assets/icons/casualFin.png")} />
          <Dash style={styles.dash} dashGap={4} dashColor="grey" />
          <Image style={styles.icon} source={require("../assets/icons/casualFin.png")} />
        </View>

        <View style={styles.column2}>
          <View style={styles.categoryBox}>
            <Text style={styles.textHeader}>Outfit</Text>
            <Text style={styles.text}>{outfit}</Text>
          </View>

          <View style={styles.categoryBox}>
            <Text style={styles.textHeader}>Drikke</Text>
            <Text style={styles.text}>{drink}</Text>
          </View>

          <View style={styles.categoryBox}>
            <Text style={styles.textHeader}>Barer</Text>
            {bars.map((bar) => (
              <Text style={styles.text}>{bar}</Text>
            ))}
          </View>

          <View style={styles.categoryBox}>
            <Text style={styles.textHeader}>Restauranter</Text>
            {restaurants.map((restaurant) => (
              <Text>{restaurant}</Text>
            ))}
          </View>

          {!single ? (
            <View style={styles.categoryBox}>
              <Text style={styles.textHeader}>Sexposisjon</Text>
              <Text style={styles.text}>{sexPosition}</Text>
            </View>
          ) : (
            {}
          )}
        </View>

        <View style={styles.column3}></View>
      </View>
      <View style={styles.buttonContainer}>
        <StartButton style={styles.button} onPress={handlePress}>
          Generate
        </StartButton>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingBottom: "15%",
    alignSelf: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  categoryBox: {
    paddingBottom: 30,
    paddingTop: 5,
  },
  column1: {
    width: "13%",
    height: "100%",
    //backgroundColor: "pink",
    alignItems: "flex-start",
  },
  column2: {
    flex: 1,
    //backgroundColor: "yellow",
  },
  column3: {
    width: "13%",
    height: "100%",
    //backgroundColor: "pink",
  },
  container: {
    //backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
  },
  container2: {
    paddingTop: "15%",
    flexDirection: "row",
    flex: 3,
  },
  dash: {
    flexDirection: "column",
    height: 30,
    borderRadius: 100,
    paddingLeft: 12,
  },
  icon: {
    marginVertical: "10%",
    width: 27,
    height: 35,
  },
  text: {
    fontSize: 14,
  },
  textHeader: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GenerateScreen;
