import React, { Component } from 'react'
import { View, StyleSheet, Image, ScrollView, Button } from 'react-native'
import { connect } from 'react-redux'

import { HeadNavigate, AutoGrid } from '../../components'

import dataSelection from './SelectionData/data'

import theme from '../../../themes/DefaultTheme/color-styles'

import MiniDescription from './MiniTabDescription/index'

import {heroSelect} from '../../ReduxStore/Actions/HeroSelect'

class SelectHeroView extends Component {
    static navigationOptions = {
        header: null
    }

    onUpdatePress= (id)=>{
        this.props.myHeroChoice(id)
    }

    render() {
        return (
            <View style={styles.container}>
                <HeadNavigate title='HERO SELECT'
                    onPressLeft={() => this.props.navigation.goBack()}
                    onPressRight={() => this.props.navigation.navigate('GameField')}
                />
                <View style={{ width: '90%', height: 300, backgroundColor: theme.INPUT_BG, borderRadius: 20 }}>
                    <ScrollView>
                        <AutoGrid data={dataSelection} numRows={3} onItemPress={(id) => this.onUpdatePress.bind(this, id)}/>
                    </ScrollView>

                </View>

                <View style={{ width: '90%', flex: 1, paddingBottom:5}}>
                    <MiniDescription />
                </View>

                <View style={{width:'90%', marginBottom:5 }}>
                <Button title='START GAME' onPress={()=> alert('GAME STARTING')} color={theme.BUTTON_DARK} disabled={true}/>
                </View>
                

            </View>
        )
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        myHeroChoice: id => dispatch(heroSelect(id))
    }
}

export default connect(null, mapDispatchToProps)(SelectHeroView) ;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#d8e5ee',
        paddingTop: 5

    },
    outerCircle: {
        borderRadius: 40,
        width: 80,
        height: 80,
        backgroundColor: 'white',
    },
    innerCircle: {
        borderRadius: 35,
        width: 70,
        height: 70,
        margin: 5,
        backgroundColor: 'black'
    },
});
