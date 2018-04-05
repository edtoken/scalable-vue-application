/**
 * implement Rest api methods
 *
 * @namespace api
 * @memberOf plugins
 *
 * @example
 * import { api } from 'plugins'
 *
 * const request = api.get('api').then(resp => {
 *  // work with server response
 * }).catch(resp => {
 *  // work with server exception
 * })
 **/

import axios from "axios"

import { BACKEND_ENDPOINT, FORCE_BACKEND_HTTPS, IS_BROWSER } from "../config"

/**
 * Returns backend api url. [BACKEND_ENDPOINT]{@link config.exports.BACKEND_ENDPOINT}
 *
 * @function
 * @static
 * @private
 * @memberOf plugins.api
 *
 * @example
 * const url = getBackendapiUrl() // returns '//config.BACKEND_ENDPOINT'
 *
 * @example
 * const url = getBackendapiUrl('path') // returns '//config.BACKEND_ENDPOINTpath'
 *
 * @param {string} path - [path=""] - backend url path
 * @return {string} - Backend api url
 **/
const getBackendapiUrl = (path = "") => {
  return `${FORCE_BACKEND_HTTPS ? "https://" : "//"}${BACKEND_ENDPOINT}${path}`
}

/**
 * Replace params in string.
 *
 * @private
 * @function
 * @memberOf plugins.api
 *
 * @example
 * const url = replaceUrlParams('api/:brand_id', {brand_id:5})
 * // returns 'api/5'
 *
 * @param {string} url - Calling url.
 * @param {Object} params - Query params.
 *
 * @return {string} - New line with parameter substitution.
 **/
export const replaceUrlParams = (url, params) => {
  return url.replace(/:[_|A-z]+/g, match => {
    const matchedParam = match.substr(1)
    const value = params[matchedParam]
    const valueIsUndefined = typeof value === "undefined"

    if (valueIsUndefined) {
      console.warn(
        `Matched param "${matchedParam}" is not presented at given object, url ${url}, params ${JSON.stringify(
          params
        )}`
      )
    }
    return valueIsUndefined ? "" : value
  })
}

/**
 * Instance of axios
 *
 * @private
 * @constant
 * @memberOf plugins.api
 * @type {AxiosInstance}
 **/
const apiInstance = axios.create({
  baseURL: `${getBackendapiUrl()}`
})

// apiInstance.interceptors.use([
//   resp =>
// ])

/**
 *
 * @function
 * @static
 * @private
 * @memberOf plugins.api
 *
 * @param {string} method - Type of call method.
 * @return {Promise} - Axios promise.
 */
const createRequest = method => {
  const req = function(url, params = {}, data = {}) {
    let headers = {}

    // if (url !== 'login') {
    //   headers['Authorization'] = `Bearer ${getStorageValue(
    //     'AuthorizationToken'
    //   )}`
    // }

    const normalizedUrl = replaceUrlParams(url, { ...params, ...data })

    return apiInstance.request({
      method,
      headers,
      url: normalizedUrl,
      data,
      params
    })
  }

  return req
}

/**
 * =====================================================================================================================
 * EXPORTING api METHODS
 * =====================================================================================================================
 */

/**
 * GET
 *
 * @function
 * @memberOf plugins.api
 *
 * @example
 * import { api } from 'plugins'
 * const request = api.get(URL, {query}) // calling to URL?queryToString
 *
 * @example
 * import { get } from 'plugins/api'
 * const request = get(URL, {query}) // calling to URL?queryToString
 *
 *
 * @param {String} url - calling url
 * @param {Object} query - query object
 *
 * @return {Promise} - axios promise, ajax call to getBackendapiUrl('queryString')
 *
 **/
export const get = createRequest("get")

/**
 * api put call
 *
 * @function
 * @memberOf plugins.api
 *
 * @example
 * import { api } from 'plugins'
 * const request = api.put(URL, {body})
 *
 * @param {String} url - calling url
 * @param {Object} params - query params
 * @param {Object} body - body of request
 *
 * @return {Promise}
 **/
export const put = createRequest("put")

/**
 * api post call
 *
 * @function
 * @memberOf plugins.api
 *
 * @example
 * import { api } from 'plugins'
 * const request = api.post('url', params)
 *
 * @param {String} url - calling url
 * @param {Object} params - query params
 * @param {Object} body - body of request
 *
 * @return {Promise}
 **/
export const post = createRequest("post")

/**
 * api delete call
 *
 * @function
 * @memberOf plugins.api
 *
 * @example
 * import { api } from 'plugins'
 * const request = api.del('entity')
 *
 * @example
 * import { api } from 'plugins'
 * const request = api.del('entity/5')
 *
 * @param {String} url - calling url
 * @return {Promise}
 **/
export const del = createRequest("del")

/**
 * api json (form data with files) call
 *
 * @function
 * @memberOf plugins.api
 *
 * @param {String} url - calling url
 * @param {Object} params - query params
 * @param {Object} body - body of request
 *
 * @return {Promise}
 **/
export const json = createRequest("json")

/**
 * extend window object, for implement global api calling
 */
if (IS_BROWSER) {
  Object.assign(window, {
    Restapi: {
      get,
      put,
      post,
      del,
      json
    }
  })
}
