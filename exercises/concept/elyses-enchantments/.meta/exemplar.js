// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Retrieve card from array at position index
 *
 * @param {number[]} array
 * @param {number} index
 *
 * @returns {number} Value of card retrieved
 */
export function getItem(array, index) {
  return array[index];
}

/**
 * Exchange card from array with newCard at position index
 *
 * @param {number[]} array
 * @param {number} index
 * @param {number} newCard
 *
 * @returns {number[]} Array after exchanged card with newCard
 */
export function setItem(array, index, newCard) {
  array[index] = newCard;
  return array;
}

/**
 * Insert newCard at the end of array
 *
 * @param {number[]} array
 * @param {number} newCard
 *
 * @returns {number[]} Array after newCard inserted
 */
export function insertItemAtTop(array, newCard) {
  array.push(newCard);
  return array;
}

/**
 * Remove card from array at position index
 *
 * @param {number[]} array
 * @param {number} index
 *
 * @returns {number[]} Array after card removed
 */
export function removeItem(array, index) {
  array.splice(index, 1);
  return array;
}

/**
 * Remove card from the end of array
 *
 * @param {number[]} array
 *
 * @returns {number[]} Array after card removed
 */
export function removeItemFromTop(array) {
  array.pop();
  return array;
}

/**
 * Insert newCard at beginning of array
 *
 * @param {number[]} array
 * @param {number} newCard
 *
 * @returns {number[]} Array after newCard inserted
 */
export function insertItemAtBottom(array, newCard) {
  array.unshift(newCard);
  return array;
}

/**
 * Remove card from the beginning of array
 *
 * @param {number[]} array
 *
 * @returns {number[]} Array after card removed
 */
export function removeItemAtBottom(array) {
  array.shift();
  return array;
}

/**
 * Check the size of array, Does it equals to stackSize
 *
 * @param {number[]} array
 * @param {number} stackSize
 *
 * @returns {boolean} Whether the size of array equals to stackSize
 */
export function checkSizeOfStack(array, stackSize) {
  return array.length === stackSize;
}
