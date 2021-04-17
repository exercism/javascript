/**
 * Gets the number of grains on the nth square
 *
 * @param {Number} num Number to compute its square
 *
 * @return {BigInt} Square of num
 */
export const square = (num) => {
  if (num < 1 || num > 64) {
    throw new Error('square must be between 1 and 64');
  }
  return BigInt(2) ** BigInt(num - 1);
};

/**
 * Gets the total number of grains on all squares
 *
 * @return {BigInt} Sum of all squares
 */
export const total = () => {
  let result = BigInt(0);

  for (let squareNum = 1; squareNum <= 64; squareNum++) {
    result += square(squareNum);
  }

  return result;
};
