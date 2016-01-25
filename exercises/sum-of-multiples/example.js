const Sum = (factors = [3, 5]) => {
  let self = this instanceof Sum ? this : Object.getPrototypeOf(Sum);
  self.factors = factors;

  self.to = limit => {
    let multiples = {};
    self.factors.forEach(factor => {
      for (let ii = factor; ii < limit; ii += factor) {
        multiples[ii] = ii;
      }
    });

    return Object.keys(multiples).reduce((prev, curr) => prev += multiples[curr], 0);
  };

  return self;
}

export default Sum;
