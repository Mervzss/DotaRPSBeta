import React from 'react'
import { View, FlatList, StyleSheet, Image, Text } from 'react-native'
import { BaseList } from './BaseListing/BaseList'


export const SkillList = props =>{
    return(
        <FlatList
        style={{width:'100%'}} 
        data={props.data}
        renderItem={({item})=>(
            <BaseList image={item.image} name={item.name} description={item.description}/>
        )}
        keyExtractor={(item, index) => item.name.toString()}
        />
        
    )
}

