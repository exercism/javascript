import Isogram from './isogram';

describe('Isogram Test Suite', () => {
  test('empty string', () => {
    const word = new Isogram('');

    expect(word.isIsogram()).toEqual(true);
  });

  xtest('isogram with only lower case characters', () => {
    const word = new Isogram('isogram');

    expect(word.isIsogram()).toEqual(true);
  });

  xtest('word with one duplicated character', () => {
    const word = new Isogram('eleven');

    expect(word.isIsogram()).toEqual(false);
  });

  xtest('word with one duplicated character from the end of the alphabet', () => {
    const word = new Isogram('zzyzx');

    expect(word.isIsogram()).toEqual(false);
  });

  xtest('longest reported english isogram', () => {
    const word = new Isogram('subdermatoglyphic');

    expect(word.isIsogram()).toEqual(true);
  });

  xtest('word with duplicated character in mixed case', () => {
    const word = new Isogram('Alphabet');

    expect(word.isIsogram()).toEqual(false);
  });

  xtest('word with duplicated character in mixed case, lowercase first', () => {
    const word = new Isogram('alphAbet');

    expect(word.isIsogram()).toEqual(false);
  });

  xtest('hypothetical isogrammic word with hyphen', () => {
    const word = new Isogram('thumbscrew-japingly');

    expect(word.isIsogram()).toEqual(true);
  });

  xtest('isogram with duplicated hyphen', () => {
    const word = new Isogram('six-year-old');

    expect(word.isIsogram()).toEqual(true);
  });

  xtest('made-up name that is an isogram', () => {
    const word = new Isogram('Emily Jung Schwartzkopf');

    expect(word.isIsogram()).toEqual(true);
  });

  xtest('duplicated character in the middle', () => {
    const word = new Isogram('accentor');

    expect(word.isIsogram()).toEqual(false);
  });

  xtest('same first and last characters', () => {
    const word = new Isogram('angola');

    expect(word.isIsogram()).toEqual(false);
  });
});
