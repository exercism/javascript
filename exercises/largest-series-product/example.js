const getDigits = numberString => [...numberString].map(digit => parseInt(digit, 10));

const slices = (digits, sliceSize) => {
  const result = [];
  let slice = [];

  for (let i = 0; i < digits.length - sliceSize + 1; i++) {
    for (let j = 0; j < sliceSize; j++) {
      slice.push(digits[i + j]);
    }
    result.push(slice);
    slice = [];
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

  let product,
    max = 0;
  slices(getDigits(numberString), size).forEach((slice) => {
    let product = slice.reduce((a, b) => a * b, 1);
    if (product > max) {
      max = product;
    }
  });
  return max;
};
