export default function (octal) {
  octal = octal.match(/[^0-7]/) ? octal = '0' : octal;
  return {
    toDecimal: () => octal.split('').reduce((prev, curr) => prev * 8 + parseInt(curr), 0),
  };
}
