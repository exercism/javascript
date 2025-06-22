import { describe, expect, test, xtest } from '@jest/globals';
import { reverseString } from './reverse-string';

describe('ReverseString', () => {
  test('empty string', () => {
    const expected = '';
    const actual = reverseString('');
    expect(actual).toEqual(expected);
  });

  xtest('a word', () => {
    const expected = 'tobor';
    const actual = reverseString('robot');
    expect(actual).toEqual(expected);
  });

  xtest('a capitalized word', () => {
    const expected = 'nemaR';
    const actual = reverseString('Ramen');
    expect(actual).toEqual(expected);
  });

  xtest('a sentence with punctuation', () => {
    const expected = '!yrgnuh ma I';
    const actual = reverseString('I am hungry!');
    expect(actual).toEqual(expected);
  });

  xtest('a palindrome', () => {
    const expected = 'racecar';
    const actual = reverseString('racecar');
    expect(actual).toEqual(expected);
  });

  xtest('an even-sized word', () => {
    const expected = 'reward';
    const actual = reverseString('drawer');
    expect(actual).toEqual(expected);
  });

  xtest('wide characters', () => {
    const expected = '猫子';
    const actual = reverseString('子猫');
    expect(actual).toEqual(expected);
  });

  // The following test cases deal with complex characters.
  // You can optionally enable these tests by removing `.skip` from the test.

  test.skip('grapheme cluster with pre-combined form', () => {
    const expected = 'dnatsnehctsrüW';
    const actual = reverseString('Würstchenstand');
    expect(actual).toEqual(expected);
  });

  test.skip('grapheme clusters', () => {
    const expected = 'มรกแรปโนยขีเผู้';
    const actual = reverseString('ผู้เขียนโปรแกรม');
    expect(actual).toEqual(expected);
  });
});
