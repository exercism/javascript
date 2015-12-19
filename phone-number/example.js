export default class PhoneNumber {

  constructor(number) {
    this.rawNumber = number;
    this.cleanedNumber = cleanNumber(number);
  }

  number() { return this.cleanedNumber; }

  areaCode() { return this.cleanedNumber.substr(0, 3); }

  toString() {
    return '(' + this.areaCode() + ')' +
           ' ' +
           exchangeCode(this.cleanedNumber) + '-' +
           subscriberNumber(this.cleanedNumber);
  }
}

function cleanNumber(number) {
  const num = number.replace(/\D/g,'');

  if (num.length === 10) {
    return num;
  }

  if (num.length === 11 && num[0] === '1') {
    return num.substr(1);
  }

  return '0000000000';
}

function exchangeCode(number) {
  return number.substr(3, 3);
}

function subscriberNumber(number) {
  return number.substr(6);
}

