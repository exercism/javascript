export default class Series {

  constructor(numberString) {
    this.numberString = numberString;
    this.digits = this.getDigits();
  }

  getDigits() {
    return [...this.numberString].map( digit => {
      return parseInt(digit, 10);
    });
  }

  largestProduct(size) {
    let product,
      max = 0;
    this.slices(size).forEach( slice => {
      product = slice.reduce( (a, b) => {
        return a * b;
      }, 1);
      if (product > max) {
        max = product;
      }
    });
    return max;
  }

  slices(sliceSize) {
    const result = [];
    let slice = [];

    if (sliceSize > this.digits.length) {
      throw new Error('Slice size is too big.');
    }

    for (let i = 0; i < this.digits.length - sliceSize + 1; i++) {
      for (let j = 0; j < sliceSize; j++) {
        slice.push(this.digits[i + j]);
      }
      result.push(slice);
      slice = [];
    }

    return result;
  }
}
