import { ISBN } from './isbn-verifier.js';

describe('ISBN Verifier Test Suite', () => {
  test('valid isbn number', () => {
    const isbn = new ISBN('3-598-21508-8');

    expect(isbn.isValid()).toEqual(true);
  });

  test('invalid isbn check digit', () => {
    const isbn = new ISBN('3-598-21508-9');

    expect(isbn.isValid()).toEqual(false);
  });

  xtest('valid isbn number with a check digit of 10', () => {
    const isbn = new ISBN('3-598-21507-X');

    expect(isbn.isValid()).toEqual(true);
  });

  xtest('check digit is a character other than X', () => {
    const isbn = new ISBN('3-598-21507-A');

    expect(isbn.isValid()).toEqual(false);
  });

  xtest('invalid character in isbn', () => {
    const isbn = new ISBN('3-598-2K507-0');

    expect(isbn.isValid()).toEqual(false);
  });

  xtest('X is only valid as a check digit', () => {
    const isbn = new ISBN('3-598-2X507-9');

    expect(isbn.isValid()).toEqual(false);
  });

  xtest('valid isbn without separating dashes', () => {
    const isbn = new ISBN('3598215088');

    expect(isbn.isValid()).toEqual(true);
  });

  xtest('isbn without separating dashes and X as check digit', () => {
    const isbn = new ISBN('359821507X');

    expect(isbn.isValid()).toEqual(true);
  });

  xtest('isbn without check digit and dashes', () => {
    const isbn = new ISBN('359821507');

    expect(isbn.isValid()).toEqual(false);
  });

  xtest('too long isbn and no dashes', () => {
    const isbn = new ISBN('3598215078X');

    expect(isbn.isValid()).toEqual(false);
  });

  xtest('isbn without check digit', () => {
    const isbn = new ISBN('3-598-21507');

    expect(isbn.isValid()).toEqual(false);
  });

  xtest('too long isbn', () => {
    const isbn = new ISBN('3-598-21507-XA');

    expect(isbn.isValid()).toEqual(false);
  });

  xtest('check digit of X should not be used for 0', () => {
    const isbn = new ISBN('3-598-21515-X');

    expect(isbn.isValid()).toEqual(false);
  });
});
