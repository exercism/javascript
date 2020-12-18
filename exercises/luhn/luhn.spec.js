import { valid } from './luhn';

describe('Luhn', () => {
  test('single digit strings can not be valid', () => {
    expect(valid('1')).toEqual(false);
  });

  xtest('a single zero is invalid', () => {
    expect(valid('0')).toEqual(false);
  });

  xtest('a simple valid SIN that remains valid if reversed', () => {
    expect(valid('059')).toEqual(true);
  });

  xtest('a simple valid SIN that becomes invalid if reversed', () => {
    expect(valid('59')).toEqual(true);
  });

  xtest('a valid Canadian SIN', () => {
    expect(valid('055 444 285')).toEqual(true);
  });

  xtest('invalid Canadian SIN', () => {
    expect(valid('055 444 286')).toEqual(false);
  });

  xtest('invalid credit card', () => {
    expect(valid('8273 1232 7352 0569')).toEqual(false);
  });

  xtest('invalid long number with an even remainder', () => {
    expect(valid('1 2345 6789 1234 5678 9012')).toEqual(false);
  });

  xtest('valid number with an even number of digits', () => {
    expect(valid('095 245 88')).toEqual(true);
  });

  xtest('valid number with an odd number of spaces', () => {
    expect(valid('234 567 891 234')).toEqual(true);
  });

  xtest('valid strings with a non-digit added at the end invalid', () => {
    expect(valid('059a')).toEqual(false);
  });

  xtest('valid strings with punctuation included become invalid', () => {
    expect(valid('055-444-285')).toEqual(false);
  });

  xtest('valid strings with symbols included become invalid', () => {
    expect(valid('055# 444$ 285')).toEqual(false);
  });

  xtest('single zero with space is invalid', () => {
    expect(valid(' 0')).toEqual(false);
  });

  xtest('more than a single zero is valid', () => {
    expect(valid('0000 0')).toEqual(true);
  });

  xtest('input digit 9 is correctly converted to output digit 9', () => {
    expect(valid('091')).toEqual(true);
  });

  xtest("using ascii value for non-doubled non-digit isn't allowed", () => {
    expect(valid('055b 444 285')).toEqual(false);
  });

  xtest("using ascii value for doubled non-digit isn't allowed", () => {
    expect(valid(':9')).toEqual(false);
  });
});
