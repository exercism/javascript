// Using this method to calculate the square root: https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Binary_numeral_system_(base_2)

export const squareRoot = (radicand) => {
  let n = radicand;
  let bit = 1 << 14;
  let result = 0;

  while (bit > n) bit >>= 2;

  while (bit !== 0) {
    if (n >= result + bit) {
      n -= result + bit;
      result = (result >> 1) + bit;
    } else {
      result >>= 1;
    }
    bit >>= 2;
  }
  return result;
};
