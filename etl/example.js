function transform(input) {
  let output = {};

  Object.keys(input).forEach((key) => {
    let items = input[key] || [];

    items.forEach((item) => {
      let value = item.toLowerCase();
      output[value] = Number(key);
    });
  });

  return output;
};

export default transform;
