const validate = input => {
  const digits = [...String(input)];
  const sum = digits.reduce((total, current) => (
    total + Math.pow(current, digits.length)
  ), 0);
  return sum === input;
}

export default {
  validate,
}
