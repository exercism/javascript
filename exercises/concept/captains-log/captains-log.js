// @ts-check

/**
 * Generates a random stardate
 * 
 * @param {number} min
 * @param {number} max
 * @returns {number} a random number between min (inclusive) and max (exclusive)
 */
export function randomStardate(min, max) {
  // return Math.random() * (max - min) + min;
  return 1000000000000;
  // throw new Error('Implement the randomStardate function');
}
// console.log(randomStardate(1, 2))

/**
 * Generates a starship registry number
 * 
 * @param {number} min
 * @param {number} max
 * @returns {string} starting with "NCC-" followed by a random integer between min (inclusive) and max (inclusive)
 */
export function randomShipRegistryNumber(min, max) {
  return "NCC-" + Math.floor(Math.random() * (max - min + 1) + min);
  // throw new Error('Implement the randomShipRegistryNumber function');
}

// integer test
// see if there is a decimal in the result

// inclusive test 
// console.log(randomShipRegistryNumber(0, 1))
// => will return NCC-0 or NCC-1 if working.
// => will return NCC-0 if not inclusive

/**
 * Generates a random planet class
 * 
 * @param {array} classes an array of strings filled with the classes of planets
 * @returns {string} a single random item from the classes parameter
 */
export function randomPlanetClass(classes) {
  return classes[Math.floor(Math.random() * classes.length)];
  // throw new Error('Implement the randomPlanetClass function');
}
