/**
 * @namespace config
 */

/**
 * @type {string}
 * @constant
 * @memberOf config
 **/
export const NODE_ENV = process.env.NODE_ENV || "production"

/**
 * @type {boolean}
 * @constant
 * @memberOf config
 */
export const IS_DEVELOPMENT = NODE_ENV === "development"

/**
 * @type {boolean}
 * @constant
 * @memberOf config
 */
export const DEBUG = NODE_ENV === "development"

/**
 * @type {boolean}
 * @constant
 * @memberOf config
 */
export const STORE_LOGGING = DEBUG === true

/**
 * @type {boolean}
 * @constant
 * @memberOf config
 */
export const IS_MOBILE =
  typeof navigator === "undefined"
    ? false
    : /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
        navigator.userAgent.toLowerCase()
      )

/**
 * @type {boolean}
 * @constant
 * @memberOf config
 */
export const IS_BROWSER =
  typeof window !== "undefined" || typeof document !== "undefined"

/**
 * @type {boolean}
 * @constant
 * @memberOf config
 */
export const IS_BROWSER_BUILD = Boolean(process.BROWSER_BUILD)

/**
 * @type {string}
 * @constant
 * @memberOf config
 * @returns process.env.BACKEND_ENDPOINT || "localhost:8080"
 */
export const BACKEND_ENDPOINT = process.env.BACKEND_ENDPOINT || "reqres.in/api"

/**
 *
 * @type {boolean}
 * @constant
 * @memberOf config
 * @returns true
 */
export const FORCE_BACKEND_HTTPS = true

/**
 * @type {[string]}
 * @constant
 * @memberOf config
 */
export const NON_AUTHORIZE_ROUTES = ["login"]

/**
 * @type {string}
 * @constant
 * @memberOf config
 */
export const AUTHORIZATION_KEY_NAME = "Authorization"
