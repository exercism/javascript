function isValid(number) {
  number = number.replace(/\s/g, '');
  const digits = [...number];

  const sum = digits
    // convert to integers
    .map(d => parseInt(d, 10))
    // double even positions (odd indexes)
    .map((d, i) => {
      if (i % 2 !== 0) {
        return d * 2;
      }
      return d;
    })
    // limit to digits less than 10
    .map((d) => {
      if (d > 9) {
        return d - 9;
      }
      return d;
    })
    // sum all digits
    .reduce((d, acc) => d + acc, 0);

  return sum > 0 && sum % 10 === 0;
}

export default class Luhn {

  constructor(number) {
    this.valid = isValid(number);
  }

}
