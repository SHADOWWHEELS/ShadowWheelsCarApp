import { applyMiddleware, createStore } from "redux"
import reduxThunk from "redux-thunk"

import rootReducers from "../Reducers"

const store = createStore(rootReducers, applyMiddleware(reduxThunk))

export default store
