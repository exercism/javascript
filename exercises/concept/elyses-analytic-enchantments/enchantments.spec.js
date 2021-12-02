// @ts-check

import {
  getCardPosition,
  doesStackIncludeCard,
  isEachCardEven,
  doesStackIncludeOddCard,
  getFirstOddCard,
  getFirstEvenCardPosition,
} from './enchantments';

describe('getCardPosition', () => {
  test('when it is the first card', () => {
    expect(getCardPosition([1, 2, 3], 1)).toBe(0);
  });
  test('when the card is not found', () => {
    expect(getCardPosition([1, 2, 3], 4)).toBe(-1);
  });
});

describe('doesStackIncludeCard', () => {
  test('when there is a card found', () => {
    expect(doesStackIncludeCard([1, 2, 3], 1)).toBe(true);
  });
  test('when a card is not found', () => {
    expect(doesStackIncludeCard([1, 2, 3], 4)).toBe(false);
  });
});

describe('isEachCardEven', () => {
  test('when all cards are even', () => {
    expect(isEachCardEven([2, 4, 6])).toBe(true);
  });
  test('when any card is odd', () => {
    expect(isEachCardEven([2, 5, 6])).toBe(false);
  });
});

describe('doesStackIncludeOddCard', () => {
  test('should be true if odd number card is found', () => {
    expect(doesStackIncludeOddCard([2, 5])).toBe(true);
  });
  test('should be false if no odd number card is found', () => {
    expect(doesStackIncludeOddCard([2, 4, 6])).toBe(false);
  });
});

describe('getFirstOddCard', () => {
  test('should return the first odd card found', () => {
    expect(getFirstOddCard([2, 4, 1, 3])).toBe(1);
  });
  test('should return undefined if odd card is not found', () => {
    expect(getFirstOddCard([4, 2, 6])).toBeUndefined();
  });
});

describe('getFirstEvenCardPosition', () => {
  test('should return position of first even card', () => {
    expect(getFirstEvenCardPosition([2, 4, 1, 3])).toBe(0);
  });
  test('should return -1 when the card is not found', () => {
    expect(getFirstEvenCardPosition([1, 3, 5])).toBe(-1);
  });
});
