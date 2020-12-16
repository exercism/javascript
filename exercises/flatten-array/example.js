export const flatten = (arr) => {
  return arr
    .reduce(
      (acc, el) =>
        Array.isArray(el) ? acc.concat(flatten(el)) : acc.concat(el),
      []
    )
    .filter((el) => el !== null && el !== undefined);
};
