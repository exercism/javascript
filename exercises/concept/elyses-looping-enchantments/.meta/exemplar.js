// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let count = 0;

  stack.forEach((c) => {
    c === card && count++;
  });

  return count;
}

/**
 * Determine if there are any unique cards in the stack
 *
 * @param {number[]} stack
 *
 * @returns {number} the number of unique cards there any in the stack
 */
export function determineUniqueCards(stack) {
  return stack.filter((card, index, self) => self.indexOf(card) === index)
    .length;
}

/**
 * Determine if each card is even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for–odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let count = 0;

  for (const card of stack) {
    if (card % 2 === (type ? 0 : 1)) {
      count++;
    }
  }

  return count;
}
