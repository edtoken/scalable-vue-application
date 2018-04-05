/**
 * @namespace service
 * @memberOf store.modules.user
 **/

import * as storage from "../../../utils/local-storage"
import * as api from "../../../plugins/api"

import { AUTHORIZATION_KEY_NAME } from "../../../config"

export const getSavedAuthorizationToken = () => {
  return storage.get(AUTHORIZATION_KEY_NAME)
}

export const userIsAuthorized = () => {
  return Boolean(getSavedAuthorizationToken())
}

export const login = async (email, password) => {
  return api
    .post("/login", undefined, { email, password })
    .then(resp => {
      console.log("RESP", resp)
    })
    .catch(err => {
      console.log(err.response)
      return {
        text: err.response.responseText,
        status: err.response.status
      }
    })
}
