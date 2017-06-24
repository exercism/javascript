export default class PhoneNumber {

  constructor(number) {
    this.rawNumber = number;
  }

  number() {
    if (/[a-zA-Z]/.test(this.rawNumber)) {
      return null;
    }

    return this._cleanedNumber();
  }

  _cleanedNumber() {
    const num = this.rawNumber.replace(/\D/g, '');

    if (num.length === 10) {
      return num;
    }

    if (num.length === 11 && num[0] === '1') {
      return num.substr(1);
    }

    return null;
  }
}
