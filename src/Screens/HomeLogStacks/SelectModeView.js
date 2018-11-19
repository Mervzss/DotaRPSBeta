import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import theme from '../../../themes/DefaultTheme/color-styles'

import {HeadNavigate} from '../../components'
class SelectModeView extends Component {
    static navigationOptions={
        header:null
    }

    state={
        buttonColor: theme.BUTTON_MEDIUM,
        mode:null
    }


    render() {
        return (
            <View style={styles.container}>
                <HeadNavigate title='MODE SELECT'
                onPressLeft={()=> this.props.navigation.goBack()}
                onPressRight={()=> this.props.navigation.navigate('SelectHero')}
                />

                 <View style={styles.buttonStyle}>
                    <Button color={this.state.buttonColor} title='Dummy Mode' onPress={() => this.setState({buttonColor: theme.BUTTON_LIGHT})}/>
                </View >
                <View style={styles.buttonStyle}>
                    <Button disabled={true} color={theme.BUTTON_MEDIUM} title='PLAYER VS AI' onPress={() => alert('PVAI')}/>
                </View>
                <View style={styles.buttonStyle}>
                    <Button disabled={true} color={theme.BUTTON_MEDIUM} title='PLAYER VS PLAYER' onPress={() => alert('PVP')}/>
                </View>

            </View>
        )
    }
}
export default SelectModeView;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#d8e5ee',
      paddingTop:20
      
    },
    buttonStyle:{
        width:'70%',
        paddingBottom:20,

    }
  });