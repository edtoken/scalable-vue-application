/**
 * @namespace state
 * @memberOf store.modules.user
 **/

/**
 * @property {boolean} authenticated
 * @memberOf store.modules.user.state
 */

import { makeCrudState } from "../../../utils/crud"

export default {
  token: false,
  profile: makeCrudState()
}
