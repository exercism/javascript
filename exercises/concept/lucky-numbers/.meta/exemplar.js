// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {string[]} array1
 * @param {string[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const firstNumber = array1.join('');
  const secondNumber = array2.join('');

  return Number(firstNumber) + Number(secondNumber);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const strValue = String(value);

  return strValue === strValue.split('').reverse().join('');
}

/**
 * Returns an error message if the input does not contain any characters.
 * 
 * @param {string|null|undefined} input 
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) {
    return 'This field is required.';
  }

  return '';
}
