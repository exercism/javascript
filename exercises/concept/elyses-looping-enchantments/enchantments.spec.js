import {
  determineUniqueCards,
  determineOddEvenCards,
  cardTypeCheck,
} from './enchantments';

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

  describe('oddEvenCards', () => {
    /** @type {Array<Array<Array<number>, boolean, number>>>} */
    const oddEvenCardsTestCases = [
      [[1, 2, 3], true, 1],
      [[1, 2, 3, -1, 32, 1, 2, 3], false, 4],
    ];

    oddEvenCardsTestCases.forEach(([array, isEven, expected]) => {
      test(`determineOddEvenCards([${array}], isEven)`, () => {
        expect(determineOddEvenCards(array, isEven)).toBe(expected);
      });
    });
  });

  describe('uniqueCards', () => {
    /** @type {Array<Array} */
    const uniqueCardTestCases = [
      [[1, 2, 3], 3],
      [[1, 2, 3, -1, 32, 1, 2, 3], 5],
    ];

    uniqueCardTestCases.forEach(([array, expected]) => {
      test(`determineUniqueCards([${array}])`, () => {
        expect(determineUniqueCards(array)).toBe(expected);
      });
    });
  });
});
