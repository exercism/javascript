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
  discardTopCard,
  getFirstCard,
  getSecondCard,
  insertFaceCards,
  swapTopTwoCards,
} from './array-destructuring';

describe('array-destructuring', () => {
  describe('getFirstCard', () => {
    /** @type {TestCases<Card[], Card>} */
    const getFirstCardTestCases = [
      [[3], 3],
      [[8, 3, 9, 5], 8],
    ];

    getFirstCardTestCases.forEach(([deck, expected]) => {
      test(`getFirstCard([${deck}])`, () => {
        expect(getFirstCard(deck)).toBe(expected);
      });
    });
  });

  describe.skip('getSecondCard', () => {
    /** @type {TestCases<Card[], Card | undefined>} */
    const getSecondCardTestCases = [
      [[10, 4], 4],
      [[2, 5, 1, 6], 5],
      [[], undefined],
      [[8], undefined],
    ];

    getSecondCardTestCases.forEach(([deck, expected]) => {
      test(`getSecondCard([${deck}])`, () => {
        expect(getSecondCard(deck)).toBe(expected);
      });
    });
  });

  describe.skip('swapTopTwoCards', () => {
    /** @type {TestCases<Card[], Card[]>} */
    const swapTopTwoCardsTestCases = [
      [
        [3, 6],
        [6, 3],
      ],
      [
        [10, 4, 3, 7, 8],
        [4, 10, 3, 7, 8],
      ],
    ];

    swapTopTwoCardsTestCases.forEach(([deck, expected]) => {
      test(`swapTopTwoCards([${deck}])`, () => {
        expect(swapTopTwoCards(deck)).toStrictEqual(expected);
      });
    });
  });

  describe.skip('discardTopCard', () => {
    /** @type {TestCases<number[], [number, number[]]>} */
    const discardTopCardTestCases = [
      [[7], [7, []]],
      [
        [9, 2, 10, 4],
        [9, [2, 10, 4]],
      ],
    ];

    discardTopCardTestCases.forEach(([deck, expected]) => {
      test(`discardTopCard([${deck}])`, () => {
        expect(discardTopCard(deck)).toStrictEqual(expected);
      });
    });
  });

  describe.skip('insertFaceCards', () => {
    /** @type {TestCases<Card[], Card[]>} */
    const insertFaceCardsTestCases = [
      [
        [3, 10, 7],
        [3, 'jack', 'queen', 'king', 10, 7],
      ],
      [[9], [9, 'jack', 'queen', 'king']],
      [[], [undefined, 'jack', 'queen', 'king']],
    ];

    insertFaceCardsTestCases.forEach(([deck, expected]) => {
      test(`insertFaceCards([${deck}])`, () => {
        expect(insertFaceCards(deck)).toStrictEqual(expected);
      });
    });
  });
});
