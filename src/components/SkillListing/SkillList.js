import React from 'react'
import { View, FlatList, StyleSheet, Image, Text } from 'react-native'

import theme from '../../../themes/DefaultTheme/color-styles'

export const SkillList = props =>{
    return(
        <FlatList
        style={{width:'100%'}} 
        data={props.data}
        renderItem={({item})=>(
            <View style={styles.incontainer}>
                    <View style={{ width: 85, height: 85, backgroundColor: theme.BUTTON_MEDIUM, marginVertical:10,}} >
                        <Image source={item.image} style={{ width: 75, height: 75, margin: 5 }} resizeMode='contain' />
                    </View>
                    <View style={{flexDirection:'column', marginVertical:10, paddingLeft:10, width:'75%'}}>
                        <Text style={{color:theme.TEXT_DARK, fontWeight:'bold'}}>{item.name}</Text>
                        <View style={{flex:1}}>
                        <Text style={{color:theme.TEXT_LIGHT}}>{item.description}</Text>
                        </View>
                        
                    </View>
            </View>
        )}
        keyExtractor={(item, index) => item.name.toString()}
        />
        
    )
}

const styles = StyleSheet.create({
    incontainer: {width:'100%', borderBottomColor:theme.APP_BORDER, borderBottomWidth:1, justifyContent:'flex-start', flexDirection:'row'},
});