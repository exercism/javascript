/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  return "NCC-"+Math.floor(1000 + Math.random()*9000)
}
export function randomStardate() {
  return 41000 + Math.random() * 1000
}
export function randomPlanetClass() {
  const planetClasses = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y']
  return planetClasses[Math.floor(Math.random() * 10)]
}
