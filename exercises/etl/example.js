export const transform = (input) => {
  const output = {};

  Object.keys(input).forEach((key) => {
    const items = input[key] || [];

    items.forEach((item) => {
      const value = item.toLowerCase();
      output[value] = Number(key);
    });
  });

  return output;
};
