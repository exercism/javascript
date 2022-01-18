const smallNumbers = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
};

const decades = {
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

const bigNumbers = {
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
};

const bigPart = (num) => {
  let factor;
  let res = '';
  for (let bigNumber = 1000000000; bigNumber >= 1000; bigNumber /= 1000) {
    if (num.current >= bigNumber) {
      factor = Math.floor(num.current / bigNumber);
      res += `${threeDigit(factor)} ${bigNumbers[bigNumber]} `;
      num.current -= factor * bigNumber;
    }
  }
  return res;
};

const twoDigit = (num) => {
  return num < 20 ? smallNumbers[num] : sayDecade(num);
};

const threeDigit = (num) => {
  return num < 100
    ? twoDigit(num)
    : `${smallNumbers[Math.floor(num / 100)]} hundred ${twoDigit(num % 100)}`;
};

const sayDecade = (num) => {
  for (let decade = 90; decade >= 20; decade -= 10) {
    if (num >= decade) {
      return `${decades[decade]}-${smallNumbers[num - decade]}`;
    }
  }
  return '';
};

export const say = (n) => {
  let result;
  let number = { current: n };
  if (n >= 0 && n < 1000000000000) {
    result = bigPart(number);
    result += threeDigit(number.current);
    return result.replace(/.zero/, '');
  }
  throw new Error('Number must be between 0 and 999,999,999,999.');
};
