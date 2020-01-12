import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native'
import {Container, Header, Content, Form, Item, Input, Label, Button, Footer, FooterTab, Text } from 'native-base';


class PersonnagesScreen extends React.Component {
  static navigationOptions = {
    title: 'Nouveau Personnage',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <ImageBackground source ={require('../assets/images/Helora02.png')}  style={styles.BackGroundImage} >
 
        
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Nom</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Classe du personnage</Label>
              <Input />
            </Item>
          </Form>
        </Content>
        </ImageBackground>
        <Footer>
          <FooterTab>
            <Button full
            title=""
            onPress={() => navigate('Home', { name: 'Jane' })}>
              <Text >
                Sauvegarder
              </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
 
  BackGroundImage: {
    width: '100%',
    height: '90%',
 
  }


 });

export default PersonnagesScreen