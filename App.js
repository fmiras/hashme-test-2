import React from 'react'
import { StackNavigator } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import DetailsScreen from './src/screens/DetailsScreen'

export default StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  }
},
  {
    initialRouteName: 'Home'
  })
