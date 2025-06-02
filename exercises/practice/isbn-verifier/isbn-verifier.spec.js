import { describe, expect, test, xtest } from '@jest/globals';
import { isValid } from './isbn-verifier';

describe('ISBN Verifier', () => {
  test('valid isbn', () => {
    expect(isValid('3-598-21508-8')).toEqual(true);
  });

  xtest('invalid isbn check digit', () => {
    expect(isValid('3-598-21508-9')).toEqual(false);
  });

  xtest('valid isbn with a check digit of 10', () => {
    expect(isValid('3-598-21507-X')).toEqual(true);
  });

  xtest('check digit is a character other than X', () => {
    expect(isValid('3-598-21507-A')).toEqual(false);
  });

  xtest('invalid check digit in isbn is not treated as zero', () => {
    expect(isValid('4-598-21507-B')).toEqual(false);
  });

  xtest('invalid character in isbn is not treated as zero', () => {
    expect(isValid('3-598-P1581-X')).toEqual(false);
  });

  xtest('X is only valid as a check digit', () => {
    expect(isValid('3-598-2X507-9')).toEqual(false);
  });

  xtest('valid isbn without separating dashes', () => {
    expect(isValid('3598215088')).toEqual(true);
  });

  xtest('isbn without separating dashes and X as check digit', () => {
    expect(isValid('359821507X')).toEqual(true);
  });

  xtest('isbn without check digit and dashes', () => {
    expect(isValid('359821507')).toEqual(false);
  });

  xtest('too long isbn and no dashes', () => {
    expect(isValid('3598215078X')).toEqual(false);
  });

  xtest('too short isbn', () => {
    expect(isValid('00')).toEqual(false);
  });

  xtest('isbn without check digit', () => {
    expect(isValid('3-598-21507')).toEqual(false);
  });

  xtest('check digit of X should not be used for 0', () => {
    expect(isValid('3-598-21515-X')).toEqual(false);
  });

  xtest('empty isbn', () => {
    expect(isValid('')).toEqual(false);
  });

  xtest('input is 9 characters', () => {
    expect(isValid('134456729')).toEqual(false);
  });

  xtest('invalid characters are not ignored after checking length', () => {
    expect(isValid('3132P34035')).toEqual(false);
  });

  xtest('invalid characters are not ignored before checking length', () => {
    expect(isValid('3598P215088')).toEqual(false);
  });

  xtest('input is too long but contains a valid isbn', () => {
    expect(isValid('98245726788')).toEqual(false);
  });
});
