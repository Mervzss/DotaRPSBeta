import { createStackNavigator } from 'react-navigation'

import HomeView from './HomeView'
import OnSetView from './OnSetView'
import SelectHeroView from './SelectHeroView'
import SelectMode from './SelectModeView'

export default HomeStack = createStackNavigator(
    {
        Home: HomeView,
        OnSet: OnSetView,
        SelectMode: SelectMode,
        SelectHero: SelectHeroView
    },
    {
        initialRouteName:'Home',
    }
)