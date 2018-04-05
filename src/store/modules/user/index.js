/**
 * @namespace profile
 * @memberOf store.modules
 */

import * as actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"
import state from "./state"

const namespaced = true

/**
 * @property {boolean} [namespaced=true]
 * @property {module} actions [actions]{@link store.modules.user.actions}
 * @property {module} getters [getters]{@link store.modules.user.getters}
 * @property {module} mutations [mutations]{@link store.modules.user.mutations}
 * @property {module} state [state]{@link store.modules.user.state}
 *
 * @memberOf store.modules.user
 */
export { namespaced, actions, getters, mutations, state }
