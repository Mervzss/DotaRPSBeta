import React from 'react'
import { View, Text } from 'react-native'

import theme from '../../../themes/DefaultTheme/color-styles'

export const HealthBar = props => {

    checkHealth = (health) =>{
        console.log(props.design)
        if(health<20){
            return props.colorDanger || props.Low ||  '#ff8fe9'
        }
        else if(health> 60){
            // console.log(props.design.FG)
            return props.colorFull || props.Full || '#59a2e7'
        }
        else{
            return props.colorMedium || props.Mid || '#d18fff'
        }
    }

    return (
        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
            <Text style={{fontWeight:'bold', color:'black'}}>{props.name} </Text>
            <View style={{ width: '100%', height: 20, borderColor: theme.APP_BORDER, borderWidth: 1, justifyContent: 'center' }}>
                <View style={{ height: '90%', width: props.health.toString() + '%', backgroundColor: checkHealth(props.health) }}/>
            </View>
            
            <Text style={{color:'white', fontWeight:'bold',transform:[{translateX:-125}, {translateY:0}]}}>{props.updateHealth.toFixed(2)}</Text>
            
        </View>
    )
}
