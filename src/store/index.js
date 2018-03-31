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

console.log("DEBUG", DEBUG)
console.log("STORE_LOGGING", STORE_LOGGING)

export default () =>
  new Vuex.Store({
    modules: modules,

    strict: DEBUG,

    plugins: STORE_LOGGING ? [createLogger()] : []
  })
