import React from 'react';
import {Button} from 'react-native';

class SortieScreen extends React.Component {
    static navigationOptions = {
      title: 'Batchata',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="lieu"
          onPress={() => navigate('Profil', {name: 'Jane'})}
        />
      );
    }
  }
export default SortieScreen