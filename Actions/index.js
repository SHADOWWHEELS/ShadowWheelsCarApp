import {
  LOG_IN,
  LOG_OUT,
  RESET_FORM_ERROR,
  RESET_FORM_ERROR_MESSAGE,
  RESET_SHOW_SPLASH_SCREEN,
  RESET_USER,
  SET_FORM_ERROR,
  SET_FORM_ERROR_MESSAGE,
  SET_SHOW_SPLASH_SCREEN,
  SET_USER,
} from "../Types"

export const loginUser = () => ({
  type: LOG_IN,
})

export const logoutUser = () => ({
  type: LOG_OUT,
})

export const setFormError = () => ({
  type: SET_FORM_ERROR,
})

export const resetFormError = () => ({
  type: RESET_FORM_ERROR,
})

export const setFormErrorMessage = message => ({
  type: SET_FORM_ERROR_MESSAGE,
  payload: message,
})

export const resetFormErrorMessage = () => ({
  type: RESET_FORM_ERROR_MESSAGE,
})

export const setUser = user => ({
  type: SET_USER,
  payload: user,
})

export const resetUser = () => ({
  type: RESET_USER,
})

export const setShowSplashScreen = () => ({
  type: SET_SHOW_SPLASH_SCREEN,
})

export const resetShowSplashScreen = () => ({
  type: RESET_SHOW_SPLASH_SCREEN,
})
