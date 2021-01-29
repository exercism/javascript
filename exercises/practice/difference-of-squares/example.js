export class Squares {
  constructor(max) {
    this.max = max;
  }

  get squareOfSum() {
    let sum = 0;
    for (let x = 1; x <= this.max; x += 1) {
      sum += x;
    }
    return sum * sum;
  }

  get sumOfSquares() {
    let sum = 0;
    for (let x = 1; x <= this.max; x += 1) {
      sum += x * x;
    }
    return sum;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
