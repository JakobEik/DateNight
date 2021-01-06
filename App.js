import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./App/screens/HomeScreen";
import CreateScreen from "./App/screens/CreateScreen";
import JoinScreen from "./App/screens/JoinScreen";
import LobbyScreen from "./App/screens/LobbyScreen";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: "" }} />
      <Stack.Screen name="Create" component={CreateScreen} options={{ title: "" }} />
      <Stack.Screen name="Join" component={JoinScreen} options={{ title: "" }} />
      <Stack.Screen name="Lobby" component={LobbyScreen} options={{ title: "" }} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
