export class PhoneNumber {
  constructor(number) {
    this.rawNumber = number;
  }

  number() {
    if (/[a-zA-Z]/.test(this.rawNumber)) {
      return null;
    }

    return this.cleanedNumber();
  }

  cleanedNumber() {
    const num = this.rawNumber.replace(/\D/g, '');

    if (num.length === 10 && num[0] >= 2 && num[3] >= 2) {
      return num;
    }

    if (num.length === 11 && num[0] === '1' && num[1] >= 2 && num[4] >= 2) {
      return num.substr(1);
    }

    return null;
  }
}
