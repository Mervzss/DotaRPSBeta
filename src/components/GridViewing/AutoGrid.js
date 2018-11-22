import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'

import theme from '../../../themes/DefaultTheme/color-styles'
export const AutoGrid = props => {

    // props.data must contain image and id property
    const data = props.data.map(value => {
        return (
            <TouchableOpacity key={value.id} onPress={props.onItemPress(value.id)}>
            <View style={{ width: 90, height: 90, borderRadius: 160, backgroundColor: theme.BUTTON_MEDIUM }} >
                <Image source={value.image} style={{ width: 80, height: 80, borderRadius: 160, margin: 5 }} resizeMode='center' />
            </View>
            </TouchableOpacity>
        )
    })

    let finale = []
    let incrementValue = props.numRows
    let startValue = 0
    let finalValue = incrementValue

    do {
        let temp = []
        temp = data.slice(startValue, finalValue)
        finale.push(
            <View style={{ width: '100%', justifyContent: 'space-evenly', flexDirection: 'row', marginVertical: 10 }} key={startValue}>
                {temp}
            </View>

        )
        startValue += incrementValue
        finalValue += incrementValue
        data.length < finalValue ? (finalValue = data.length) : null

    } while (data.length > startValue)

    return finale

}