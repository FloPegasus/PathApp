import React from 'react';
import { Button, Icon, Text, Container, List, ListItem, Footer, FooterTab, Content } from 'native-base';
import { StyleSheet, AsyncStorage } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import UserFooterBar from '../components/UserFooterBar'


class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    title: 'PATHFINDER',
  };

  async componentDidMount() {

    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {

      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      return;
    }

    let token = await Notifications.getExpoPushTokenAsync();
    console.log(token)
  }

  async setFooterTab() {
    let userName = await AsyncStorage.getItem('userName')
    if (userName) {
      return (<UserFooterBar userName={userName}></UserFooterBar>)
    } else {
      return (
          <FooterTab>
            <Button full succsess
              onPress={() => navigate('Login', { name: 'Jane' })}>
              <Text >Login</Text>
            </Button>
          </FooterTab>
      )
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (

      <Container>
        <Content>
          <List>
            <Button iconLeft block light
              onPress={() => navigate('Personnages', { name: '' })}
            >
              <Icon name="add"></Icon>
              <Text>Nouveau Personnage</Text>
            </Button>
          </List>
        </Content>
        <Footer>
          {this.setFooterTab()}
        </Footer>
      </Container>

    );

  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
  }
});

export default HomeScreen;