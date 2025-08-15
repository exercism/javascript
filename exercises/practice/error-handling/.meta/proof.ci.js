export const processString = (input) => {
  if (typeof input !== 'string') {
    throw new TypeError();
  }
  if (input === '') {
    throw new Error();
  }
  return input.toUpperCase();
};
