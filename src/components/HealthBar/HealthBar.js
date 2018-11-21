import React from 'react'
import { View, Text } from 'react-native'

import theme from '../../../themes/DefaultTheme/color-styles'

export const HealthBar = props => {

    checkHealth = (health) =>{
        if(health<20){
            return props.colorDanger || '#ff8fe9'
        }
        else if(health> 60){
            return props.colorFull || '#59a2e7'
        }
        else{
            return props.colorMedium || '#d18fff'
        }
    }

    return (
        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
            <Text>{props.name} </Text>
            <View style={{ width: '100%', height: 20, borderColor: theme.APP_BORDER, borderWidth: 1, justifyContent: 'center' }}>
                <View style={{ height: '90%', width: props.health.toString() + '%', backgroundColor: checkHealth(props.health) }} />
            </View>
        </View>
    )
}
