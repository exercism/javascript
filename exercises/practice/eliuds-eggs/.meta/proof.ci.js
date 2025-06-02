export const eggCount = (displayValue) =>
  [...displayValue.toString(2)].reduce(
    (acc, curr) => (curr === '1' ? (acc += 1) : acc),
    0,
  );
