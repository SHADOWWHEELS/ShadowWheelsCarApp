import AsyncStorage from "@react-native-async-storage/async-storage"

import {
  loginUser,
  logoutUser,
  resetShowSplashScreen,
  resetUser,
  setUser,
} from "./index"
import { loadUser } from "../api"

const loadUserAction = () => {
  return async dispatch => {
    try {
      const accessToken = await AsyncStorage.getItem("accessToken")

      if (!accessToken) return

      dispatch(setUser({ accessToken }))

      console.log(accessToken)

      const response = await loadUser()

      dispatch(setUser({ ...response.data, accessToken }))

      dispatch(loginUser())
    } catch (error) {
      console.log(`${error}`)
      await AsyncStorage.removeItem("accessToken")
    } finally {
      dispatch(resetShowSplashScreen())
    }
  }
}

export default loadUserAction
