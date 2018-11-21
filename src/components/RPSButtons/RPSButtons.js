import React from 'react'
import {Image, TouchableOpacity, View } from 'react-native'

import rpsData from './RPSData'

export const RPSButton = props =>{
    let rps = rpsData.map((value, index)=>{
        return(
            <TouchableOpacity onPress={props.onPress(value.name)} key={index}>
                <Image source={value.image} style={{ width: 80, height: 80, borderRadius: 160}} resizeMode='center' />
            </TouchableOpacity>
        )
    })
    return(
        <View style={{flexDirection:'row', width:'100%', justifyContent:'space-evenly', paddingTop:5}}>
        {rps}
        </View>
    )
}