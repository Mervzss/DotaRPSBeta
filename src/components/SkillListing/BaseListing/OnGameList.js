import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

import theme from '../../../../themes/DefaultTheme/color-styles'
export const OnGameList = props => {
    return props.data.map((value, index) => {
        return (
            <TouchableOpacity key={index} onPress={props.onPress(value.target, value.skillAction)}>
             <View style={{ width: 82, height: 82, borderRadius: 15, backgroundColor: theme.APP_BORDER }} >
             <Image source={value.image} style={{ width: 72,height: 72, backgroundColor: theme.BUTTON_DARK, margin: 5, borderRadius:10 }}  />
             </View>
                
            </TouchableOpacity>

        )
    })
}