import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Root } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import AppNavigator from './navigation/AppNavigator'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Root>
        <AppNavigator />
      </Root>
    );
  }
}

export default App;