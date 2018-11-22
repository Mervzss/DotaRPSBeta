import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import { connect } from 'react-redux'

import { SkillList } from '../../../components'
import theme from '../../../../themes/DefaultTheme/color-styles'

class SkillsView extends Component {
    render() {
        const { skills } = this.props.pickedHero
        return (
            <View style={styles.container}>
        
                <SkillList data={skills}/>

            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        pickedHero: state.HeroSelect.pickedHero
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        justifyContent: 'flex-start',
        backgroundColor: theme.APP_BG

    },
    textStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.TEXT_DARK
    }
});
export default connect(mapStateToProps)(SkillsView);