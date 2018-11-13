const getDigits = numberString => [...numberString].map(digit => parseInt(digit, 10));

const slices = (digits, sliceSize) => {
  const result = [];
  for (let i = 0; i < digits.length - sliceSize + 1; i += 1) {
    result.push(digits.slice(i, i + sliceSize));
  }
  return result;
};

export const largestSeriesProduct = (numberString, size) => {
  if (numberString.match('[^0-9]')) {
    throw new Error('Invalid input.');
  }
  if (size < 0) {
    throw new Error('Invalid input.');
  }
  if (size > numberString.length) {
    throw new Error('Slice size is too big.');
  }

  return slices(getDigits(numberString), size).reduce((max, slice) => {
    const product = slice.reduce((a, b) => a * b, 1);
    return product > max ? product : max;
  }, 0);
};
