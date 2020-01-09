import React , { Component } from 'react';
import { Container, List, ListItem, Content, Text, Button, Icon, Header } from 'native-base';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions =  {
    title: 'Home',
  };

  addCharacter() {}

  render() {
    const {navigate} = this.props.navigation
    return (
      <Container>
        
        <Content>
          <Button iconLeft block light onPress={()=> navigate('Character')}>
            <Icon name="add"></Icon>
            <Text>Nouveau Personnage</Text>
          </Button>
        </Content>
      </Container>
    );
  }
};