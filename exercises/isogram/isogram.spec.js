import Isogram from './isogram.js';

describe('Isogram Test Suite', () => {
  test('duplicates', () => {
    const word = new Isogram('duplicates');

    expect(word.isIsogram()).toEqual(true);
  });

  xtest('eleven', () => {
    const word = new Isogram('eleven');

    expect(word.isIsogram()).toEqual(false);
  });

  xtest('subdermatoglyphic', () => {
    const word = new Isogram('subdermatoglyphic');

    expect(word.isIsogram()).toEqual(true);
  });

  xtest('Alphabet', () => {
    const word = new Isogram('Alphabet');

    expect(word.isIsogram()).toEqual(false);
  });

  xtest('thumbscrew-japingly', () => {
    const word = new Isogram('thumbscrew-japingly');

    expect(word.isIsogram()).toEqual(true);
  });

  xtest('Hjelmqvist-Gryb-Zock-Pfund-Wax', () => {
    const word = new Isogram('Hjelmqvist-Gryb-Zock-Pfund-Wax');

    expect(word.isIsogram()).toEqual(true);
  });

  xtest('Heizölrückstoßabdämpfung', () => {
    const word = new Isogram('Heizölrückstoßabdämpfung');

    expect(word.isIsogram()).toEqual(true);
  });

  xtest('the quick brown fox', () => {
    const word = new Isogram('the quick brown fox');

    expect(word.isIsogram()).toEqual(false);
  });

  xtest('Emily Jung Schwartzkopf', () => {
    const word = new Isogram('Emily Jung Schwartzkopf');

    expect(word.isIsogram()).toEqual(true);
  });

  xtest('éléphant', () => {
    const word = new Isogram('éléphant');

    expect(word.isIsogram()).toEqual(false);
  });
});
