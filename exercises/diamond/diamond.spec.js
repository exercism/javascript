import Diamond from './diamond.js'

describe('Make diamond function', () => {

  var diamond = new Diamond();

  it('test letter A', function() {
    const result = "A\n";
    expect(diamond.makeDiamond('A')).toEqual(result);
  });

  xit('test letter C', function() {
    const result = ["  A  ",
      " B B ",
      "C   C",
      " B B ",
      "  A  "].join("\n") + "\n";
    expect(diamond.makeDiamond('C')).toEqual(result);
  });

  xit('test letter E', function() {
    const result = ["    A    ",
      "   B B   ",
      "  C   C  ",
      " D     D ",
      "E       E",
      " D     D ",
      "  C   C  ",
      "   B B   ",
      "    A    "].join("\n") + "\n";
    expect(diamond.makeDiamond('E')).toEqual(result);
  });
});
