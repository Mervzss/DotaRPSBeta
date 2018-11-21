import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import theme from '../../../themes/DefaultTheme/color-styles'
import {HealthBar, RPSButton} from '../../components/index'

import AIPick from '../../FunctionGenerator/AILogic/RPS/logic'
import Solver from '../../FunctionGenerator/AILogic/RPS/RPSSolver'

class MainFieldView extends Component {
    static navigationOptions = {
        header: null
    }

    rpsSelect = (name) =>{
        alert(Solver(name,AIPick()))
    }
    render() {
        return (
            <View style={styles.container}>
            
            <View style={{width:'90%', height:90, backgroundColor:theme.INPUT_BG, marginBottom:10, flexDirection:'row'}}>

                <Image source={null} style={{width:'20%', height:80, backgroundColor:theme.BUTTON_DARK, margin:5}}/>
                <View style={{width:'80%', marginLeft:10 }}>
                <HealthBar name='HP' health={90} colorHP='green'/>
                <View style={{flexDirection:'row'}}>
                <Text>ATK: 5</Text>
                </View>
                
                </View>
            

            </View>

            <View style={{height:200, width:'90%', backgroundColor:theme.INPUT_BG, marginVertical:10, borderRadius:10, justifyContent:'space-evenly', alignItems:'center', flexDirection:'row'}}>
            <Image source={null} style={{ width: 100, height: 100, borderRadius: 180, backgroundColor:'blue'}} resizeMode='center' />
            <Image source={null} style={{ width: 100, height: 100, borderRadius: 180, backgroundColor:'blue'}} resizeMode='center' />
            </View>

            <View style={{flexDirection:'row', height:50, width:'90%'}}>
                <View style={{height:50, width:50, backgroundColor:theme.INPUT_BG}}/>
                <Text>Debuffs</Text>
            </View>
            
            <View style={{width:'90%', height:90, backgroundColor:theme.INPUT_BG, marginBottom:10, borderRadius:10}}>
            
                    <RPSButton onPress={(name) => this.rpsSelect.bind(this, name)}/>
                

                
            </View>
            
            <Text>HP ATK SR> BUFFS</Text>
            <HealthBar name='HP' health={19} colorHP='green'/>

            <View style={{width:'90%', height:90, backgroundColor:theme.INPUT_BG, marginVertical:10, borderRadius:10}}>
                
            </View>
                <Text>UserName</Text>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d8e5ee',
        paddingTop: 5
    }
});

export default MainFieldView;