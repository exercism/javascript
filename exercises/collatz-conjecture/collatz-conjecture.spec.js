var CollatzConjecture = require('./collatz-conjecture');

describe('CollatzConjecture', function () {
  var collatz = new CollatzConjecture();

  it('test zero steps for one', function () {
    var expected = 0;
    expect(collatz.steps(1)).toEqual(expected);
  });

  xit('test divide if even steps', function () {
    var expected = 4;
    expect(collatz.steps(16)).toEqual(expected);
  });

  xit('test even and odd steps', function () {
    var expected = 9;
    expect(collatz.steps(12)).toEqual(expected);
  });

  xit('test large number of even and odd steps', function () {
    var expected = 152;
    expect(collatz.steps(1000000)).toEqual(expected);
  });

  xit('test zero is an error', function () {
    expect(function () {
      collatz.steps(0);
    }).toThrow(new Error('Only positive numbers are allowed'));
  });

  xit('test negative value is an error', function () {
    expect(function () {
      collatz.steps(-1);
    }).toThrow(new Error('Only positive numbers are allowed'));
  });
});
