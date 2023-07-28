class Rational {
  constructor(numerator, denominator) {
    if (denominator === 0) {
      throw new Error('Denominator must not be zero.');
    }

    this.numerator = numerator;
    this.denominator = denominator;

    this.reduce();
    this.ensureSignInNumerator();
  }
  add(that) {
    const commonDenominator = this.denominator * that.denominator;
    return new Rational(
      this.numerator * that.denominator + that.numerator * this.denominator,
      commonDenominator,
    );
  }
  sub(that) {
    const commonDenominator = this.denominator * that.denominator;
    return new Rational(
      this.numerator * that.denominator - that.numerator * this.denominator,
      commonDenominator,
    );
  }
  mul(that) {
    return new Rational(
      this.numerator * that.numerator,
      this.denominator * that.denominator,
    );
  }
  div(that) {
    return new Rational(
      this.numerator * that.denominator,
      this.denominator * that.numerator,
    );
  }
  abs() {
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
  }
  exprational(n) {
    return new Rational(
      Math.pow(this.numerator, n),
      Math.pow(this.denominator, n),
    );
  }
  expreal(base) {
    return Math.pow(
      10.0,
      Math.log10(Math.pow(base, this.numerator)) / this.denominator,
    );
  }
  reduce() {
    const commonDivisor = this.gcd(this.numerator, this.denominator);

    this.numerator /= commonDivisor;
    this.denominator /= commonDivisor;
    this.ensureSignInNumerator();

    return this;
  }
  gcd(a, b) {
    let localA = a;
    let localB = b;
    while (localB !== 0) {
      const t = localB;
      localB = localA % localB;
      localA = t;
    }
    return localA;
  }
  ensureSignInNumerator() {
    if (this.denominator < 0) {
      this.denominator = -this.denominator;
      this.numerator = -this.numerator;
    }
  }
}

export { Rational };
