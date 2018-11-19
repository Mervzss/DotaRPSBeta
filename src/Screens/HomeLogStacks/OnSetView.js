import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'

import {HeadNavigate} from '../../components'

import theme from '../../../themes/DefaultTheme/color-styles'

import prolougeImage from '../../../assets/baneprolouge.png'

class OnSetView extends Component {
    static navigationOptions={
        header:null
    }
    render() {
        return (
            <View style={styles.container}>

                <HeadNavigate title='PROLOGUE' 
                onPressLeft={() => this.props.navigation.goBack()}
                onPressRight={() => this.props.navigation.navigate('SelectMode')}
                />
               

                <TextInput style={styles.inputStyle} 
                placeholder='Enter your In-Game Name'/>

                <Image source={prolougeImage} style={{width:'90%', height:200, tintColor:theme.APP_COLOR}} 
                    resizeMode='contain'/>
            </View>

        )
    }
}
export default OnSetView;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#d8e5ee',
      paddingTop:20
      
    },
    inputStyle:{
        width:'90%', 
        backgroundColor:theme.INPUT_BG, 
        fontSize:20, fontWeight:'bold', 
        textAlign:'center',
        marginBottom:15
    }
  });
