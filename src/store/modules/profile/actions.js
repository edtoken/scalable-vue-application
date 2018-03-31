/**
 * @namespace actions
 * @memberOf store.modules.profile
 **/

import Vue from "vue"
import store from "@/store"
import * as types from "./mutation-types"

/**
 * asdasd
 *
 * @function
 * @param commit
 *
 * @memberOf store.modules.profile.actions
 */
export const check = ({ commit }) => {
  console.log("CHECK ACTION")
  commit(types.CHECK)
}

/**
 * Action register
 *
 * @function
 * @param {function} commit
 *
 * @memberOf store.modules.profile.actions
 */
export const register = ({ commit }) => {
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
  commit(types.LOGIN, "RandomGeneratedToken")
  Vue.router.push({
    name: "home.index"
  })
}

/**
 * Action login
 *
 * @function
 *
 * @param {function} commit
 *
 * @memberOf store.modules.profile.actions
 */
export const login = ({ commit }) => {
  /*
   * Normally you would use a proxy to log the user in:
   *
   * new Proxy()
   *  .login(payload)
   *  .then((response) => {
   *    commit(types.LOGIN, response);
   *    store.dispatch('account/find');
   *    Vue.router.push({
   *      name: 'home.index',
   *    });
   *  })
   *  .catch(() => {
   *    console.log('Request failed...');
   *  });
   */
  commit(types.LOGIN, "RandomGeneratedToken")
  store.dispatch("account/find")

  Vue.router.push({
    name: "home.index"
  })
}

/**
 * Action logout
 *
 * @function
 *
 * @param {function} commit
 *
 * @memberOf store.modules.profile.actions
 */
export const logout = ({ commit }) => {
  commit(types.LOGOUT)
  Vue.router.push({
    name: "login.index"
  })
}
