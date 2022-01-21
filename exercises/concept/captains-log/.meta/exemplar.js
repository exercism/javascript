// @ts-check

/**
 * Generates a random stardate
 * 
 * @param {number} min
 * @param {number} max
 * @returns {number} a random number between min (inclusive) and max (exclusive)
 */
export function randomStardate(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Generates a starship registry number
 * 
 * @param {number} min
 * @param {number} max
 * @returns {string} starting with "NCC-" followed by a random integer between min (inclusive) and max (inclusive)
 */
export function randomShipRegistryNumber(min, max) {
  return "NCC-" + Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Generates a random planet class
 * 
 * @param {array} classes an array of strings filled with the classes of planets
 * @returns {string} a single random item from the classes parameter
 */
export function randomPlanetClass(classes) {
  return classes[Math.floor(Math.random() * classes.length)];
}
