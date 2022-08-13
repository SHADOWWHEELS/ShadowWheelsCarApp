import { combineReducers } from "redux"

import user from "./user"
import loggedIn from "./loggedIn"
import formError from "./formError"
import formErrorMessage from "./formErrorMessage"
import showSplashScreen from "./showSplashScreen"

export default combineReducers({
  user,
  loggedIn,
  formError,
  formErrorMessage,
  showSplashScreen,
})
