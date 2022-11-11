// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Return each Wagons Wiegth.
 *
 * @param {number[]} eachWagonsWiegth
 * @returns {number[]} each Wagons Wiegth
 */
 export function getListOfWagons(...eachWagonsWiegth) {
  return eachWagonsWiegth;
}

/**
 * Reorder the array of wagons by moving the first 2 wagons to the end of the array.
 *
 * @param {number[]} eachWagonsWieght
 * @returns {number[]} reorderd list of wagons
 */
export function fixListOfWagons(eachWagonsWieght) {
  const [first, second, ...rest] = eachWagonsWieght;
  return [...rest, first, second];
}

/**
 * Fixes the list of wagons by inserting an array of wagons after the first element in eachWagonsWieght.
 *
 * @param {number[]} eachWagonsWieght
 * @param {number[]} missingWagons
 * @returns {number[]} corrected list of wagons
 */
export function correctListOfWagons(eachWagonsWieght, missingWagons) {
  const [first, ...rest] = eachWagonsWieght;
  return [first, ...missingWagons, ...rest];
}

/**
 * Updates the route information by adding more routing information
 *
 * @param {Record<string, string>} route
 * @param {Record<string, string>} moreRouteInformation
 * @returns {Record<string, string>} updates route information
 */
export function updateRoutingInformation(route, moreRouteInformation) {
  return { ...route, ...moreRouteInformation };
}

/**
 * Remove arrival time from the route information object
 *
 * @param {Record<string, string>} route
 * @returns {Record<string, string>} object without arrival time
 */
export function removeTimeOfArrival(route) {
  const { arrivalTime, ...rest } = route;
  return rest;
}