function Rational(numerator, denominator) {
  if (denominator === 0) {throw new Error('Denominator must not be zero.');}

  this.numerator = numerator;
  this.denominator = denominator;

  this.reduce();
  this.ensureSignInNumerator();
}

Rational.prototype.add = function (that) {
  var commonDenominator = this.denominator * that.denominator;
  return new Rational(this.numerator * that.denominator + that.numerator * this.denominator, commonDenominator);
};

Rational.prototype.sub = function (that) {
  var commonDenominator = this.denominator * that.denominator;
  return new Rational(this.numerator * that.denominator - that.numerator * this.denominator, commonDenominator);
};

Rational.prototype.mul = function (that) {
  return new Rational(this.numerator * that.numerator, this.denominator * that.denominator);
};

Rational.prototype.div = function (that) {
  return new Rational(this.numerator * that.denominator, this.denominator * that.numerator);
};

Rational.prototype.abs = function () {
  return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
};

Rational.prototype.exprational = function (n) {
  return new Rational(Math.pow(this.numerator, n), Math.pow(this.denominator, n));
};

Rational.prototype.expreal = function (base) {
  return Math.pow(10.0, Math.log10(Math.pow(base, this.numerator)) / this.denominator);
};

Rational.prototype.reduce = function () {
  var commonDivisor = this.gcd(this.numerator, this.denominator);

  this.numerator /= commonDivisor;
  this.denominator /= commonDivisor;
  this.ensureSignInNumerator();

  return this;
};

Rational.prototype.gcd = function (a, b) {
  var localA = a;
  var localB = b;
  while (localB !== 0) {
    var t = localB;
    localB = localA % localB;
    localA = t;
  }
  return localA;
};

Rational.prototype.ensureSignInNumerator = function () {
  if (this.denominator < 0) {
    this.denominator = -this.denominator;
    this.numerator = -this.numerator;
  }
};

module.exports = Rational;
