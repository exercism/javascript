const BASE = 3;

export class Trinary {
  constructor(decimal) {
    this.digits = [...decimal].reverse().map(Number);
  }

  toDecimal() {
    if (this.someDigitIsInvalid()) {
      return 0;
    }

    return this.digits.reduce(
      (decimal, digit, index) => decimal + digit * BASE ** index,
      0
    );
  }

  someDigitIsInvalid() {
    const greaterThanBase = this.digits.some((d) => d >= BASE);
    const notANumber = this.digits.some((d) => Number(d) !== d);
    return greaterThanBase || notANumber;
  }
}
