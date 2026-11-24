import { describe, expect, test, xtest } from '@jest/globals';
import { truncate } from './micro-blog.js';

describe('Micro-blog', () => {
  test('English language short', () => {
    const inputString = 'Hi';
    const expected = 'Hi';
    const actual = truncate(inputString);
    expect(actual).toEqual(expected);
  });

  xtest('English language long', () => {
    const inputString = 'Hello there';
    const expected = 'Hello';
    const actual = truncate(inputString);
    expect(actual).toEqual(expected);
  });

  xtest('German language short (broth)', () => {
    const inputString = 'brühe';
    const expected = 'brühe';
    const actual = truncate(inputString);
    expect(actual).toEqual(expected);
  });

  xtest('German language long (bear carpet → beards)', () => {
    const inputString = 'Bärteppich';
    const expected = 'Bärte';
    const actual = truncate(inputString);
    expect(actual).toEqual(expected);
  });

  xtest('Bulgarian language short (good)', () => {
    const inputString = 'Добър';
    const expected = 'Добър';
    const actual = truncate(inputString);
    expect(actual).toEqual(expected);
  });

  xtest('Greek language short (health)', () => {
    const inputString = 'υγειά';
    const expected = 'υγειά';
    const actual = truncate(inputString);
    expect(actual).toEqual(expected);
  });

  xtest('Maths short', () => {
    const inputString = 'a=πr²';
    const expected = 'a=πr²';
    const actual = truncate(inputString);
    expect(actual).toEqual(expected);
  });

  xtest('Maths long', () => {
    const inputString = '∅⊊ℕ⊊ℤ⊊ℚ⊊ℝ⊊ℂ';
    const expected = '∅⊊ℕ⊊ℤ';
    const actual = truncate(inputString);
    expect(actual).toEqual(expected);
  });

  xtest('English and emoji short', () => {
    const inputString = 'Fly 🛫';
    const expected = 'Fly 🛫';
    const actual = truncate(inputString);
    expect(actual).toEqual(expected);
  });

  xtest('Emoji short', () => {
    const inputString = '💇';
    const expected = '💇';
    const actual = truncate(inputString);
    expect(actual).toEqual(expected);
  });

  xtest('Emoji long', () => {
    const inputString = '❄🌡🤧🤒🏥🕰😀';
    const expected = '❄🌡🤧🤒🏥';
    const actual = truncate(inputString);
    expect(actual).toEqual(expected);
  });

  xtest('Royal Flush?', () => {
    const inputString = '🃎🂸🃅🃋🃍🃁🃊';
    const expected = '🃎🂸🃅🃋🃍';
    const actual = truncate(inputString);
    expect(actual).toEqual(expected);
  });
});
