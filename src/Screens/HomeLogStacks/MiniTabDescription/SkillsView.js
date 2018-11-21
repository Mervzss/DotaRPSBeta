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
            
                {/* <View style={{width:'100%', borderBottomColor:theme.APP_BORDER, borderBottomWidth:1, justifyContent:'center'}}>
                    <View style={{ width: 85, height: 85, backgroundColor: theme.BUTTON_MEDIUM, marginVertical:10 }} >
                        <Image source={skills.first.image} style={{ width: 75, height: 75, margin: 5 }} resizeMode='contain' />
                    </View>
                </View>

                <View style={{width:'100%', borderBottomColor:theme.APP_BORDER, borderBottomWidth:1, justifyContent:'center'}}>
                    <View style={{ width: 85, height: 85, backgroundColor: theme.BUTTON_MEDIUM, marginVertical:10 }} >
                        <Image source={skills.second.image} style={{ width: 75, height: 75, margin: 5 }} resizeMode='contain' />
                    </View>
                </View> */}

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