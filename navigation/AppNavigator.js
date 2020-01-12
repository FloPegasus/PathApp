import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import PersonnagesScreen from '../screens/PersonnagesScreen';
import Inscription from '../screens/Inscription';


const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Personnages: {screen: PersonnagesScreen},
  Login: {screen: LoginScreen},
  Inscription: {screen: Inscription},
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;

