//@ts-check

import {
  ANNIVERSARY,
  BIRTHDAY,
  EXCLAMATION,
  buildSign,
  graduationFor,
  costOf,
} from './custom-signs';

describe('BIRTHDAY', () => {
  test('constant is defined correctly', () => {
    expect(BIRTHDAY).toBe('Birthday');
  });
});

describe('VALENTINE', () => {
  test('constant is defined correctly', () => {
    expect(ANNIVERSARY).toBe('Anniversary');
  });
});

describe('EXCLAMATION', () => {
  test('constant is defined correctly', () => {
    expect(EXCLAMATION).toBe('!');
  });
});

describe('buildSign', () => {
  test('built for a birthday', () => {
    expect(buildSign(BIRTHDAY, 'Rob')).toBe('Happy Birthday Rob!');
  });

  test("built for Valentine's", () => {
    expect(buildSign(ANNIVERSARY, 'Rob')).toBe('Happy Anniversary Rob!');
  });
});

describe('graduationFor', () => {
  const expected = `Congratulations Rob
  Class of 2021`;
  expect(graduationFor('Rob', 2021)).toBe(expected);
});

describe('costOf', () => {
  test('sign is total of characters followed by the currency', () => {
    expect(costOf(graduationFor('Rob', 2021), 'dollars')).toBe(
      'Your sign cost 90.00 dollars'
    );
  });
});
