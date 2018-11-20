import React, { Component } from 'react'
import { View, StyleSheet, Image, ScrollView } from 'react-native'
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

    onUpdatePress= (path)=>{
        alert(path)
        this.props.myHeroChoice(path)
    }

    render() {
        return (
            <View style={styles.container}>
                <HeadNavigate title='HERO SELECT'
                    onPressLeft={() => this.props.navigation.goBack()}
                    onPressRight={() => this.props.navigation.navigate()}
                />
                <View style={{ width: '90%', height: 300, backgroundColor: theme.INPUT_BG, borderRadius: 20 }}>
                    <ScrollView>
                        <AutoGrid data={dataSelection} numRows={3} onItemPress={(path) => this.onUpdatePress.bind(this, path)}/>
                    </ScrollView>

                </View>

                <View style={{ width: '90%', flex: 1 }}>
                    <MiniDescription />
                </View>
            </View>
        )
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        myHeroChoice: path => dispatch(heroSelect(path))
    }
}

export default connect(null, mapDispatchToProps)(SelectHeroView) ;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#d8e5ee',
        paddingTop: 20

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
