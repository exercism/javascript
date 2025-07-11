// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

export class ElectronicDevice {
  // This class will be used in the exercise.
}
/**
 * Checks if input is a boolean.
 *
 * @param {unknown} value
 * @returns {value is boolean} whether the input is a boolean
 */
export function isBoolean(value) {
  return typeof value === 'boolean';
}

/**
 * Checks if input is a finite number or bigint.
 *
 * @param {unknown} value
 * @returns {value is number | bigint} whether the input is a finite number or bigint
 */
export function isNumber(value) {
  return (
    (typeof value === 'number' || typeof value === 'bigint') &&
    !isNaN(value) &&
    value !== Infinity
  );
}

/**
 * Checks if a value is an object.
 *
 * @param {unknown} value
 * @returns {value is object} whether the input is an object.
 */
export function isObject(value) {
  return value !== null && typeof value === 'object';
}

/**
 * Checks if a value is a numeric string.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a numeric string.
 */
export function isNumericString(value) {
  return (
    typeof value === 'string' &&
    value.split('').every((char) => {
      return /[0-9]/.test(char);
    })
  );
}

/**
 * Checks if an object is an instance of the "ElectronicDevice" class or one of its children.
 *
 * @param {object} object
 * @returns {boolean} whether the object is an instance of the "ElectronicDevice" class or one of its children.
 */
export function isElectronic(object) {
  return object instanceof ElectronicDevice;
}

/**
 * Checks if a value is a non empty array.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a non empty array.
 */
export function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

/**
 * Checks if a value is an empty array.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is an empty array.
 */
export function isEmptyArray(value) {
  return Array.isArray(value) && value.length === 0;
}

/**
 * Throws an error if an object is missing an "id" property or method.
 *
 * @param {object} object
 * @returns {boolean} undefined if the input has an "id" property, otherwise throws an error.
 */
export function assertHasId(object) {
  if ('id' in object) {
    return;
  }
  throw new Error('The "id" property is missing.');
}

/**
 * Checks if a value has a "type" property or method.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a "type" property.
 */
export function hasType(object) {
  return 'type' in object;
}

/**
 * Checks if a value has a "id" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a "id" property.
 */
export function hasIdProperty(object) {
  return Object.hasOwn(object, 'id');
}

/**
 * Checks if a value has a defined "type" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a defined "type" property.
 */
export function hasDefinedType(object) {
  return Object.hasOwn(object, 'type') && object.type !== undefined;
}
