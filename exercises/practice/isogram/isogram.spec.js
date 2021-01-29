import { isIsogram } from './isogram';

describe('Isogram', () => {
  describe('Check if the given string is an isogram', () => {
    test('empty string', () => {
      expect(isIsogram('')).toEqual(true);
    });

    xtest('isogram with only lower case characters', () => {
      expect(isIsogram('isogram')).toEqual(true);
    });

    xtest('word with one duplicated character', () => {
      expect(isIsogram('eleven')).toEqual(false);
    });

    xtest('word with one duplicated character from the end of the alphabet', () => {
      expect(isIsogram('zzyzx')).toEqual(false);
    });

    xtest('longest reported english isogram', () => {
      expect(isIsogram('subdermatoglyphic')).toEqual(true);
    });

    xtest('word with duplicated character in mixed case', () => {
      expect(isIsogram('Alphabet')).toEqual(false);
    });

    xtest('word with duplicated character in mixed case, lowercase first', () => {
      expect(isIsogram('alphAbet')).toEqual(false);
    });

    xtest('hypothetical isogrammic word with hyphen', () => {
      expect(isIsogram('thumbscrew-japingly')).toEqual(true);
    });

    xtest('hypothetical word with duplicated character following hyphen', () => {
      expect(isIsogram('thumbscrew-jappingly')).toEqual(false);
    });

    xtest('isogram with duplicated hyphen', () => {
      expect(isIsogram('six-year-old')).toEqual(true);
    });

    xtest('made-up name that is an isogram', () => {
      expect(isIsogram('Emily Jung Schwartzkopf')).toEqual(true);
    });

    xtest('duplicated character in the middle', () => {
      expect(isIsogram('accentor')).toEqual(false);
    });

    xtest('same first and last characters', () => {
      expect(isIsogram('angola')).toEqual(false);
    });
  });
});
