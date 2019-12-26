import BigInt from './lib/big-integer';

/**
 * Gets the number of grains on the nth square
 *
 * @param {Number} num Number to compute its square
 *
 * @return {String} Square of num
 */
export const square = num => {
  if (num < 1 || num > 64) {
    throw new Error('square must be between 1 and 64');
  }
  return BigInt(2)
    .pow(num - 1)
    .toString();
};

/**
 * Gets the total number of grains on all squares
 *
 * @return {String} Sum of all squares
 */
export const total = () => {
  let total = BigInt(0);

  for (let squareNum = 1; squareNum <= 64; squareNum++) {
    total = total.add(square(squareNum));
  }

  return total.toString();
};
