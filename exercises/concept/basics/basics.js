/**
 * The amount of minutes it takes to prepare a single layer.
 */
const PREPARATION_MINUTES_PER_LAYER = 2

/**
 * Determine the amount of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
 *
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 */
export function remainingMinutesInOven(actualMinutesInOven) {
  throw new Error('Please implement the remainingMinutesInOven method')
}

/**
 * Given a number of layers, determine the total preparation time.
 *
 * @param {number} numberOfLayers
 * @returns {number} the total preparation time
 */
export function preparationTimeInMinutes(numberOfLayers) {
  throw new Error('Please implement the preparationTimeInMinutes method')
}

/**
 * Calculate the total working time. That is, the time to prepare all the layers
 * of lasagna, and the time already spent in the oven.
 *
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number} the total working time
 */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  throw new Error('Please implement the totalTimeInMinutes method')
}
