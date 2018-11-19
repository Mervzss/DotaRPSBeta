import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

import Icons from 'react-native-vector-icons/FontAwesome5'

import theme from '../../../themes/DefaultTheme/color-styles'

export const HeadNavigate = props =>{
    return(
        <View style={styles.inStyle}>
                <TouchableOpacity onPress={props.onPressLeft}>
                    <Icons name='arrow-left' size={30} color={theme.TEXT_DARK}/>
                </TouchableOpacity>
                
                <Text style={{fontSize:30, fontWeight:'bold', color:theme.TEXT_DARK}}>{props.title}</Text>

                <TouchableOpacity onPress={props.onPressRight}>
                    <Icons name='arrow-right' size={30} color={theme.TEXT_DARK}/>
                </TouchableOpacity>

                </View>
    )
}

const styles = StyleSheet.create({
    inStyle: {
        justifyContent:'space-evenly', 
        width:'100%', 
        flexDirection:'row', 
        alignItems:'center', 
        paddingBottom:15
    }
  });