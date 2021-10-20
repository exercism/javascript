//@ts-check

import {
  buildSign,
  buildBirthdaySign,
  graduationFor,
  costOf,
} from './custom-signs';

describe('buildSign', () => {
  test('occasion is Birthday', () => {
    expect(buildSign('Birthday', 'Rob')).toBe('Happy Birthday Rob!');
  });
});

describe('buildBirthdaySign', () => {
  test('age is less than 50', () => {
    expect(buildBirthdaySign(49)).toBe(
      'Happy Birthday! What a young fellow you are.'
    );
  });
  test('age is 50 or older', () => {
    expect(buildBirthdaySign(51)).toBe(
      'Happy Birthday! What a old fellow you are.'
    );
  });
});

describe('graduationFor', () => {
  const expected = `Congratulations Rob
  Class of 2021`;
  test('year of graduation is 2021', () => {
    expect(graduationFor('Rob', 2021)).toBe(expected);
  });
});

describe('costOf', () => {
  test('sign is total of characters followed by the currency', () => {
    expect(costOf(graduationFor('Rob', 2021), 'dollars')).toBe(
      'Your sign cost 90.00 dollars'
    );
  });
});
