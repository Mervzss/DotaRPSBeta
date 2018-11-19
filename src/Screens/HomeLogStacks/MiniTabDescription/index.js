import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation' 

import StatsView from './StatsView'
import SkillsView from './SkillsView'

const MiniDescription = createMaterialTopTabNavigator(
    {
        Stats: StatsView,
        Skills: SkillsView
    },
    {
        initialRouteName:'Stats'
    }
)

export default MiniDesc = createAppContainer(MiniDescription)