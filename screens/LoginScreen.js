import { Text, Container, Header, Content, Form, Item, Input, Label, Footer, FooterTab, Button } from 'native-base';
import React from 'react';
import ConnexionService from '../Service/ConnexionService'


class LoginScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        Password: '',
        Email: '',
    }
}
  
  static navigationOptions = {
    title: 'Login',
  };

  onConnexionPress() {
    let connexionService = new ConnexionService()
    connexionService.connexion({Email: this.state.Email})
    navigate('Home')
  }

  render() {
     const { navigate } = this.props.navigation;
    return (
      
      <Container>

        <Content>
          <Form>
            <Item fixedLabel>
                <Label>Email</Label>
                <Input onChangeText={(text)=>this.setState({Email: text})}/>
            </Item>
            <Item fixedLabel last>
                <Label>Password</Label>
                <Input onChangeText={(text)=>this.setState({Password: text})}/>
            </Item>
            <Button onPress={() => navigate('Inscription')} >

              <Text> S'inscrire </Text>


            </Button>
          </Form>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={() => this.onConnexionPress()}>
              <Text> Connection </Text>

            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
 }
}
export default LoginScreen;