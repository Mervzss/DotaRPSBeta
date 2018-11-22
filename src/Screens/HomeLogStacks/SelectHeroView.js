import React, { Component } from 'react'
import { View, StyleSheet, Image, ScrollView, Button } from 'react-native'
import { connect } from 'react-redux'

import { HeadNavigate, AutoGrid } from '../../components'

import dataSelection from './SelectionData/data'

import theme from '../../../themes/DefaultTheme/color-styles'

import MiniDescription from './MiniTabDescription/index'

import { heroSelect } from '../../ReduxStore/Actions/HeroSelect'

import { setHeroAI } from '../../ReduxStore/Actions/GameAction/AIAction'

import { setHeroPlayer } from '../../ReduxStore/Actions/GameAction/PlayerAction'

import {DireAI} from '../../GlobalData/AIData/DireAI'

class SelectHeroView extends Component {
    static navigationOptions = {
        header: null
    }

    gameStart = () =>{
    
        // alert(this.props.pickedHero)
        this.props.playerHeroSet(this.props.pickedHero)
        console.log('p', this.props.pickedHero)
        this.props.aiHeroSet(DireAI)
        console.log('ai', DireAI)
        this.props.navigation.navigate('GameField')
        
    }

    onUpdatePress = (id) => {
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
                        <AutoGrid data={dataSelection} numRows={3} onItemPress={(id) => this.onUpdatePress.bind(this, id)} />
                    </ScrollView>

                </View>

                <View style={{ width: '90%', flex: 1, paddingBottom: 5 }}>
                    <MiniDescription />
                </View>

                <View style={{ width: '90%', marginBottom: 5 }}>
                    <Button title='START GAME' onPress={this.gameStart.bind(this)} color={theme.BUTTON_DARK}
                        disabled={this.props.isPicked} />
                </View>


            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        isPicked: state.HeroSelect.isPicked,
        pickedHero: state.HeroSelect.pickedHero
    }
}

const mapDispatchToProps = dispatch => {
    return {
        myHeroChoice: id => dispatch(heroSelect(id)),

        playerHeroSet: val => dispatch(setHeroPlayer(val)),
        aiHeroSet: val => dispatch(setHeroAI(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectHeroView);

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
