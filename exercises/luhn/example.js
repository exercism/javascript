export const valid = (number) => {
  const trimmed = number.replace(/\s/g, '');
  const digits = [...trimmed];

  const sum = digits
    // convert to integers
    .map((d) => parseInt(d, 10))
    // double the second digits, starting from right
    .map((d, i) => {
      if ((i + digits.length) % 2 === 0) {
        return d * 2;
      }
      return d;
    })
    // limit to digits less than 10
    .map((d) => {
      if (d > 9) {
        return d - 9;
      }
      return d;
    })
    // sum all digits
    .reduce((acc, d) => acc + d, 0);

  return digits.length > 1 && sum % 10 === 0;
};
