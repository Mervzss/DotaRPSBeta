import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import { connect } from 'react-redux'

import theme from '../../../../themes/DefaultTheme/color-styles'

class StatsView extends Component {
    render() {
        const { pickedHero } = this.props
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    {pickedHero.image ?
                        <Image source={pickedHero.image} style={{ width: 80, height: 80 }} resizeMode='center' />
                        : <Image source={null} style={{ width: 80, height: 80, backgroundColor: theme.INPUT_BG }} resizeMode='center' />}

                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: "flex-start", paddingLeft: 10 }}>
                        <Text style={styles.textStyle}>Name: {pickedHero.name}</Text>
                        <Text style={styles.textStyle}>Job:  {pickedHero.job}</Text>
                    </View>

                </View>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                    <View style={{ width: '50%', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <Text style={styles.textStyle}>HP: {pickedHero.stats.HP}</Text>
                        <Text style={styles.textStyle}>ATK: {pickedHero.stats.ATK}</Text>
                    </View>
                    <View style={{ width: '50%', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <Text style={styles.textStyle}>SR: {pickedHero.stats.SR}</Text>
                        <Text style={styles.textStyle}>TYPE: {pickedHero.stats.type}</Text>
                    </View>

                </View>
                <View style={{ width: '100%', backgroundColor: theme.BUTTON_LIGHT, borderColor: theme.APP_BORDER, borderWidth: 1, marginTop: 10, borderRadius: 10 }}>
                    <Text style={{ color: theme.TEXT_DARK, fontSize: 14, padding: 5 }}>{pickedHero.description}</Text>
                </View>

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
        justifyContent: 'flex-start',
        backgroundColor: theme.APP_BG,
        paddingTop: 10

    },
    textStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.TEXT_DARK
    }
});

export default connect(mapStateToProps)(StatsView);