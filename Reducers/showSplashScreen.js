import { RESET_SHOW_SPLASH_SCREEN, SET_SHOW_SPLASH_SCREEN } from "../Types"

const showSplashScreen = (state = true, action) => {
  switch (action.type) {
    case SET_SHOW_SPLASH_SCREEN:
      return true
    case RESET_SHOW_SPLASH_SCREEN:
      return false
    default:
      return state
  }
}

export default showSplashScreen
