import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Dash from "react-native-dash";

import StartButton from "../components/StartButton";
import Container from "../components/Container";
import mockdata from "../assets/data/mockdata";
import colors from "../config/colors";

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

  const { name, isSingle, numberOfBars, numberOfRestaurants, hasDrink, hasOutfit, startTime } = route.params;
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
    //console.log(outfit, drink, bars, restaurants, sexPosition);
  };

  return (
    <Container style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Header</Text>
      </View>

      <View style={[styles.row, { flex: 1.5, alignItems: "center" }]}>
        {hasOutfit ? (
          <View style={styles.row}>
            <View style={hasDrink ? styles.columnBothOutfitAndDrink : styles.column1}>
              <Image style={[styles.icon, { marginTop: 20 }]} source={require("../assets/icons/casualFin.png")} />
            </View>

            <View style={styles.column2}>
              <Text style={styles.textHeader2}>Outfit</Text>
              <Text style={styles.text}>{outfit}</Text>
            </View>
          </View>
        ) : null}

        {hasDrink ? (
          <View style={[styles.row, hasOutfit ? { paddingLeft: 40 } : null]}>
            <View style={hasOutfit ? styles.columnBothOutfitAndDrink : styles.column1}>
              <Image style={[styles.icon, { marginTop: 20 }]} source={require("../assets/icons/casualFin.png")} />
            </View>

            <View style={styles.column2}>
              <Text style={hasOutfit ? styles.textHeader2 : styles.textHeader}>Drikke</Text>
              <Text style={styles.text}>{drink}</Text>
            </View>
          </View>
        ) : null}
      </View>

      {numberOfBars > 0 ? (
        <View style={{ flex: numberOfBars }}>
          <Text style={styles.textHeader}>Barer</Text>

          {bars.map((bar) => (
            <View style={styles.row}>
              <View style={styles.column1}>
                <Image style={styles.icon} source={require("../assets/icons/casualFin.png")} />
                <Dash style={styles.dash} dashGap={4} dashColor="grey" />
              </View>

              <View style={styles.column2}>
                <Text style={styles.text}>{bar}</Text>
              </View>

              <View style={styles.column3}>
                <Text style={styles.text}>{startTime}</Text>
              </View>
            </View>
          ))}
        </View>
      ) : null}
      {numberOfRestaurants > 0 ? (
        <View style={{ flex: numberOfRestaurants }}>
          <Text style={styles.textHeader}>Restauranter</Text>
          {restaurants.map((restaurant) => (
            <View style={styles.row}>
              <View style={styles.column1}>
                <Image style={styles.icon} source={require("../assets/icons/casualFin.png")} />
                <Dash style={styles.dash} dashGap={4} dashColor="grey" />
              </View>

              <View style={styles.column2}>
                <Text style={styles.text}>{restaurant}</Text>
              </View>

              <View style={styles.column3}>
                <Text style={styles.text}>{startTime}</Text>
              </View>
            </View>
          ))}
        </View>
      ) : null}

      {!isSingle ? (
        <>
          <Text style={styles.textHeader}>Sexposisjon</Text>
          <View style={styles.row}>
            <View style={styles.column1}>
              <Image style={styles.icon} source={require("../assets/icons/casualFin.png")} />
            </View>

            <View style={styles.column2}>
              <Text style={styles.text}>{sexPosition}</Text>
            </View>

            <View style={styles.column3}></View>
          </View>
        </>
      ) : null}

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
    paddingBottom: "10%",
    alignSelf: "center",
  },
  buttonContainer: {
    flex: 2,
    justifyContent: "center",
    //backgroundColor: "brown",
  },
  column1: {
    width: "13%",
    height: "100%",
    //backgroundColor: colors.blue,
    alignItems: "flex-start",
  },
  column2: {
    flex: 1,
    //backgroundColor: "yellow",
  },
  column3: {
    width: "13%",
    height: "100%",
    //backgroundColor: colors.red,
    alignItems: "flex-end",
  },
  columnBothOutfitAndDrink: {
    width: "26%",
    height: "100%",
    //backgroundColor: colors.blue,
    alignItems: "flex-start",
  },
  container: {
    width: "90%",
    alignSelf: "center",
  },
  dash: {
    flexDirection: "column",
    height: "100%",
    borderRadius: 100,
    paddingLeft: 12,
  },
  header: {
    width: "100%",
    height: "5%",
    //backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginBottom: "5%",
    width: 27,
    height: 35,
  },
  row: {
    flexDirection: "row",
    flex: 1,
  },
  text: {
    fontSize: 14,
    paddingTop: 10,
  },
  textHeader: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
  textHeader2: {
    fontSize: 16,
    fontWeight: "bold",
    //paddingLeft: 20,
  },
});

export default GenerateScreen;
