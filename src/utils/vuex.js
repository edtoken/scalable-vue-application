/**
 * @module utils/vuex
 * @memberOf utils
 */

// const defaultCrudState = {
//   time: undefined, // last action time
//   status: undefined, // pending/success/error
//   payload: {},
//   source: {},
//   idKey: "",
//
//   get isFetching() {
//     return this.status === "pending"
//   },
//
//   get hasError() {
//     return this.status === "error"
//   },
//
//   get errorText() {
//     return !this.hasError ? "" : String(this.source)
//   }
// }

const defaultPrepareRequest = () => {}

const defaultPrepareResponse = resp => {
  return resp
}
/**
 *
 * @param {string} resource
 * @param {function} prepareRequest
 * @param {function} prepareResponse
 */
export const makeCrudActions = ({
  resource,
  prepareRequest = defaultPrepareRequest,
  prepareResponse = defaultPrepareResponse
}) => {
  console.log(resource)
  console.log(prepareRequest)
  console.log(prepareResponse)
}
