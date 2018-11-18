import React, {Component} from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import HomeStack from './src/Screens/HomeLogStacks/index'

export default class App extends Component{
  render() {
    return <SwitchContainer/>
  }
}


const Switchings = createSwitchNavigator(
  {
    Initial: HomeStack
  },
  {
    initialRouteName:'Initial'
  }
)

const SwitchContainer = createAppContainer(Switchings)