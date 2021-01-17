// @ts-check

/**
 * The two array of number
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} Sum of two number
 */

export function twoSum(array1, array2) {
  let firstNumber = array1.join('');
  let secondNumber = array2.join('');

  return Number(firstNumber) + Number(secondNumber);
}

/**
 * @param {number} value The number to check if the number is lucky or not
 * @returns {boolean}  whether the number is lucky or not
 */

export function luckyNumber(value) {
  let strValue = String(value);
  return strValue === strValue.split('').reverse().join('');
}

/**
 * @param {number} value The number to add dashes
 * @returns {string} String after dashifying the number
 */

export function dashify(value) {
  let strValue = String(value);
  return strValue.split('').join('-');
}
