import {
  determineUniqueCards,
  determineOddEvenCards,
  cardTypeCheck,
} from './array-loops.js';

/**
 * @template T the expected return type
 * @typedef {Array<[number[], number, T]>} TestSingleMatrix
 */

/**
 * @template T the expected return type
 * @typedef {Array<[number[], T]>} TestAllMatrix
 **/

describe('array-loops', () => {
  describe('cardTypeCheck', () => {
    /** @type {TestSingleMatrix<number>} */
    const cardTypeCheckTests = [
      [[1, 2, 3, 4, 6, 7], 4, 1],
      [[1, 2, 2, -3, -4, -4, 2], 2, 3],
      [[1, 2, 3], 4, 0],
    ];

    cardTypeCheckTests.forEach(([array, card, expected]) => {
      test(`cardTypeCheck([${array}], ${card})`, () => {
        expect(cardTypeCheck(array, card)).toStrictEqual(expected);
      });
    });
  });

  describe('uniqueCards', () => {
    /** @type {Array<Array<Array<number>, boolean, number>>>} */
    const oddEvenCardsTestCases = [
      [[1, 2, 3], true, 1],
      [[1, 2, 3, -1, 32, 1, 2, 3], false, 2],
    ];

    oddEvenCardsTestCases.forEach(([array, isEven, expected]) => {
      test(`oddEvenCards([${array}], isEven)`, () => {
        expect(determineOddEvenCards(array, isEven)).toBe(expected);
      });
    });
  });

  describe('oddEvenCards', () => {
    /** @type {Array<Array} */
    const uniqueCardTestCases = [
      [[1, 2, 3], true, 3],
      [[1, 2, 3, -1, 32, 1, 2, 3], 2],
    ];

    uniqueCardTestCases.forEach(([array, expected]) => {
      test(`uniqueCards([${array}])`, () => {
        expect(determineUniqueCards(array)).toBe(expected);
      });
    });
  });
});
