/**
 * @module utils/mutation-types
 * @memberOf utils
 */

/**
 * unique action prefix
 *
 * @type {number}
 * @private
 *
 */
let _UNIQUE_ID = 0

/**
 * @typedef {object} MutationTypeObject
 *
 * @property {string} PENDING - `crud/pending/id${_UNIQUE_ID}/${typeName}`
 * @property {string} SUCCESS - `crud/success/id${_UNIQUE_ID}/${typeName}`
 * @property {string} ERROR - `crud/error/id${_UNIQUE_ID}/${typeName}`
 *
 */

/**
 * Making new single unique mutation-type name.
 *
 * @static
 * @public
 * @function
 *
 * @param {string} typeName - Non unique mutation typeName string name, for example rest-api url.
 * @returns {string} - `once/id${_UNIQUE_ID}/${typeName}`
 *
 * @example
 * import { makeOnce } from 'helpers/mutation-types'
 * const mutationType = makeOnce('name') // returns `once/id${_UNIQUE_ID}/${typeName}`
 */
export const makeOnce = typeName => {
  return `once/id${_UNIQUE_ID}/${typeName}`
}

/**
 * Making new unique mutation-type names object.
 *
 * @static
 * @public
 * @function
 *
 * @param {string} typeName - Non unique mutation typeName string name, for example rest-api url.
 *
 * @returns {Readonly<MutationTypeObject>}
 */
export const make = typeName => {
  _UNIQUE_ID += 1

  const PENDING = `pending/id${_UNIQUE_ID}/${typeName}`
  const SUCCESS = `success/id${_UNIQUE_ID}/${typeName}`
  const ERROR = `error/id${_UNIQUE_ID}/${typeName}`

  return Object.freeze(
    Object.create(
      {
        toString,
        valueOf: toString
      },
      {
        PENDING: PENDING,
        SUCCESS: SUCCESS,
        ERROR: ERROR
      }
    )
  )
}

/**
 * Parsing MutationTypeObject and returns origin value.
 *
 * @static
 * @public
 * @function
 *
 * @param {MutationTypeObject|string} mutationType - MutationTypeObject or makeOnce result, or string.
 * @returns {string}
 *
 * @example
 * const mutationTypeName = make('users') // MutationTypeObject
 * const mutationType = parse(mutationTypeName) // returns 'users'
 *
 */
export const parse = mutationType => {
  return ("" + mutationType)
    .split("/")
    .slice(2)
    .join("/")
}
