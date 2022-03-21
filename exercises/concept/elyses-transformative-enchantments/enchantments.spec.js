// @ts-check

import {
  seeingDouble,
  threeOfEachThree,
  middleTwo,
  sandwichTrick,
  twoIsSpecial,
  perfectlyOrdered,
  reorder,
} from './enchantments';

describe('seeingDouble', () => {
  test('doubles all the values', () => {
    const deck1 = [1, 2, 3, 4];
    const expected1 = [2, 4, 6, 8];
    expect(seeingDouble(deck1)).toEqual(expected1);

    const deck2 = [2, 5, 1, 9];
    const expected2 = [4, 10, 2, 18];
    expect(seeingDouble(deck2)).toEqual(expected2);
  });

  test('works for a large deck', () => {
    const deck = [6, 3, 7, 2, 1, 9, 8, 10, 5, 4, 7, 1, 3];
    const expected = [12, 6, 14, 4, 2, 18, 16, 20, 10, 8, 14, 2, 6];
    expect(seeingDouble(deck)).toEqual(expected);
  });

  test('work for a small deck', () => {
    expect(seeingDouble([3])).toEqual([6]);
  });

  test('can handle an empty deck', () => {
    expect(seeingDouble([])).toEqual([]);
  });

  test('does not modify the original deck', () => {
    const deck = [1, 2, 3, 4];
    seeingDouble(deck);
    expect(deck).toEqual([1, 2, 3, 4]);
  });
});

describe('threeOfEachThree', () => {
  test('one 3 is converted into three 3s', () => {
    expect(threeOfEachThree([3])).toEqual([3, 3, 3]);
  });

  test('also converts multiple 3s', () => {
    const deck = [3, 10, 2, 8, 3, 4];
    const expected = [3, 3, 3, 10, 2, 8, 3, 3, 3, 4];
    expect(threeOfEachThree(deck)).toEqual(expected);
  });

  test('returns the same elements if there are no 3s', () => {
    expect(threeOfEachThree([1, 2, 4])).toEqual([1, 2, 4]);
  });

  test('can handle an empty deck', () => {
    expect(threeOfEachThree([])).toEqual([]);
  });
});

describe('middleTwo', () => {
  test('extracts the middle two cards', () => {
    const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expected = [5, 6];
    expect(middleTwo(deck)).toEqual(expected);
  });

  test('works with an unordered deck', () => {
    const deck = [6, 10, 5, 9, 4, 3, 1, 2, 6, 8];
    const expected = [4, 3];
    expect(middleTwo(deck)).toEqual(expected);
  });
});

describe('sandwichTrick', () => {
  test('moves the outside two cards into the middle', () => {
    const deck = [1, 6, 7, 7, 2, 1];
    const expected = [6, 7, 1, 1, 7, 2];
    expect(sandwichTrick(deck)).toEqual(expected);
  });

  test('switches the order of the moved cards', () => {
    const deck = [3, 6, 1, 7, 2, 8];
    const expected = [6, 1, 8, 3, 7, 2];
    expect(sandwichTrick(deck)).toEqual(expected);
  });

  test('can handle a small deck', () => {
    expect(sandwichTrick([1, 10])).toEqual([10, 1]);
  });

  test('can handle a large deck', () => {
    const deck = [9, 10, 5, 9, 4, 3, 1, 2, 6, 7];
    const expected = [10, 5, 9, 4, 7, 9, 3, 1, 2, 6];
    expect(sandwichTrick(deck)).toEqual(expected);
  });
});

describe('twoIsSpecial', () => {
  test('keeps only the 2s', () => {
    const deck = [1, 2, 9, 1, 2, 2, 6, 7];
    const expected = [2, 2, 2];
    expect(twoIsSpecial(deck)).toEqual(expected);
  });

  test('returns an empty deck if there are no 2s', () => {
    expect(twoIsSpecial([1, 9, 1])).toEqual([]);
  });

  test('can handle an empty deck', () => {
    expect(twoIsSpecial([])).toEqual([]);
  });
});

describe('perfectlyOrdered', () => {
  test('sorts the cards lowest to highest', () => {
    const deck = [2, 1, 6, 9, 3];
    const expected = [1, 2, 3, 6, 9];
    expect(perfectlyOrdered(deck)).toEqual(expected);
  });

  test('can handle duplicated numbers', () => {
    const deck = [2, 2, 6, 9, 3, 6];
    const expected = [2, 2, 3, 6, 6, 9];
    expect(perfectlyOrdered(deck)).toEqual(expected);
  });

  test('works for a large deck', () => {
    const deck = [6, 10, 5, 9, 4, 3, 7, 7, 1, 2, 6, 8, 1, 3];
    const expected = [1, 1, 2, 3, 3, 4, 5, 6, 6, 7, 7, 8, 9, 10];
    expect(perfectlyOrdered(deck)).toEqual(expected);
  });

  test('can handle an empty deck', () => {
    expect(perfectlyOrdered([])).toEqual([]);
  });
});

describe('reorder', () => {
  test('reorders the deck', () => {
    const deck = [2, 1, 6, 9, 3];
    const expected = [3, 9, 6, 1, 2];
    expect(reorder(deck)).toEqual(expected);
  });

  test('works for a large deck', () => {
    const deck = [6, 10, 5, 9, 4, 3, 7, 7, 1, 2, 6, 8, 1, 3];
    const expected = [3, 1, 8, 6, 2, 1, 7, 7, 3, 4, 9, 5, 10, 6];
    expect(reorder(deck)).toEqual(expected);
  });

  test('modifies the original deck', () => {
    const deck = [2, 1, 6, 9, 3];
    const expected = [3, 9, 6, 1, 2];
    reorder(deck);
    expect(deck).toEqual(expected);
  });

  test('can handle an empty deck', () => {
    expect(reorder([])).toEqual([]);
  });
});
