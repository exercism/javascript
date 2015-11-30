export default class Luhn {

  constructor(number) {
    this.checkDigit = number % 10;
    this.addends = Luhn.calculateAddends(number);
    this.checksum = Luhn.calculateChecksum(this.addends);
    this.valid = Luhn.determineIfValid(this.checksum);
  }

  static calculateAddends(number) {
    const numberAsString = '' + number + '',
      numbers = [...numberAsString],
      addends = [];

    for (let i = 0; i < numbers.length; i++) {
      const index = numbers.length - 1 - i;
      let currentAddend = parseInt(numbers[index], 10);

      if ((i + 1) % 2 === 0) {
        currentAddend = currentAddend * 2;
        if (currentAddend > 10) {
          currentAddend = currentAddend - 9;
        }
      }
      addends.push(currentAddend);
    }
    return addends.reverse();
  }

  static calculateChecksum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }

  static determineIfValid(sum) {
    return (sum % 10 === 0);
  }

  static create(number) {
    let finalNumber = number * 10,
      luhnNumber = new Luhn(finalNumber),
      index = 0;

    while (!luhnNumber.valid) {
      finalNumber = number * 10 + index;
      luhnNumber = new Luhn(finalNumber);
      if (luhnNumber.valid) {
        break;
      }
      index += 1;
    }
    return finalNumber;
  };
}
