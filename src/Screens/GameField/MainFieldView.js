import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class MainFieldView extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>MainFieldView</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#d8e5ee',
        paddingTop: 5
    }
});

export default MainFieldView;