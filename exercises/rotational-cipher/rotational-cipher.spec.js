import { RotationalCipher } from './rotational-cipher';

describe('Rotational cipher', () => {
  test('rotate a by 0, same output as input', () => {
    const expected = 'a';
    const actual = RotationalCipher.rotate('a', 0);

    expect(actual).toEqual(expected);
  });

  xtest('rotate a by 1', () => {
    const expected = 'b';
    const actual = RotationalCipher.rotate('a', 1);

    expect(actual).toEqual(expected);
  });

  xtest('rotate a by 26, same output as input', () => {
    const expected = 'a';
    const actual = RotationalCipher.rotate('a', 26);

    expect(actual).toEqual(expected);
  });

  xtest('rotate m by 13', () => {
    const expected = 'z';
    const actual = RotationalCipher.rotate('m', 13);

    expect(actual).toEqual(expected);
  });

  xtest('rotate n by 13 with wrap around alphabet', () => {
    const expected = 'a';
    const actual = RotationalCipher.rotate('n', 13);

    expect(actual).toEqual(expected);
  });

  xtest('rotate capital letters', () => {
    const expected = 'TRL';
    const actual = RotationalCipher.rotate('OMG', 5);

    expect(actual).toEqual(expected);
  });

  xtest('rotate spaces', () => {
    const expected = 'T R L';
    const actual = RotationalCipher.rotate('O M G', 5);

    expect(actual).toEqual(expected);
  });

  xtest('rotate numbers', () => {
    const expected = 'Xiwxmrk 1 2 3 xiwxmrk';
    const actual = RotationalCipher.rotate('Testing 1 2 3 testing', 4);

    expect(actual).toEqual(expected);
  });

  xtest('rotate punctuation', () => {
    const expected = 'Gzo\'n zvo, Bmviyhv!';
    const actual = RotationalCipher.rotate('Let\'s eat, Grandma!', 21);

    expect(actual).toEqual(expected);
  });

  xtest('rotate all letters', () => {
    const expected = 'Gur dhvpx oebja sbk whzcf bire gur ynml qbt.';
    const actual = RotationalCipher.rotate('The quick brown fox jumps over the lazy dog.', 13);

    expect(actual).toEqual(expected);
  });
});
