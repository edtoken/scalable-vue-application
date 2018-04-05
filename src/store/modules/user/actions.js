/**
 * @namespace actions
 * @memberOf store.modules.user
 **/

import Vue from "vue"
import store from "@/store"
import * as types from "./mutation-types"
import * as service from "./service"

/**
 * Asdasd.
 *
 * @function
 * @param commit
 *
 * @memberOf store.modules.user.actions
 */
export const check = ({ commit }) => {
  commit(types.CHECK, service.userIsAuthorized())
}

/**
 * Action register.
 *
 * @function
 *
 * @param {Function} commit
 * @param {string} login
 * @param {string} password
 *
 * @memberOf store.modules.user.actions
 */
export const register = ({ commit }, { login, password }) => {
  /*
   * Normally you would use a proxy to register the user:
   *
   * new Proxy()
   *  .register(payload)
   *  .then((response) => {
   *    commit(types.REGISTER, response);
   *  })
   *  .catch(() => {
   *    console.log('Request failed...');
   *  });
   */
  console.log(login, password)
  commit(types.LOGIN, "RandomGeneratedToken")
  Vue.router.push({
    name: "home.index"
  })
}

/**
 * Action login.
 *
 * @function
 *
 * @param {Function} commit
 *
 * @param {string} email
 * @param {string} password
 *
 * @memberOf store.modules.user.actions
 */
export const login = ({ commit }, { email, password }) => {
  service
    .login(email, password)
    .then(resp => {
      console.log(resp)
      commit(types.LOGIN, "")
      // console.log("SGTORE", store)
      store.dispatch("account/find")

      // console.log(Vue.router)
      // Vue.router.push({
      //   name: "home.index"
      // })
    })
    .catch(err => {
      console.log(err)
    })
}

/**
 * Action logout.
 *
 * @function
 *
 * @param {Function} commit
 *
 * @memberOf store.modules.user.actions
 */
export const logout = ({ commit }) => {
  commit(types.LOGOUT)
  Vue.router.push({
    name: "login.index"
  })
}
