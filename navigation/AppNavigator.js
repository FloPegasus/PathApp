import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeCharacterScreen from '../screens/Character/HomeCharacterScreen'


import MainTabNavigator from './MainTabNavigator';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeCharacterStack = createStackNavigator(
  {
    HomeCharacter: HomeCharacterScreen,
  },
  config
);

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Character: HomeCharacterStack
  })
);
