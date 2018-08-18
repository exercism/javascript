var Isogram = require('./isogram');

describe('Isogram Test Suite', function () {
  it('duplicates', function () {
    var word = new Isogram('duplicates');

    expect(word.isIsogram()).toEqual(true);
  });

  xit('eleven', function () {
    var word = new Isogram('eleven');

    expect(word.isIsogram()).toEqual(false);
  });

  xit('subdermatoglyphic', function () {
    var word = new Isogram('subdermatoglyphic');

    expect(word.isIsogram()).toEqual(true);
  });

  xit('Alphabet', function () {
    var word = new Isogram('Alphabet');

    expect(word.isIsogram()).toEqual(false);
  });

  xit('thumbscrew-japingly', function () {
    var word = new Isogram('thumbscrew-japingly');

    expect(word.isIsogram()).toEqual(true);
  });

  xit('Hjelmqvist-Gryb-Zock-Pfund-Wax', function () {
    var word = new Isogram('Hjelmqvist-Gryb-Zock-Pfund-Wax');

    expect(word.isIsogram()).toEqual(true);
  });

  xit('Heizölrückstoßabdämpfung', function () {
    var word = new Isogram('Heizölrückstoßabdämpfung');

    expect(word.isIsogram()).toEqual(true);
  });

  xit('the quick brown fox', function () {
    var word = new Isogram('the quick brown fox');

    expect(word.isIsogram()).toEqual(false);
  });

  xit('Emily Jung Schwartzkopf', function () {
    var word = new Isogram('Emily Jung Schwartzkopf');

    expect(word.isIsogram()).toEqual(true);
  });

  xit('éléphant', function () {
    var word = new Isogram('éléphant');

    expect(word.isIsogram()).toEqual(false);
  });

  xit('Àcrobàt', function () {
    var word = new Isogram('Àcrobàt');

    expect(word.isIsogram()).toEqual(false);
  });
});
