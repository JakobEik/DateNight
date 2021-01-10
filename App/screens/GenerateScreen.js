import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Dash from "react-native-dash";

import StartButton from "../components/StartButton";
import Container from "../components/Container";
import mockdata from "../assets/data/mockdata";
import colors from "../config/colors";
import Icon from "../components/Icon";

const GenerateScreen = ({ route }) => {
  const [drinkIcon, setDrinkIcon] = useState("");
  const [outfitIcon, setOutfitIcon] = useState("");

  const chooseOutfit = () => {
    let randomChoice = Math.floor(Math.random() * mockdata.outfits.length);
    chooseOutfitIcon(randomChoice);
    console.log(outfitIcon);
    return mockdata.outfits[randomChoice];
  };
  const chooseOutfitIcon = (number) => {
    if (number === 0) {
      setOutfitIcon("shabby");
    } else if (number === 1) {
      setOutfitIcon("casual");
    } else if (number === 2) {
      setOutfitIcon("casual fint");
    } else if (number === 3) {
      setOutfitIcon("business");
    } else if (number === 4) {
      setOutfitIcon("black tie");
    }
  };

  const chooseDrink = () => {
    let randomChoice = Math.floor(Math.random() * mockdata.drinks.length);
    chooseDrinkIcon(randomChoice);
    return mockdata.drinks[randomChoice];
  };
  const chooseDrinkIcon = (number) => {
    if (number <= 5) {
      setDrinkIcon("beer");
    } else if (number > 5 && number <= 9) {
      setDrinkIcon("shot");
    } else if (number === 10) {
      setDrinkIcon("mojito");
    } else if (number > 10 && number <= 38) {
      setDrinkIcon("wine");
    } else {
      setDrinkIcon("cocktail");
    }
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

      <View style={[styles.row, { flex: 1, alignItems: "center" }]}>
        {hasOutfit ? (
          <View style={styles.row}>
            <View style={hasDrink ? styles.columnBothOutfitAndDrink : styles.column1}>
              <Icon style={styles.icon} icon={outfitIcon} />
            </View>

            <View style={styles.column2}>
              <Text style={hasDrink ? styles.textHeader2 : styles.textHeader}>Outfit</Text>
              <Text style={styles.text}>{outfit}</Text>
            </View>
            {!(hasDrink && hasOutfit) ? <View style={styles.column3}></View> : null}
          </View>
        ) : null}

        {hasDrink ? (
          <View style={styles.row}>
            <View style={hasOutfit ? styles.columnBothOutfitAndDrink : styles.column1}>
              <Icon style={styles.icon} icon={drinkIcon} />
            </View>

            <View style={styles.column2}>
              <Text style={hasOutfit ? styles.textHeader2 : styles.textHeader}>Drikke</Text>
              <Text style={styles.text}>{drink}</Text>
            </View>

            {!(hasDrink && hasOutfit) ? <View style={styles.column3}></View> : null}
          </View>
        ) : null}
      </View>

      {hasDrink ? (
        <View style={{ alignItems: "center", flex: 1, flexDirection: "row" }}>
          <View style={[styles.column1, { justifyContent: "center" }]}>
            <Image style={styles.icon} source={require("../assets/icons/start2.png")} />
          </View>

          <View style={styles.column2}>
            <Text style={{ fontWeight: "bold" }}>Start et valgfritt sted med en drink</Text>
          </View>

          <View style={styles.column3}>
            <View style={{ flex: 1.6, justifyContent: "flex-end" }}>
              <Text style={styles.text}>{startTime}</Text>
            </View>

            <Dash style={styles.dash} dashGap={4} dashColor="grey" />
          </View>
        </View>
      ) : null}

      {numberOfBars > 0 ? (
        <View style={{ flex: numberOfBars }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.textHeader, { paddingLeft: 19 }]}>Barer</Text>
            </View>

            <View style={styles.dash2}>
              {hasDrink ? <Dash style={styles.dash} dashGap={4} dashColor="grey" /> : null}
            </View>
          </View>
          {bars.map((bar) => (
            <View style={styles.row}>
              <View style={styles.column1}>
                <Image style={styles.icon} source={require("../assets/icons/beer.png")} />
              </View>

              <View style={styles.column2}>
                <Text style={styles.text}>{bar}</Text>
              </View>

              <View style={styles.column3}>
                <Text style={styles.text}>{startTime}</Text>
                <Dash style={styles.dash} dashGap={4} dashColor="grey" />
              </View>
            </View>
          ))}
        </View>
      ) : null}
      {numberOfRestaurants > 0 ? (
        <View style={{ flex: numberOfRestaurants }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.textHeader, { paddingLeft: 19 }]}>Restauranter</Text>
            </View>

            <View style={styles.dash2}>
              <Dash style={styles.dash} dashGap={4} dashColor="grey" />
            </View>
          </View>

          {restaurants.map((restaurant) => (
            <View style={styles.row}>
              <View style={styles.column1}>
                <Image style={styles.icon} source={require("../assets/icons/restaurant2.png")} />
              </View>

              <View style={styles.column2}>
                <Text style={styles.text}>{restaurant}</Text>
              </View>

              <View style={styles.column3}>
                <Text style={styles.text}>{startTime}</Text>
                <Dash style={styles.dash} dashGap={4} dashColor="grey" />
              </View>
            </View>
          ))}
        </View>
      ) : null}

      {!isSingle ? (
        <>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.textHeader, { paddingLeft: 19 }]}>Sexposisjon</Text>
            </View>

            <View style={styles.dash2}>
              <Dash style={styles.dash} dashGap={4} dashColor="grey" />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column1}>
              <Image style={styles.icon} source={require("../assets/icons/sex.png")} />
            </View>

            <View style={styles.column2}>
              <Text style={styles.text}>{sexPosition}</Text>
            </View>

            <View style={styles.column3}>
              <Text style={styles.text}>??:??</Text>
            </View>
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
    flex: 1.5,
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
    flex: 1,
    borderRadius: 100,
    paddingRight: 17,
    paddingTop: 4,
  },
  dash2: {
    height: 19,
    width: 19.2,
    paddingTop: 0,
  },
  header: {
    width: "100%",
    height: "5%",
    //backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 33,
    height: 35,
  },
  row: {
    flexDirection: "row",
    flex: 1,
  },
  text: {
    fontSize: 14,
    paddingTop: 9,
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
