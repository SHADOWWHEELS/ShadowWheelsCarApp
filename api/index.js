import axios from "axios"

import store from "../Store"
import config from "../config"

const API = axios.create({ baseURL: config.APP_URL })

API.interceptors.request.use(config => {
  const state = store.getState()
  if (state.user.accessToken)
    config.headers.authorization = `Bearer ${state.user.accessToken}`

  return config
})

export const login = payload => API.post("/auth/login", payload)

export const loadUser = () => API.get('/auth/load-user');

export const backcameraImage = (payload) => API.post('tracking/backcamera-image', payload)
