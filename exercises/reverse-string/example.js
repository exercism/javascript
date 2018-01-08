class ReverseString {
  constructor(str) {
    this.str = str;
  }
  reverseString() {
    const charArray = this.str.split('');
    return charArray.reverse().join('');
  }
}

export default ReverseString;
