// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when 
// implementing this exercise.

/**
 * Respond with the correct character, given the blurb, if this were said at
 * the front door.
 *
 * @param {string} blurb
 * @returns {string}
 */
export function frontDoorResponse(blurb) {
  throw new Error('Implement the frontDoorResponse function');
}

/**
 * Respond with the correct character, given the blurb, if this were said at
 * the back door.
 *
 * @param {string} blurb
 * @returns {string}
 */
export function backDoorResponse(blurb) {
  throw new Error('Implement the backDoorResponse function');
}

/**
 * Capitalizes a word, meaning only the first character is a capital, and the
 * remaining letters are lower case.
 *
 * @param {string} word
 * @returns {string}
 */
function capitalize(word) {
  throw new Error('Implement the capitalize function');
}

/**
 * Give the password for the front-door, given the responses.
 *
 * @param {string} responses the responses
 * @returns {string} the password
 */
export function frontDoorPassword(responses) {
  return capitalize(responses);
}

/**
 * Give the password for the back-door, given the responses.
 *
 * @param {string} responses the responses
 * @returns {string} the password
 */
export function backDoorPassword(responses) {
  return capitalize(responses);
}
