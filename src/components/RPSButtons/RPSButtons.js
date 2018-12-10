import React from 'react'
import {Image, TouchableOpacity, View } from 'react-native'

import rpsData from './RPSData'

export const RPSButton = props =>{
    let rps = rpsData.map((value, index)=>{
        return(
            <TouchableOpacity style={{width: 85, height: 85, borderRadius: 160, borderColor:props.design.BR, borderWidth:4, backgroundColor:props.design.BG, justifyContent:'center', alignItems:'center'}} onPress={props.onPress(value.name)} key={index}>
                <Image source={value.image} style={{ width: 80, height: 80, borderRadius: 160, tintColor:props.design.FG}} resizeMode='center' />
            </TouchableOpacity>
        )
    })
    return(
        <View style={{flexDirection:'row', width:'100%', justifyContent:'space-evenly', alignItems:'center'}}>
        {rps}
        </View>
    )
}