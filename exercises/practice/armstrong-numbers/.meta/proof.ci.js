export const isArmstrongNumber = (input) => {
  const digits = [...String(input)];
  const sum = digits.reduce(
    (total, current) => total + current ** digits.length,
    0
  );
  return sum === input;
};
