// @ts-check

/**
 * @template T
 * @template Expected
 * @typedef {[T, Expected]} TestCase
 */

/**
 * @template T
 * @template Expected
 * @typedef {TestCase<T, Expected>[]} TestCases
 */

import {
  seeingDouble,
  threeOfEachThree,
  middleTwo,
  sandwichTrick,
  twoIsSpecial,
  perfectlyOrdered,
  countingCards,
} from './enchantments';

describe('array', () => {
  describe('seeingDouble', () => {
    /** @type {TestCases<number[], number[]>} */
    const seeingDoubleTestCases = [
      [[], []],
      [[3], [6]],
      [
        [1, 2, 3, 4],
        [2, 4, 6, 8],
      ],
      [
        [2, 5, 1, 9],
        [4, 10, 2, 18],
      ],
    ];

    seeingDoubleTestCases.forEach(([deck, expected]) => {
      test(`seeingDouble([${deck}])`, () => {
        expect(seeingDouble(deck)).toStrictEqual(expected);
      });
    });
  });

  describe('threeOfEachThree', () => {
    /** @type {TestCases<number[], number[]>} */
    const threeOfEachThreeTestCases = [
      [[], []],
      [[3], [3, 3, 3]],
      [[2], [2]],
      [
        [1, 3, 9, 3, 7],
        [1, 3, 3, 3, 9, 3, 3, 3, 7],
      ],
    ];

    threeOfEachThreeTestCases.forEach(([deck, expected]) => {
      test(`threeOfEachThree([${deck}])`, () => {
        expect(threeOfEachThree(deck)).toStrictEqual(expected);
      });
    });
  });

  describe('middleTwo', () => {
    /** @type {TestCases<number[], number[]>} */
    const middleTwoTestCases = [
      [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [5, 6],
      ],
      [
        [12, 2, 36, 45, 15, 96, 27, 86, 1, 29],
        [15, 96],
      ],
    ];

    middleTwoTestCases.forEach(([deck, expected]) => {
      test(`middleTwo([${deck}])`, () => {
        expect(middleTwo(deck)).toStrictEqual(expected);
      });
    });
  });

  describe('sandwichTrick', () => {
    /** @type {TestCases<number[], number[]>} */
    const sandwichTrickTestCases = [
      [
        [1, 2, 3, 5, 6, 10],
        [2, 3, 10, 1, 5, 6],
      ],
      [
        [12, 3, 5, 87],
        [3, 87, 12, 5],
      ],
    ];

    sandwichTrickTestCases.forEach(([deck, expected]) => {
      test(`sandwichTrick([${deck}])`, () => {
        expect(sandwichTrick(deck)).toStrictEqual(expected);
      });
    });
  });

  describe('twoIsSpecial', () => {
    /** @type {TestCases<number[], number[]>} */
    const twoIsSpecialTestCases = [
      [[], []],
      [[1, 9, 1], []],
      [[1, 2, 9, 1], [2]],
      [
        [121, 22, 9, 12, 2, 2, 2, 23, 2],
        [2, 2, 2, 2],
      ],
    ];

    twoIsSpecialTestCases.forEach(([deck, expected]) => {
      test(`twoIsSpecial([${deck}])`, () => {
        expect(twoIsSpecial(deck)).toStrictEqual(expected);
      });
    });
  });

  describe('perfectlyOrdered', () => {
    /** @type {TestCases<number[], number[]>} */
    const perfectlyOrderedTestCases = [
      [[], []],
      [
        [1, 9, 1],
        [1, 1, 9],
      ],
      [
        [1, 2, 9, 1],
        [1, 1, 2, 9],
      ],
      [
        [10, 1, 5, 3, 2, 8, 7],
        [1, 2, 3, 5, 7, 8, 10],
      ],
    ];

    perfectlyOrderedTestCases.forEach(([deck, expected]) => {
      test(`perfectlyOrdered([${deck}])`, () => {
        expect(perfectlyOrdered(deck)).toStrictEqual(expected);
      });
    });
  });

  describe('countingCards', () => {
    /** @type {TestCases<number[], number[]>} */
    const countingCardsTestCases = [
      [[], []],
      [
        [1, 9, 1],
        [3, 3, 3],
      ],
      [
        [1, 2, 9, 1],
        [4, 4, 4, 4],
      ],
      [
        [121, 22, 9, 12, 2, 2, 23],
        [7, 7, 7, 7, 7, 7, 7],
      ],
    ];

    countingCardsTestCases.forEach(([deck, expected]) => {
      test(`countingCards([${deck}])`, () => {
        expect(countingCards(deck)).toStrictEqual(expected);
      });
    });
  });
});
