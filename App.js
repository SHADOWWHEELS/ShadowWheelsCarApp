import { SafeAreaView, StyleSheet } from "react-native"
import React, { useEffect } from "react"

import "react-native-gesture-handler"
import { useDispatch, useSelector } from "react-redux"

import AuthStack from "./NavigationStacks/AuthStack"
import UserStack from "./NavigationStacks/UserStack"
import loadUserAction from "./Actions/loadUserAction"
import SplashScreen from "./Screens/SplashScreen"

const App = () => {
  const dispatch = useDispatch()
  const showSplashScreen = useSelector(state => state.showSplashScreen)
  const loggedIn = useSelector(state => state.loggedIn)

  useEffect(() => {
    setTimeout(() => {
      dispatch(loadUserAction())
    }, 2000)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {showSplashScreen ? (
        <SplashScreen />
      ) : loggedIn ? (
        <UserStack />
      ) : (
        <AuthStack />
      )}
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
