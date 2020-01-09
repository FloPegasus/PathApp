import * as WebBrowser from 'expo-web-browser';
import React , { Component } from 'react';
import { Container, List, ListItem, Content, Text, Button, Icon, Header } from 'native-base';

export default class HomeCharacterScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions =  {
    title: 'Nouveau Personnage'
  };

  render() {
    return (
      <Container>
        
        <Content>
            <Text>
                J'aime les frittes au kechup !
            </Text>
        </Content>
      </Container>
    );
  }
};
