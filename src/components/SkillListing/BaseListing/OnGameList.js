import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

import theme from '../../../../themes/DefaultTheme/color-styles'
export const OnGameList = props => {
    return props.data.map((value, index) => {
        return (
            <TouchableOpacity key={index} onPress={props.onPress(value.target, value.skillAction, value.skillDebuff)}>
             <View style={{ width: 82, height: 82, borderRadius: 15, backgroundColor: props.design.BR }} >
             <Image source={value.image} style={{ width: 72,height: 72, backgroundColor: props.design.BG, margin: 5, borderRadius:10, tintColor:props.design.FG }}  />
             </View>
             
            </TouchableOpacity>

        )
    })
}