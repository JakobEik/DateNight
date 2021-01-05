import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Homescreen from "../App/screens/HomeScreen";
import CreateScreen from "../App/screens/CreateScreen";
import JoinScreen from "../App/screens/JoinScreen";
import LobbyScreen from "../App/screens/LobbyScreen";

const ScreenNavigation = createStackNavigator({
  Home: Homescreen,
  Create: CreateScreen,
  Join: JoinScreen,
  Lobby: LobbyScreen,
});

export default createAppContainer(ScreenNavigation);
