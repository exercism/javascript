export const largestProduct = (digits, seriesLength) => {
  if (seriesLength === 0) {
    return 1;
  }
  if (seriesLength > digits.length) {
    throw new Error('Span must be smaller than string length');
  }
  if (seriesLength < 0) {
    throw new Error('Span must be greater than zero');
  }

  if (!/^[0-9]+$/g.test(digits)) {
    throw new Error('Digits input must only contain digits');
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
