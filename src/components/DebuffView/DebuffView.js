import React from 'react'
import { View, ImageBackground, TouchableOpacity, Text, StyleSheet } from 'react-native'

import theme from '../../../themes/DefaultTheme/color-styles'

export const DebuffView = props =>{
    let data = props.data
    let mapDebuff = data.debuffID.map((val, index) =>{
        return(
                <View key={index} style={styles.dbContainer} >
                <ImageBackground source={data.debuffHash[val].image} style={{ width: 25, height: 25, borderRadius: 5, justifyContent:'center', alignItems:'center' }} resizeMode='center'>
                <Text style={styles.intextStyle}> {data.debuffHash[val].stack}</Text>
                </ImageBackground>
                <Text style={styles.textStyle}> {data.debuffHash[val].interval}</Text>
                </View>
        )
    })
    return(
        <View style={{flexDirection:"row"}}>
            {mapDebuff.length > 0 ? mapDebuff:null}
        </View>
    )
}

const styles = StyleSheet.create({
    dbContainer:{
        paddingHorizontal:3,
        alignItems:'center'
    },
    textStyle:{
        fontWeight:'bold',
        color:theme.TEXT_LIGHT
    },
    intextStyle:{
        fontWeight:'bold',
        color:theme.APP_BG
    }
})