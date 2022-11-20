// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Return each Wagons id in form of an array.
 *
 * @param {number[]} eachWagonsID
 * @returns {number[]} each Wagons Wiegth
 */
 export function getListOfWagons(...eachWagonsID) {
  return eachWagonsID
}

/**
 * Reorder the array of wagons by moving the first 2 wagons to the end of the array.
 *
 * @param {number[]} eachWagonsID
 * @returns {number[]} reorderd list of wagons
 */
export function fixListOfWagons(eachWagonsID) {
  const [first, second, ...rest] = eachWagonsID;
  return [1, ...rest, first, second];
}

/**
 * Fixes the array of wagons by inserting an array of wagons after the first element in eachWagonsID.
 *
 * @param {number[]} eachWagonsID
 * @param {number[]} missingWagons
 * @returns {number[]} corrected list of wagons
 */
export function correctListOfWagons(eachWagonsID, missingWagons) {
  const [first, ...rest] = eachWagonsID;
  return [first, ...missingWagons, ...rest];
}

/**
 * Extend route information by adding another object
 *
 * @param {Record<string, string>} route
 * @param {Record<string, string>} moreRouteInformation
 * @returns {Record<string, string>} extended route information
 */
export function extendRouteInformation(route, moreRouteInformation) {
  return { ...route, ...moreRouteInformation };
}

/**
 * Separate arrival time from the route information object
 *
 * @param {Record<string, string>} route
 * @returns {[string, Record<string, string>]} array with arrival time and object without arrival time
 */
export function separateTimeOfArrival(route) {
  const { timeOfArrival, ...rest } = route;
  return [timeOfArrival, rest];
}