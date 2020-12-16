import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Homescreen from '../screens/HomeScreen';
import CreateScreen from '../screens/CreateScreen';
import JoinScreen from '../screens/JoinScreen';
import LobbyScreen from '../screens/LobbyScreen';


const ScreenNavigation = createStackNavigator({
    Home: Homescreen,
    Create: CreateScreen,
    Join: JoinScreen,
    Lobby: LobbyScreen
});


export default createAppContainer(ScreenNavigation);