import { describe, expect, test } from '@jest/globals';
import {
  discardTopCard,
  getFirstCard,
  getSecondCard,
  insertFaceCards,
  swapTopTwoCards,
} from './enchantments';

describe('getFirstCard', () => {
  test('from a deck with a single card', () => {
    expect(getFirstCard([3])).toBe(3);
  });

  test('from a deck with many cards', () => {
    expect(getFirstCard([8, 3, 9, 5])).toBe(8);
  });

  test('from an empty deck', () => {
    expect(getFirstCard([])).toBe(undefined);
  });
});

describe('getSecondCard', () => {
  test('from a deck with two cards', () => {
    expect(getSecondCard([10, 4])).toBe(4);
  });

  test('from a deck with many cards', () => {
    expect(getSecondCard([2, 5, 1, 6])).toBe(5);
  });

  test('from an empty deck', () => {
    expect(getSecondCard([])).toBe(undefined);
  });

  test('from a deck with one card', () => {
    expect(getSecondCard([8])).toBe(undefined);
  });
});

describe('swapTopTwoCards', () => {
  test('in a deck with two cards', () => {
    expect(swapTopTwoCards([3, 6])).toStrictEqual([6, 3]);
  });

  test('in a deck with many cards', () => {
    expect(swapTopTwoCards([10, 4, 3, 7, 8])).toStrictEqual([4, 10, 3, 7, 8]);
  });
});

describe('discardTopCard', () => {
  test('from a deck with one card', () => {
    expect(discardTopCard([7])).toStrictEqual([7, []]);
  });

  test('from a deck with many cards', () => {
    expect(discardTopCard([9, 2, 10, 4])).toStrictEqual([9, [2, 10, 4]]);
  });
});

describe('insertFaceCards', () => {
  test('into a deck with many cards', () => {
    expect(insertFaceCards([3, 10, 7])).toStrictEqual([
      3,
      'jack',
      'queen',
      'king',
      10,
      7,
    ]);
  });

  test('into a deck with one card', () => {
    expect(insertFaceCards([9])).toStrictEqual([9, 'jack', 'queen', 'king']);
  });

  test('into a deck with no cards', () => {
    expect(insertFaceCards([])).toStrictEqual([
      undefined,
      'jack',
      'queen',
      'king',
    ]);
  });
});
