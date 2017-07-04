import Isogram from './isogram.js';

describe('Isogram Test Suite', () => {
  it('duplicates', () => {
    const word = new Isogram('duplicates');

    expect(word.isIsogram()).toEqual(true);
  });

  xit('eleven', () => {
    const word = new Isogram('eleven');

    expect(word.isIsogram()).toEqual(false);
  });

  xit('subdermatoglyphic', () => {
    const word = new Isogram('subdermatoglyphic');

    expect(word.isIsogram()).toEqual(true);
  });

  xit('Alphabet', () => {
    const word = new Isogram('Alphabet');

    expect(word.isIsogram()).toEqual(false);
  });

  xit('thumbscrew-japingly', () => {
    const word = new Isogram('thumbscrew-japingly');

    expect(word.isIsogram()).toEqual(true);
  });

  xit('Hjelmqvist-Gryb-Zock-Pfund-Wax', () => {
    const word = new Isogram('Hjelmqvist-Gryb-Zock-Pfund-Wax');

    expect(word.isIsogram()).toEqual(true);
  });

  xit('Heizölrückstoßabdämpfung', () => {
    const word = new Isogram('Heizölrückstoßabdämpfung');

    expect(word.isIsogram()).toEqual(true);
  });

  xit('the quick brown fox', () => {
    const word = new Isogram('the quick brown fox');

    expect(word.isIsogram()).toEqual(false);
  });

  xit('Emily Jung Schwartzkopf', () => {
    const word = new Isogram('Emily Jung Schwartzkopf');

    expect(word.isIsogram()).toEqual(true);
  });

  xit('éléphant', () => {
    const word = new Isogram('éléphant');

    expect(word.isIsogram()).toEqual(false);
  });
});
