import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class OnSetView extends Component {
    static navigationOptions={
        header:null
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>OnSetView</Text>
            </View>
        )
    }
}
export default OnSetView;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#d8e5ee',
      
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    }
  });
