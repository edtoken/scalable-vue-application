/**
 * @namespace mutations
 * @memberOf store.modules.profile
 **/

import Vue from "vue"
import { CHECK, REGISTER, LOGIN, LOGOUT } from "./mutation-types"

export default {
  [CHECK](state) {
    console.log("CHECK MUTATION", state)
    state.authenticated = !!localStorage.getItem("id_token")
    if (state.authenticated) {
      Vue.$http.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        "id_token"
      )}`
    }
  },

  [REGISTER]() {
    //
  },

  [LOGIN](state, token) {
    state.authenticated = true
    localStorage.setItem("id_token", token)
    Vue.$http.defaults.headers.common.Authorization = `Bearer ${token}`
  },

  [LOGOUT](state) {
    state.authenticated = false
    localStorage.removeItem("id_token")
    Vue.$http.defaults.headers.common.Authorization = ""
  }
}
