const smallNumbers = {
  0:  'zero',
  1:  'one',
  2:  'two',
  3:  'three',
  4:  'four',
  5:  'five',
  6:  'six',
  7:  'seven',
  8:  'eight',
  9:  'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen'
};

const decades = {
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
};

const bigNumbers = {
  1000:       'thousand',
  1000000:    'million',
  1000000000: 'billion'
};

function bigPart(number) {
  let factor, result = '';
  for (let bigNumber = 1000000000; bigNumber >= 1000; bigNumber /= 1000) {
    if (number.current >= bigNumber) {
      factor = Math.floor(number.current / bigNumber);
      result += threeDigit(factor) + ' ' + bigNumbers[bigNumber] + ' ';
      number.current = number.current - (factor * bigNumber);
    }
  }
  return result;
}

const sayDecade = n => {
  for (let decade = 90; decade >= 20; decade -= 10) {
    if (n >= decade) {
      return decades[decade] + '-' + smallNumbers[n - decade];
    }
  }
};

const twoDigit = n => n < 20 ? smallNumbers[n] : sayDecade(n);

const threeDigit = n => n < 100 ? twoDigit(n)
  : smallNumbers[Math.floor(n / 100)] + ' hundred ' + twoDigit(n % 100);

export default class Say {
  inEnglish(n) {
    let result;
    const number = {current: n};

    if (0 <= n && n < 1000000000000) {
      result = bigPart(number);
      result += threeDigit(number.current);
      return result.replace(/.zero/, '');
    } else {
      throw new Error('Number must be between 0 and 999,999,999,999.');
    }
  }
}
