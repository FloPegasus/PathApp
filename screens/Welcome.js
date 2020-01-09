
import React, {Component} from 'react'
import {Animated, Dimensions, Image, FlatList, Modal, StyleSheet, ScrollView} from 'react-native'

import {Button, Block, Text } from '../Components';
import {theme} from '../constans';

const {width, height} = Dimension.get('window')

 class welcome extends Component {
    static navigationOption = {
        header: null,
    }
    scrollX = new Animated.Value(0),
    state ={
        showTerms: false,
    }
    handleLogin(){
        //auth with 3rd party service
        navigation.navigate('Login'),
    }

renderTermsService(){
    return(
        <Modal animationType="slide" visible={this.state.showTerms}>
            <Block padding={[theme.sizes.padding * 2, theme.sizes.padding]} space="between">
                <Text h2 light>Terms of Service</Text>
                <ScrollView style={{paddingVertical: theme.sizes.padding}}>
                    <Text caption gray height={18}>
                        Lorem ipsum dolor sit amet
                    </Text>
                    <Text caption gray height={18}>
                        Lorem ipsum dolor sit amet
                    </Text>
                    <Text caption gray height={18}>
                        Lorem ipsum dolor sit amet
                    </Text>
                </ScrollView>
                
                <Button gradient onPress={() => This.setState({ showTerms: false})>
                    <Text center white>I understand</Text>
                </Button>
            </Block>
        </Modal>
    )
}


    renderIllustrations() {
        const {illustration} = this.props;
        return(
            <FlatList
                horizontal
                padingEnabled
                scrollEnabled
                showHorizontalScrollIndicator={false}
                scrollEventTrottle={16}
                snapToAlignment="center"
                data={illustrations}
                extraDate={this.state}
                keyExtractor={(item,index)=>'${item,id}'}
                renderItem={({item})=>(
                    <Image source={item.source} 
                    resizeMode="contain"
                    style={{width, height: height /2, overflow: 'visible'}}
                />
                )}
                onScroll={
                    Animated.event([{
                            nativeEvent: {contentOffset: { x: this.scrollX}}
                    }])
                }
            />
        )
    }
    renderSteps(){
        const { illustrations} = this.props;
        const stepPosition = Animated.divide(this.scrollX, width);
        return(
            <Block row center middle style={styles.stepsContainer}>
               {illustrations.map((item, index) => {
                   const opacity = stepPosition.interpolate({
                       inputRange:[index - 1, index, index +1],
                       outputRange:[0.4,1,0.4],
                       extrapolate: 'clamp',
                   }) ;

                   return (
                    <Block animated flex={false} key={'step-${index}'} color="gray" style={[styles.steps, {opacity}]}/>
                   )
               })}
               
            </Block>
        )
    }

    render(){
        const {navigation} = this.props;

        return(
        <Block>
            <Block center middle flex={0.5}>
              <Text h1 center bold>
                  PathFinder.
                  </Text>
              <Text h3 primary style={{marginTop: theme.sizes.padding/2}}>
                  Personnage
              </Text>
            </Block>
            <Block center middle>
            {this.renderIllustrations()}
            {this.renderSteps()}
            </Block>
            <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2 ]}>
                <Button gradient onPress={()=> navigation.navigate('Login')}>
                    <Text center semibold white>Login</Text>
                </Button>
                <Button shadow onPress={()=> navigation.navigate('Signup')}>
                    <Text center semibold>Signup</Text>
                </Button>
                <Button> onPress={()=> this.setState({showTerms: true})}>
                    <Text center caption gray>Terms of services</Text>
                </Button>
            </Block>
            {this.renderTermService()}
        </Block>
        )
    }
}

welcome.defaultProps = {
    illustrations: [
            {id: 1, source: require('../assets/images/illustration1Login.png')},
            {id: 2, source: require('../assets/images/illustration2Login.png')},
            {id: 3, source: require('../assets/images/illustration3Login.png')},
    ],
};

export default welcome;

const styles = StyleSheet.create({
    stepsContainer: {
        position: 'absolute',
        bottom: theme.sizes.base * 3,
        right: 0,
        left: 0,
    },
    steps: {
        width: 5,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 2.5,

    }
    , 

})