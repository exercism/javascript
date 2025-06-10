import { describe, expect, test } from '@jest/globals';
import {
  getFirstCard,
  getSecondCard,
  swapTwoCards,
  shiftThreeCardsAround,
  pickNamedPile,
  swapNamedPile,
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
    expect(getSecondCard([2, 5, 7, 6])).toBe(5);
  });

  test('from an empty deck', () => {
    expect(getSecondCard([])).toBe(undefined);
  });

  test('from a deck with one card', () => {
    expect(getSecondCard([8])).toBe(undefined);
  });
});

describe('swapTwoCards', () => {
  test('swapping two numbered cards', () => {
    expect(swapTwoCards([3, 6])).toStrictEqual([6, 3]);
  });

  test('swapping a high card with a low card', () => {
    expect(swapTwoCards([10, 2])).toStrictEqual([2, 10]);
  });

  test('swapping a face card with a low card', () => {
    expect(swapTwoCards(['king', 3])).toStrictEqual([3, 'king']);
  });
});

describe('shiftThreeCardsAround', () => {
  test('consecutive numbers', () => {
    expect(shiftThreeCardsAround([6, 4, 5])).toStrictEqual([4, 5, 6]);
  });

  test('drop the face card to the bottom', () => {
    expect(shiftThreeCardsAround(['king', 5, 2])).toStrictEqual([5, 2, 'king']);
  });
});

describe('pickNamedPile', () => {
  test('keeps the chosen pile', () => {
    const chosen = [3, 'jack', 'queen', 'king', 10, 7];
    const disregarded = [4, 5, 6, 8, 9];
    const piles = { chosen, disregarded };

    expect(pickNamedPile(piles)).toStrictEqual(chosen);
  });

  test('returns the actual pile without recreating it', () => {
    const chosen = [3, 'jack', 'queen', 'king', 10, 7];
    const disregarded = [4, 5, 6, 8, 9];
    const piles = { chosen, disregarded };

    const result = pickNamedPile(piles);

    chosen.push('joker');

    expect(result).toStrictEqual(chosen);
  });
});

describe('swapNamedPile', () => {
  test('renames the piles', () => {
    const face_pile = [3, 'jack', 'queen', 'king', 10, 7];
    const numbers_pile = [4, 5, 6, 8, 9];
    const piles = { chosen: numbers_pile, disregarded: face_pile };

    expect(swapNamedPile(piles)).toStrictEqual({
      chosen: face_pile,
      disregarded: numbers_pile,
    });
  });

  test('returns the actual piles without recreating them', () => {
    const face_pile = [3, 'jack', 'queen', 'king', 10, 7];
    const numbers_pile = [4, 5, 6, 8, 9];
    const piles = { chosen: numbers_pile, disregarded: face_pile };

    const result = swapNamedPile(piles);

    face_pile.push('joker');
    numbers_pile.push(2);

    expect(result).toStrictEqual({
      chosen: face_pile,
      disregarded: numbers_pile,
    });
  });
});
