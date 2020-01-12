import React from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Footer, FooterTab, Text } from 'native-base';
import userService from '../Service/userService';
import ConexionService from '../Service/ConnexionService'

let sha256=require('sha256');

class Inscription extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Username: '',
            Password: '',
            Email: '',
        }
    }
    static navigationOptions = {
        title: 'Inscription',
    };
    
    async createUser() {
        let us = new userService()
        let cs = new ConexionService()
        let newUser= {UserName:this.state.Username, Email:this.state.Email, Password: sha256(this.state.Password)}
        let resUser = await us.add(newUser)
        cs.connexion(resUser)
        navigate('Home')
    }
    render() {
        const { navigate } = this.props.navigation;
        return (

            <Container>
                 <Content>
                    <Form>
                        <Item fixedLabel>
                            <Label>Username</Label>
                            <Input onChangeText={(text)=>this.setState({Username: text})}/>
                        </Item>
                        <Item fixedLabel last>
                            <Label>Password</Label>
                            <Input onChangeText={(text)=>this.setState({Password: text})}/>
                        </Item>
                        <Item fixedLabel last>
                            <Label>Email</Label>
                            <Input onChangeText={(text)=>this.setState({Email: text})}/>
                        </Item>
                    </Form>
                </Content>
                <Button full success onPress={() => this.createUser()}>
                    <Text> Valider</Text>
                </Button>
            </Container>
        )
      
    }
}

export default Inscription;