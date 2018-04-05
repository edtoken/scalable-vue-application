/**
 * @namespace store
 */

import Vue from "vue"
import Vuex from "vuex"
import createLogger from "vuex/dist/logger"

import { DEBUG, STORE_LOGGING } from "../config"

Vue.use(Vuex)
Vue.config.debug = DEBUG

const modules = require("./modules")

let STORE = undefined

export default () => {
  if (STORE) {
    return STORE
  }
  STORE = new Vuex.Store({
    modules: modules,

    strict: DEBUG,

    plugins: STORE_LOGGING ? [createLogger()] : []
  })

  return STORE
}
