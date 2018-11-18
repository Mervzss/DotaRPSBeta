import { createStackNavigator } from 'react-navigation'

import HomeView from './HomeView'
import OnSetView from './OnSetView'

export default HomeStack = createStackNavigator(
    {
        Home: HomeView,
        OnSet: OnSetView
    },
    {
        initialRouteName:'Home',
    }
)