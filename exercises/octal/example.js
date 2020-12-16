export class Octal {
  constructor(octal) {
    const newOctal = octal.match(/[^0-7]/) ? '0' : octal;
    return {
      toDecimal: () =>
        newOctal
          .split('')
          .reduce((prev, curr) => prev * 8 + parseInt(curr, 8), 0),
    };
  }
}
