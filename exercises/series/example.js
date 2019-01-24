export class Series {
  constructor(numberString) {
    this.numberString = numberString;
    this.digits = this.getDigits();
  }

  getDigits() {
    return [...this.numberString].map(digit => parseInt(digit, 10));
  }

  slices(sliceSize) {
    const result = [];
    let slice = [];

    if (sliceSize > this.digits.length) {
      throw new Error('Slice size is too big.');
    }

    for (let i = 0; i < this.digits.length - sliceSize + 1; i += 1) {
      for (let j = 0; j < sliceSize; j += 1) {
        slice.push(this.digits[i + j]);
      }
      result.push(slice);
      slice = [];
    }

    return result;
  }
}
