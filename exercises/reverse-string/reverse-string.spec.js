import ReverseString from './reverse-string';

describe('Reverse String', () => {
  const reverseString = new ReverseString();

  test('returns an empty string when given an empty string', () => {
    expect(reverseString.reverseString('')).toEqual('');
  });

  test('reverses a word', () => {
    expect(reverseString.reverseString('tobor')).toEqual('robot');
  });

  test('reverses a capitalized word', () => {
    expect(reverseString.reverseString('nemaR')).toEqual('Ramen');
  });

  test('reverses a sentence with punctuation', () => {
    expect(reverseString.reverseString("!yrgnuh m'I")).toEqual("I'm hungry!");
  });

  test('reverses a palindrome', () => {
    expect(reverseString.reverseString('racecar')).toEqual('racecar');
  });
});
