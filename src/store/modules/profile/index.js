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
 * @property {boolean} namespaced=true
 * @property {module} actions [actions]{@link store.modules.profile.actions}
 * @property {module} getters [getters]{@link store.modules.profile.getters}
 * @property {module} mutations [mutations]{@link store.modules.profile.mutations}
 * @property {module} state [state]{@link store.modules.profile.state}
 *
 * @memberOf store.modules.profile
 */
export { namespaced, actions, getters, mutations, state }
