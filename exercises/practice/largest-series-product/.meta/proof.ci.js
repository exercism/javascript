export const largestProduct = (digits, seriesLength) => {
  if (seriesLength === 0) {
    return 1;
  }
  if (seriesLength > digits.length) {
    throw new Error('span must not exceed string length');
  }
  if (seriesLength < 0) {
    throw new Error('span must not be negative');
  }

  if (!/^[0-9]+$/g.test(digits)) {
    throw new Error('digits input must only contain digits');
  }

  let result = 0;
  for (let i = 0; i <= digits.length - seriesLength; i++) {
    const product = digits
      .substring(i, i + seriesLength)
      .split('')
      .map((digit) => Number(digit))
      .reduce((a, b) => a * b);

    if (product > result) {
      result = product;
    }
  }
  return result;
};
