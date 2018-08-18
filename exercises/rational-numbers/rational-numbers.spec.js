var Rational = require('./rational-numbers');

describe('Addition', function () {
  it('Add two positive rational numbers', function () {
    var expected = new Rational(7, 6);
    expect(new Rational(1, 2).add(new Rational(2, 3))).toEqual(expected);
  });

  xit('Add a positive rational number and a negative rational number', function () {
    var expected = new Rational(-1, 6);
    expect(new Rational(1, 2).add(new Rational(-2, 3))).toEqual(expected);
  });

  xit('Add two negative rational numbers', function () {
    var expected = new Rational(-7, 6);
    expect(new Rational(-1, 2).add(new Rational(-2, 3))).toEqual(expected);
  });

  xit('Add a rational number to its additive inverse', function () {
    var expected = new Rational(0, 1);
    expect(new Rational(1, 2).add(new Rational(-1, 2))).toEqual(expected);
  });
});

describe('Subtraction', function () {
  xit('Subtract two positive rational numbers', function () {
    var expected = new Rational(-1, 6);
    expect(new Rational(1, 2).sub(new Rational(2, 3))).toEqual(expected);
  });

  xit('Subtract a positive rational number and a negative rational number', function () {
    var expected = new Rational(7, 6);
    expect(new Rational(1, 2).sub(new Rational(-2, 3))).toEqual(expected);
  });

  xit('Subtract two negative rational numbers', function () {
    var expected = new Rational(1, 6);
    expect(new Rational(-1, 2).sub(new Rational(-2, 3))).toEqual(expected);
  });

  xit('Subtract a rational number from itself', function () {
    var expected = new Rational(0, 1);
    expect(new Rational(1, 2).sub(new Rational(1, 2))).toEqual(expected);
  });
});

describe('Multiplication', function () {
  xit('Multiply two positive rational numbers', function () {
    var expected = new Rational(1, 3);
    expect(new Rational(1, 2).mul(new Rational(2, 3))).toEqual(expected);
  });

  xit('Multiply a negative rational number by a positive rational number', function () {
    var expected = new Rational(-1, 3);
    expect(new Rational(-1, 2).mul(new Rational(2, 3))).toEqual(expected);
  });

  xit('Multiply two negative rational numbers', function () {
    var expected = new Rational(1, 3);
    expect(new Rational(-1, 2).mul(new Rational(-2, 3))).toEqual(expected);
  });

  xit('Multiply a rational number by its reciprocal', function () {
    var expected = new Rational(1, 1);
    expect(new Rational(1, 2).mul(new Rational(2, 1))).toEqual(expected);
  });

  xit('Multiply a rational number by 1', function () {
    var expected = new Rational(1, 2);
    expect(new Rational(1, 2).mul(new Rational(1, 1))).toEqual(expected);
  });

  xit('Multiply a rational number by 0', function () {
    var expected = new Rational(0, 1);
    expect(new Rational(1, 2).mul(new Rational(0, 1))).toEqual(expected);
  });
});

describe('Division', function () {
  xit('Divide two positive rational numbers', function () {
    var expected = new Rational(3, 4);
    expect(new Rational(1, 2).div(new Rational(2, 3))).toEqual(expected);
  });

  xit('Divide a positive rational number by a negative rational number', function () {
    var expected = new Rational(-3, 4);
    expect(new Rational(1, 2).div(new Rational(-2, 3))).toEqual(expected);
  });

  xit('Divide two negative rational numbers', function () {
    var expected = new Rational(3, 4);
    expect(new Rational(-1, 2).div(new Rational(-2, 3))).toEqual(expected);
  });

  xit('Divide a rational number by 1', function () {
    var expected = new Rational(1, 2);
    expect(new Rational(1, 2).div(new Rational(1, 1))).toEqual(expected);
  });
});

describe('Absolute value', function () {
  xit('Absolute value of a positive rational number', function () {
    var expected = new Rational(1, 2);
    expect(new Rational(1, 2).abs()).toEqual(expected);
  });

  xit('Absolute value of a negative rational number', function () {
    var expected = new Rational(1, 2);
    expect(new Rational(-1, 2).abs()).toEqual(expected);
  });

  xit('Absolute value of zero', function () {
    var expected = new Rational(0, 1);
    expect(new Rational(0, 1).abs()).toEqual(expected);
  });
});

describe('Exponentiation of a rational number', function () {
  xit('Raise a positive rational number to a positive integer power', function () {
    var expected = new Rational(1, 8);
    expect(new Rational(1, 2).exprational(3)).toEqual(expected);
  });

  xit('Raise a negative rational number to a positive integer power', function () {
    var expected = new Rational(-1, 8);
    expect(new Rational(-1, 2).exprational(3)).toEqual(expected);
  });

  xit('Raise zero to an integer power', function () {
    var expected = new Rational(0, 1);
    expect(new Rational(0, 1).exprational(5)).toEqual(expected);
  });

  xit('Raise one to an integer power', function () {
    var expected = new Rational(1, 1);
    expect(new Rational(1, 1).exprational(4)).toEqual(expected);
  });

  xit('Raise a positive rational number to the power of zero', function () {
    var expected = new Rational(1, 1);
    expect(new Rational(1, 2).exprational(0)).toEqual(expected);
  });

  xit('Raise a negative rational number to the power of zero', function () {
    var expected = new Rational(1, 1);
    expect(new Rational(-1, 2).exprational(0)).toEqual(expected);
  });
});

describe('Exponentiation of a real number to a rational number', function () {
  xit('Raise a real number to a positive rational number', function () {
    var expected = 16.0;
    expect(new Rational(4, 3).expreal(8)).toEqual(expected);
  });

  xit('Raise a real number to a negative rational number', function () {
    var expected = 0.3333333333333333;
    expect(new Rational(-1, 2).expreal(9)).toEqual(expected);
  });

  xit('Raise a real number to a zero rational number', function () {
    var expected = 1.0;
    expect(new Rational(0, 1).expreal(2)).toEqual(expected);
  });
});

describe('Reduction to lowest terms', function () {
  xit('Reduce a positive rational number to lowest terms', function () {
    var expected = new Rational(1, 2);
    expect(new Rational(2, 4).reduce()).toEqual(expected);
  });

  xit('Reduce a negative rational number to lowest terms', function () {
    var expected = new Rational(-2, 3);
    expect(new Rational(-4, 6).reduce()).toEqual(expected);
  });

  xit('Reduce a rational number with a negative denominator to lowest terms', function () {
    var expected = new Rational(-1, 3);
    expect(new Rational(3, -9).reduce()).toEqual(expected);
  });

  xit('Reduce zero to lowest terms', function () {
    var expected = new Rational(0, 1);
    expect(new Rational(0, 6).reduce()).toEqual(expected);
  });

  xit('Reduce an integer to lowest terms', function () {
    var expected = new Rational(-2, 1);
    expect(new Rational(-14, 7).reduce()).toEqual(expected);
  });

  xit('Reduce one to lowest terms', function () {
    var expected = new Rational(1, 1);
    expect(new Rational(13, 13).reduce()).toEqual(expected);
  });
});
