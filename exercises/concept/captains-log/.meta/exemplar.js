// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  return `NCC-${Math.floor(1000 + Math.random() * 9000)}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return 41000 + Math.random() * 1000;
}

const PLANET_CLASSES = 'DHJKLMNRTY';

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  return PLANET_CLASSES[Math.floor(Math.random() * PLANET_CLASSES.length)];
}
