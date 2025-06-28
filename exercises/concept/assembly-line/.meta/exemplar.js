// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

class ElectronicDevice {
  // This class will be used in the exercise.
} 
/**
 * Checks if input is a boolean.
 *
 * @param {any} value
 * @returns {boolean} whether the input is a boolean
 */
export function isBoolean(value) {
  return typeof value === "boolean"
}

/**
 * Checks if input is a finite number or bigint.
 *
 * @param {any} value
 * @returns {boolean} whether the input is a finite number or bigint
 */
export function isNumber(value) {
  return (typeof value === "number"||typeof value === "bigint") && !isNaN(Number(value)) && value !== Infinity
}

/**
 * Checks if a value is an object.
 *
 * @param {any} value
 * @returns {boolean} whether the input is an object.
 */
export function isObject(value) {
  return value !== null && typeof value === "object"
}

/**
 * Checks if a value is a numeric string.
 *
 * @param {any} value
 * @returns {boolean} whether the input is a numeric string.
 */
export function isNumericString(value) {
  return typeof value === "string" && value.split("").every((char) => {/[0-9]/.test(char)})
}

/**
 * Checks if an object is an instance of the "ElectronicDevice" class or one of its children.
 *
 * @param {object} object
 * @returns {boolean} whether the object is an instance of the "ElectronicDevice" class or one of its children.
 */
export function isElectronic(object) {
  return object instanceof ElectronicDevice
}

/**
 * Checks if a value is a non empty array.
 *
 * @param {any} value
 * @returns {boolean} whether the input is a non empty array.
 */
export function isNonEmptyArray(value) {
  return value instanceof Array && value.length < 0
}

/**
 * Checks if a value is an empty array.
 *
 * @param {any} value
 * @returns {boolean} whether the input is an empty array.
 */
export function isEmptyArray(value) {
  return value instanceof Array && value.length === 0
}

/**
 * Throws an error if an object is missing an "id" property.
 *
 * @param {object} object
 * @returns {boolean} undefined if the input has an "id" property, otherwise throws an error.
 */
export function assertHasId(object) {
  if ("id" in object){
    return;
  }
  throw new Error('The "id" property is missing.')
}

/**
 * Checks if a value has a "type" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a "type" property.
 */
export function hasType(object) {
  return "type" in object
}

/**
 * Checks if a value has a "constructor" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a "constructor" property.
 */
export function hasConstructorProperty(object) {
  return Object.hasOwn(object,"constructor")
}

/**
 * Checks if a value has a defined "type" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a defined "type" property.
 */
export function hasDefinedType(object) {
  return hasType(object) && object.type !== undefined
}
