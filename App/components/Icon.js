import React from "react";
import { Image } from "react-native";

const Icon = (props) => {
  if (props.icon === "mojito") {
    return <Image style={[props.style, { marginTop: 20 }]} source={require("../assets/icons/mojito.png")} />;
  } else if (props.icon === "beer") {
    return <Image style={[props.style, { marginTop: 20 }]} source={require("../assets/icons/beer.png")} />;
  } else if (props.icon === "shot") {
    return <Image style={[props.style, { marginTop: 20 }]} source={require("../assets/icons/shot.png")} />;
  } else if (props.icon === "wine") {
    return <Image style={[props.style, { marginTop: 20 }]} source={require("../assets/icons/wine.png")} />;
  } else if (props.icon == "cocktail") {
    return <Image style={[props.style, { marginTop: 20 }]} source={require("../assets/icons/cocktail.png")} />;
  } else if (props.icon == "shabby") {
    return <Image style={[props.style, { marginTop: 20 }]} source={require("../assets/icons/shabby.png")} />;
  } else if (props.icon == "casual") {
    return <Image style={[props.style, { marginTop: 20 }]} source={require("../assets/icons/tshirt.png")} />;
  } else if (props.icon == "casual fint") {
    return <Image style={[props.style, { marginTop: 20 }]} source={require("../assets/icons/casualFin.png")} />;
  } else if (props.icon == "business") {
    return <Image style={[props.style, { marginTop: 20 }]} source={require("../assets/icons/casualFin.png")} />;
  } else if (props.icon == "black tie") {
    return <Image style={[props.style, { marginTop: 20 }]} source={require("../assets/icons/blackTie.png")} />;
  }
};

export default Icon;
