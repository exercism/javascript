var BigInt = require('./big-integer');

/**
 * @author github.com/nonsensery
 * @class Grains
 *
 * @classdesc Computes the number of grains on the squares of a
 * chess board, starting with one grain on the first
 * square, and doubling with each successive square.
 */
function Grains() {
  // no op!
}

/**
 * Gets the number of grains on the nth square.
 * @param {number} num - the value to square
 * @return {number} the square of num
 */
Grains.prototype.square = function (num) {
  return new BigInt(2).pow(num - 1).toString();
};

/**
 * Gets the total number of grains on all squares.
 * @return {string} the total
 */
Grains.prototype.total = function () {
  var total = new BigInt(0);

  for (var squareNum = 1; squareNum <= 64; ++squareNum) {
    total = total.add(this.square(squareNum));
  }

  return total.toString();
};

module.exports = Grains;
