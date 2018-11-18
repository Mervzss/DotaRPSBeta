import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native'

import DotaLogo from '../../../assets/DotaRPSLogo.png'

import theme from '../../../themes/DefaultTheme/color-styles'

class HomeView extends Component {
    static navigationOptions={
        header:null
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={DotaLogo} style={{width:300, height:200}} resizeMode='contain'/>
                <View style={{height:10}}/>
                <TouchableOpacity>
                <Text style={{fontSize:30, fontWeight:'bold', color:theme.BUTTON_DARK}}>PLAY</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default HomeView;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#d8e5ee',
      
    },
    buttonStyle: {
      width:100,
    }
  });
