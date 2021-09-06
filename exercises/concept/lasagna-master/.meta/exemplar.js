/// <reference path="../global.d.ts" />
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
    return 'You forgot to set the timer.';
  }

  if (time === 0) {
    return 'Lasagna is done.';
  }

  return 'Not done, please wait.';
}

/**
 * Estimates the preparation time based on the number of layers.
 *
 * @param {string[]} layers
 * @param {number} avgPrepTime
 * @returns {number} total preparation time
 */
export function preparationTime(layers, avgPrepTime = 2) {
  return layers.length * avgPrepTime;
}

/**
 * Calculates how many noodles and much sauce are needed for the
 * given layers.
 *
 * @param {string[]} layers
 * @returns {Quantities} quantities needed for the given layers
 */
export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;

  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === 'noodles') {
      noodles += 50;
    }

    if (layers[i] === 'sauce') {
      sauce += 0.2;
    }
  }

  return { noodles, sauce };
}

/**
 * Adds the secret ingredient from the ingredient list that a
 * friend provided to your ingredient list.
 *
 * @param {string[]} friendsList
 * @param {string[]} myList
 */
export function addSecretIngredient(friendsList, myList) {
  const lastIndex = friendsList.length - 1;
  myList.push(friendsList[lastIndex]);
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
  const factor = targetPortions / 2;
  const result = {};

  for (const key in recipe) {
    result[key] = recipe[key] * factor;
  }

  return result;
}
