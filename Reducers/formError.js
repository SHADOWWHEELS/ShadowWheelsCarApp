import { RESET_FORM_ERROR, SET_FORM_ERROR } from "../Types"

const formError = (state = false, action) => {
  switch (action.type) {
    case SET_FORM_ERROR:
      return true
    case RESET_FORM_ERROR:
      return false
    default:
      return state
  }
}

export default formError
