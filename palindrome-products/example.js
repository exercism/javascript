let isPalindrome = (num) => num.toString().split('').reverse().join('') === num.toString();

let Palindromes = (params) => {
  let maxFactor, minFactor, maxProduct, minProduct, data;
  maxFactor = params.maxFactor;
  minFactor = params.minFactor || 1;
  maxProduct = 1;
  minProduct = Infinity;
  data = [];

  for (let ii = minFactor; ii < maxFactor; ii++) {
    for (let jj = ii; jj <= maxFactor; jj++) {
      let product = ii * jj;
      if (isPalindrome(product)) {
        data[product] = [ii, jj];
        maxProduct = Math.max(maxProduct, product);
        minProduct = Math.min(minProduct, product);
      }
    }
  }

  return {
    largest:  {
      value:   maxProduct,
      factors: data[maxProduct]
    },
    smallest: {
      value:   minProduct,
      factors: data[minProduct]
    }
  };
};

export default Palindromes;


