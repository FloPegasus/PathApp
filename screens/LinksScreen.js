import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Icon } from 'native-base';

export default function LinksScreen() {
  return (
    <Container>
        <Content>
          <Icon name='add' />
          <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
          <Icon type="FontAwesome" name="home" />
        </Content>
    </Container>
  );
}

LinksScreen.navigationOptions = {
  title: 'Icons',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
