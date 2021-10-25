import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'
import Review from '../screens/Review'
const screens={
Home:{
    screen:Home
},
reviews:{
    screen:Review
},
}

const HomeStack= createStackNavigator(screens)
export default createAppContainer (HomeStack)

