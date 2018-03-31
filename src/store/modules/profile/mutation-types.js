/**
 * @namespace mutation-types
 * @memberOf store.modules.profile
 **/

import { makeOnce } from "../../../utils/mutation-types"

export const CHECK = makeOnce("check")
export const REGISTER = makeOnce("register")
export const LOGIN = makeOnce("logint")
export const LOGOUT = makeOnce("logout")
