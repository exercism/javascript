export const isArmstrongNumber = (input) => {
  const bigInput = BigInt(input);

  const digits = [...String(bigInput)];

  const sum = digits.reduce(
    (total, current) => total + BigInt(current) ** BigInt(digits.length),
    BigInt(0),
  );

  return sum === bigInput;
};
