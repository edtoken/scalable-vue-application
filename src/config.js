/**
 * @namespace config
 */

/**
 * @type {String}
 * @constant
 * @memberOf config
 **/
export const NODE_ENV = process.env.NODE_ENV || "production"

/**
 * @type {Boolean}
 * @constant
 * @memberOf config
 */
export const IS_DEVELOPMENT = NODE_ENV === "development"

/**
 * @type {Boolean}
 * @constant
 * @memberOf config
 */
export const DEBUG = NODE_ENV === "development"

/**
 * @type {Boolean}
 * @constant
 * @memberOf config
 */
export const STORE_LOGGING = DEBUG === true

/**
 * @type {Boolean}
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
 * @type {Boolean}
 * @constant
 * @memberOf config
 */
export const IS_BROWSER =
  typeof window !== "undefined" || typeof document !== "undefined"
