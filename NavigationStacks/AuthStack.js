import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack"

import LoginScreen from "../Screens/LoginScreen"

const AuthStack = () => {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name='LOGIN' component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthStack
