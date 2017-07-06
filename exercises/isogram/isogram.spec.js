import Isogram from './isogram.js'

describe('Isogram Test Suite', function () {
  test('duplicates', function () {
    var word = new Isogram('duplicates');

    expect(word.isIsogram()).toEqual(true);
  });

  xtest('eleven', function () {
    var word = new Isogram('eleven');

    expect(word.isIsogram()).toEqual(false);
  });

  xtest('subdermatoglyphic', function () {
    var word = new Isogram('subdermatoglyphic');

    expect(word.isIsogram()).toEqual(true);
  });

  xtest('Alphabet', function () {
    var word = new Isogram('Alphabet');

    expect(word.isIsogram()).toEqual(false);
  });

  xtest('thumbscrew-japingly', function () {
    var word = new Isogram('thumbscrew-japingly');

    expect(word.isIsogram()).toEqual(true);
  });

  xtest('Hjelmqvist-Gryb-Zock-Pfund-Wax', function () {
    var word = new Isogram('Hjelmqvist-Gryb-Zock-Pfund-Wax');

    expect(word.isIsogram()).toEqual(true);
  });

  xtest('Heizölrückstoßabdämpfung', function () {
    var word = new Isogram('Heizölrückstoßabdämpfung');

    expect(word.isIsogram()).toEqual(true);
  });

  xtest('the quick brown fox', function () {
    var word = new Isogram('the quick brown fox');

    expect(word.isIsogram()).toEqual(false);
  });

  xtest('Emily Jung Schwartzkopf', function () {
    var word = new Isogram('Emily Jung Schwartzkopf');

    expect(word.isIsogram()).toEqual(true);
  });

  xtest('éléphant', function () {
    var word = new Isogram('éléphant');

    expect(word.isIsogram()).toEqual(false);
  });

});
