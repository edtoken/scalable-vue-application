/**
 * @module vuex
 * @memberOf utils
 */

import deepCopy from "deep-copy"

const defaultCrudState = {
  time: undefined, // last action time
  status: undefined, // pending/success/error
  payload: undefined,
  idKey: undefined,

  get isFetching() {
    return this.status === "pending"
  },

  get hasError() {
    return this.status === "error"
  },

  get errorText() {
    return !this.hasError ? "" : String(this.source)
  }
}

export const makeCrudState = (idKey = undefined) => {
  return { ...deepCopy(defaultCrudState), ...{ idKey } }
}
