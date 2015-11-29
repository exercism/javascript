const BASE = 3;

export default class Trinary {

  constructor (decimal) {
    this.digits = [...decimal].reverse().map(Number);
  }

  toDecimal () {
    const decimal = this.digits.reduce(this.accumulator, 0);
    return isNaN(decimal) ? 0 : decimal;
  }

  accumulator (decimal, digit, index) {
    return decimal += digit * Math.pow(BASE, index);
  }

}
