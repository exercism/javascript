const BASE = 3;

export default class Trinary {

  constructor(decimal) {
    this.digits = [...decimal].reverse().map(Number);
  }

  toDecimal() {
    if (this.someDigitIsInvalid()) {
      return 0;
    }

    return this.digits.reduce(this.accumulator, 0);
  }

  someDigitIsInvalid() {
    const greaterThanBase = this.digits.some(d => d >= BASE);
    const notANumber = this.digits.some(d => isNaN(d));
    return greaterThanBase || notANumber;
  }

  accumulator(decimal, digit, index) {
    return decimal += digit * Math.pow(BASE, index);
  }

}
