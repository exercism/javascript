export default class Squares {

  constructor(max) {
    this.max = max;
  }

  get squareOfSums() {
    let sum = 0;
    for (let x = 1; x <= this.max; x++) {
      sum += x;
    }
    return sum * sum;
  }
  get sumOfSquares() {
    let sum = 0;
    for (let x = 1; x <= this.max; x++) {
      sum += x * x;
    }
    return sum;
  }
  get difference() {
    return this.squareOfSums - this.sumOfSquares;
  }

};
