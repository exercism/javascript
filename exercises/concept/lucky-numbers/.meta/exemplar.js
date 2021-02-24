// @ts-check

/**
 * Calculates the sum of the two input arrays
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */

export function twoSum(array1, array2) {
  const firstNumber = array1.join('');
  const secondNumber = array2.join('');

  return Number(firstNumber) + Number(secondNumber);
}

/**
 * @param {number} value The number to check if the number is lucky or not
 * @returns {boolean}  whether the number is lucky or not
 */

export function luckyNumber(value) {
  const strValue = String(value);

  return strValue === strValue.split('').reverse().join('');
}

/**
 * @param {number} value The number to add dashes
 * @returns {string} String after dashifying the number
 */

export function dashify(value) {
  const strValue = String(value);

  return strValue.split('').join('-');
}
