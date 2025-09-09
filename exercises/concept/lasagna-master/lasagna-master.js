/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */


/**
 * Determines whether the lasagna is done based on the
 * remaining time on the timer.
 *
 * @param {number} time time left on the timer
 * @returns {string} cooking status
 */
export function cookingStatus(time) {
  throw new Error('Remove this line and implement the function');
}

/**
 * Estimates the preparation time based on the number of layers.
 *
 * @param {string[]} layers
 * @param {number} avgPrepTime
 * @returns {number} total preparation time
 */
export function preparationTime(layers, avgPrepTime = 2) {
  throw new Error('Remove this line and implement the function');
}

/**
 * Calculates how many noodles and much sauce are needed for the
 * given layers.
 *
 * @param {string[]} layers
 * @returns {Quantities} quantities needed for the given layers
 */
export function quantities(layers) {
  throw new Error('Remove this line and implement the function');
}

/**
 * Adds the secret ingredient from the ingredient list that a
 * friend provided to your ingredient list.
 *
 * @param {string[]} friendsList
 * @param {string[]} myList
 */
export function addSecretIngredient(friendsList, myList) {
  throw new Error('Remove this line and implement the function');
}

/**
 * Calculates the amounts of ingredients needed for a certain
 * amount of portions.
 * Assumes the original amounts were meant for 2 portions.
 * Does not modify the original recipe.
 *
 * @param {Record<string, number>} recipe
 * @param {number} targetPortions
 * @returns {Record<string, number>|{}} recipe with amounts for target portions
 */
export function scaleRecipe(recipe, targetPortions) {
  throw new Error('Remove this line and implement the function');
}
