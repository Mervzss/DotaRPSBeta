import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation' 

import StatsView from './StatsView'
import SkillsView from './SkillsView'

import theme from '../../../../themes/DefaultTheme/color-styles'

const MiniDescription = createMaterialTopTabNavigator(
    {
        Stats: StatsView,
        Skills: SkillsView
    },
    {
        initialRouteName:'Stats',
        tabBarOptions: {

            style: {

                backgroundColor: theme.APP_BG,

                elevation: 0,

                borderBottomColor: theme.APP_BORDER,

                borderBottomWidth:1

            },

            tabStyle: {

                backgroundColor: theme.APP_BG,

                height: 40,

            },

            labelStyle: {

                fontSize: 16,

                fontWeight: 'bold'

            },

            activeTintColor: theme.APP_COLOR,

            activeBackgroundColor: theme.APP_BG,

            inactiveBackgroundColor: theme.APP_BG,

            inactiveTintColor: theme.TEXT_LIGHT,

        },
    }
)

export default MiniDesc = createAppContainer(MiniDescription)