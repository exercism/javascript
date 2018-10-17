export default class Isogram {
  constructor(string) {
    this.string = string.replace(/ |-/g, '');
  }

  isIsogram() {
    const uniqueLetters = this.string.toLowerCase().split('').filter((element, index, self) => self.indexOf(element) === index);
    return uniqueLetters.length === this.string.length;
  }
}
