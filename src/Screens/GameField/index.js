import { createStackNavigator } from 'react-navigation'

import MainFieldView from './MainFieldView'

export default GameFieldStack = createStackNavigator(
    {
    Field: MainFieldView
    },
    {
        initialRouteName:'Field'
    }
)