import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack"

import Tracking from "../Screens/Tracking"
import InfoScreen from "../Screens/InfoScreen"

const UserStack = () => {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name='INFO' component={InfoScreen} />
        <Stack.Screen name='TRACKING' component={Tracking} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default UserStack
