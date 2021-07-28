// @ts-check

/**
 * Determines whether the lasagna is done based on the
 * remaining time on the timer.
 *
 * @param {number} time time left on the timer
 * @returns {string} cooking status
 */
export function cookingStatus(time) {
  if (time === undefined) {
    return 'You forgot to set the timer.'
  }

  if (time === 0) {
    return 'Lasagna is done.'
  }

  return 'Not done, please wait.'
}
