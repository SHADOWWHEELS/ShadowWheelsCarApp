import { RESET_FORM_ERROR_MESSAGE, SET_FORM_ERROR_MESSAGE } from "../Types"

const formErrorMessage = (state = "", action) => {
  switch (action.type) {
    case SET_FORM_ERROR_MESSAGE:
      return action.payload
    case RESET_FORM_ERROR_MESSAGE:
      return ""
    default:
      return state
  }
}

export default formErrorMessage
