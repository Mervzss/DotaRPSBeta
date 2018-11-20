import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { connect } from 'react-redux'
// import SelectedHero from '../../../GlobalData/HeroData/Sven'

class StatsView extends Component {
    render() {
        const {pickedHero} = this.props
        return (
            <View>
                <Text>omg</Text>
                <Text>StatsView</Text>
                
                <Text>JFJFJFJ</Text>
            </View>
        )
    }
}
const mapStateToProps = state =>{
    return{
        pickedHero: state.HeroSelect.pickedHero
    }
}

export default connect(mapStateToProps)(StatsView);