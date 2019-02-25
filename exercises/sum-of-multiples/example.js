export const sumOfMultiples = (factors, limit) => {
  const multiples = {};
  factors.forEach((factor) => {
    for (let ii = factor; ii < limit; ii += factor) {
      multiples[ii] = ii;
    }
  });

  return Object.keys(multiples).reduce((prev, curr) => prev + multiples[curr], 0);
};
