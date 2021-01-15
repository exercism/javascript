// @ts-check

import {
  getCardPosition,
  doesStackIncludeCard,
  isEachCardEven,
  doesStackIncludeOddCard,
  getFirstOddCard,
  getFirstEvenCardPosition,
} from './enchantments';

/**
 * @template T the expected return type
 * @typedef {Array<[number[], number, T]>} TestSingleMatrix
 */

/**
 * @template T the expected return type
 * @typedef {Array<[number[], T]>} TestAllMatrix
 **/

describe('elyses analytic enchantments', () => {
  describe('getCardPosition', () => {
    /** @type {TestSingleMatrix<number>} */
    const getCardPositionTestCases = [
      [[1, 2, 3], 1, 0],
      [[1, 2, 2], 2, 1],
      [[1, 2, 3], 4, -1],
    ];

    getCardPositionTestCases.forEach(([array, item, expected]) => {
      test(`getCardIndex([${array}], ${item})`, () => {
        expect(getCardPosition(array, item)).toStrictEqual(expected);
      });
    });
  });

  describe('doesStackIncludeCard', () => {
    /** @type {TestSingleMatrix<boolean>} */
    const doesStackIncludeCardTestCases = [
      [[1, 2, 3], 1, true],
      [[1, 2, 3], 4, false],
    ];

    doesStackIncludeCardTestCases.forEach(([array, item, expected]) => {
      test(`doesStackIncludeCard([${array}],${item})`, () => {
        expect(doesStackIncludeCard(array, item)).toBe(expected);
      });
    });
  });

  describe('isEachCardEven', () => {
    /** @type {TestAllMatrix<boolean>} */
    const isEachCardEvenTestCases = [
      [[1], false],
      [[2, 5], false],
      [[2, 4, 8, 6], true],
    ];

    isEachCardEvenTestCases.forEach(([array, expected]) => {
      test(`isEachCardEven([${array}])`, () => {
        expect(isEachCardEven(array)).toStrictEqual(expected);
      });
    });
  });

  describe('doesStackIncludeOddCard', () => {
    /** @type {TestAllMatrix<boolean>} */
    const doesStackIncludesOddCardTestCases = [
      [[2, 4, 6], false],
      [[2, 5], true],
      [[1, 3, 5, 7], true],
    ];

    doesStackIncludesOddCardTestCases.forEach(([array, expected]) => {
      test(`doesStackIncludeOddCard([${array}])`, () => {
        expect(doesStackIncludeOddCard(array)).toStrictEqual(expected);
      });
    });
  });

  describe('getFirstOddCard', () => {
    /** @type {TestAllMatrix<number | undefined>} */
    const getFirstOddCardTestCases = [
      [[2, 4, 1, 3], 1],
      [[1, 2], 1],
      [[4, 2, 6], undefined],
    ];

    getFirstOddCardTestCases.forEach(([array, expected]) => {
      test(`getFirstOddCard([${array}])`, () => {
        expect(getFirstOddCard(array)).toStrictEqual(expected);
      });
    });
  });

  describe('getFirstEvenCardPosition', () => {
    /** @type {TestAllMatrix<number>} */
    const getFirstEvenCardPositionTestCases = [
      [[2, 4, 1, 3], 0],
      [[1, 2], 1],
      [[1, 3, 5], -1],
    ];

    getFirstEvenCardPositionTestCases.forEach(([array, expected]) => {
      test(`getFirstEvenCardPosition([${array}])`, () => {
        expect(getFirstEvenCardPosition(array)).toStrictEqual(expected);
      });
    });
  });
});
