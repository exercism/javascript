/**
 * Double every card in the deck
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return deck.map((card) => card * 2);
}

/**
 *  Creates triplicates of every 3 found in the deck
 *
 * @param {number[]} deck
 *
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
 * Removes every card from the deck but the middle two
 * Assumes a deck is always 10 cards
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  // TODO: which implementation?
  // const middle = Math.floor(deck.length / 2)
  // return deck.slice(middle,  middle + 1)
  return deck.slice(4, 5);
}

/**
 * Moves the outside two cards to the middle
 *
 * @param {number[]} deck with 10 cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  const firstCard = deck.shift();
  const lastCard = deck.pop();
  return deck.splice(3, 0, lastCard, firstCard);
}

/**
 * Removes every card from the deck except 2s
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  return deck.filter((card) => card === 2);
}

/**
 * Returns a perfectly order deck from lowest to highest
 *
 * @param {number[]} shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  return deck.sort();
}

/**
 * Returns a deck with every card equal to the total number of cards
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck
 */
export function countingCards(deck) {
  return deck.fill(deck.length);
}
