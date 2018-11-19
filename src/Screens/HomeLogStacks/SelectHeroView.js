import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'

import {HeadNavigate} from '../../components'

import Sven from '../../../assets/sven.png'
import Ursa from '../../../assets/ursa.png'
import Pudge from '../../../assets/pudge.jpg'

import theme from '../../../themes/DefaultTheme/color-styles'

import MiniDescription from './MiniTabDescription/index'

class SelectHeroView extends Component {
    static navigationOptions={
        header:null
    }
    render() {
        return (
            <View style={styles.container}>
            <HeadNavigate title='HERO SELECT'
                onPressLeft={()=> this.props.navigation.goBack()}
                onPressRight={()=> this.props.navigation.navigate()}
                />
            <View style={{width:'90%', height: 300, backgroundColor:theme.INPUT_BG, borderRadius:20}}> 
                <View style={{width:'100%', justifyContent:'space-evenly', flexDirection:'row', marginVertical:10}}>

                <View style={{width:90, height:90,borderRadius:160, backgroundColor:theme.BUTTON_DARK}}>
                <Image source={Sven} style={{width:80, height:80 ,borderRadius:160, margin: 5}} resizeMode='contain'/>
                </View>

                <View style={{width:90, height:90,borderRadius:160, backgroundColor:theme.BUTTON_LIGHT}}>
                <Image source={Ursa} style={{width:80, height:80, borderRadius:160, margin: 5}} resizeMode='center'/>
                </View>
                
                <View style={{width:90, height:90,borderRadius:160, backgroundColor:theme.BUTTON_LIGHT}}>
                <Image source={Pudge} style={{width:80, height:80, borderRadius:160, margin: 5}} resizeMode='center'/>
                </View>
               
                </View>
               
                </View>

                <View style={{width:'100%', flex:1}}> 
                    <MiniDescription/>
                </View>
            </View>   
        )
    }
}
export default SelectHeroView;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#d8e5ee',
      paddingTop:20
      
    },
    outerCircle: {
        borderRadius: 40,
        width: 80,
        height: 80,
        backgroundColor: 'white',
      },
      innerCircle: {
        borderRadius: 35,
        width: 70,
        height: 70,
        margin: 5,
        backgroundColor: 'black'
      },
  });
