// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return deck.map((card) => card * 2);
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  return deck.reduce((newDeck, card) => {
    if (card === 3) {
      newDeck.push(3, 3, 3);
    } else {
      newDeck.push(card);
    }
    return newDeck;
  }, []);
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  return deck.slice(4, 6);
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  const firstCard = deck.shift();
  const lastCard = deck.pop();
  const mid = deck.length / 2;
  deck.splice(mid, 0, lastCard, firstCard);
  return deck;
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  return deck.filter((card) => card === 2);
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  return deck.sort((a, b) => a - b);
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  return deck.reverse();
}
