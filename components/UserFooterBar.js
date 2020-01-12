import React from 'react';
import {FooterTab, Button, Text, Icon} from 'native-base'
import ConnexionService from '../Service/ConnexionService'

class UserFooterBar extends React.Component {
    constructor(props) {
        super(props)
    }

    onDisconnectPress() {
        let cs = new ConnexionService()
        cs.disconnect()
    }
    
    render() {

        return (
            <FooterTab>
                <Text>{this.props.userName}</Text>
                <Button Danger
                onPress={() => this.onDisconnectPress()}>
                <Icon name='logout'></Icon>
                </Button>
            </FooterTab>
          );
    }
  
}

export default UserFooterBar;