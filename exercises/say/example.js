export class Say {
  constructor() {
    this.smallNumbers = {
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

    this.decades = {
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety',
    };

    this.bigNumbers = {
      1000: 'thousand',
      1000000: 'million',
      1000000000: 'billion',
    };
  }

  inEnglish(n) {
    let result;
    const number = { current: n };

    if (n >= 0 && n < 1000000000000) {
      result = this.bigPart(number);
      result += this.threeDigit(number.current);
      return result.replace(/.zero/, '');
    }
    throw new Error('Number must be between 0 and 999,999,999,999.');
  }

  bigPart(number) {
    let factor;
    let result = '';
    const num = number;
    for (let bigNumber = 1000000000; bigNumber >= 1000; bigNumber /= 1000) {
      if (num.current >= bigNumber) {
        factor = Math.floor(num.current / bigNumber);
        result += `${this.threeDigit(factor)} ${this.bigNumbers[bigNumber]} `;
        num.current -= factor * bigNumber;
      }
    }
    return result;
  }

  twoDigit(n) {
    return n < 20 ? this.smallNumbers[n] : this.sayDecade(n);
  }

  threeDigit(n) {
    return n < 100 ? this.twoDigit(n)
      : `${this.smallNumbers[Math.floor(n / 100)]} hundred ${this.twoDigit(n % 100)}`;
  }

  sayDecade(n) {
    for (let decade = 90; decade >= 20; decade -= 10) {
      if (n >= decade) {
        return `${this.decades[decade]}-${this.smallNumbers[n - decade]}`;
      }
    }
    return '';
  }
}
