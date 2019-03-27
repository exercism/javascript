import BigInt from './lib/big-integer';

/**
 * Computes the number of grains on the squares of a
 *
 * chess board, starting with one grain on the first
 * square, and doubling with each successive square.
 */
export class Grains {
  /**
   * Gets the number of grains on the nth square
   *
   * @param {Number} num Number to compute its square
   *
   * @return {String} Square of num
   */
  square(num) {
    return BigInt(2).pow(num - 1).toString();
  }

  /**
   * Gets the total number of grains on all squares
   *
   * @return {String} Sum of all squares
   */
  total() {
    let total = BigInt(0);

    for (let squareNum = 1; squareNum <= 64; squareNum++) {
      total = total.add(this.square(squareNum));
    }

    return total.toString();
  }
}
