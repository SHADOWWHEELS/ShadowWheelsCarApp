import AsyncStorage from "@react-native-async-storage/async-storage"

import {
  loginUser,
  resetFormError,
  resetFormErrorMessage,
  setFormError,
  setFormErrorMessage,
  setUser,
} from "./index"
import { login } from "../api"

const loginAction = payload => {
  return async dispatch => {
    try {
      const response = await login(payload)

      dispatch(setUser(response.data))

      await AsyncStorage.setItem('accessToken', response.data.accessToken);

      dispatch(resetFormError())
      dispatch(resetFormErrorMessage())

      dispatch(loginUser())
    } catch (error) {
      const { response } = error
      dispatch(
        setFormErrorMessage(response.data.message || response.statusText),
      )
      dispatch(setFormError())
    }
  }
}

export default loginAction
