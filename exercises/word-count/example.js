export class Words {
  count(input) {
    this.counts = {};
    this.words = input.match(/\S+/g);

    this.words.forEach((word) => {
      const lcWord = word.toLowerCase();
      this.counts[lcWord] = Object.prototype.hasOwnProperty.call(this.counts, lcWord)
        ? this.counts[lcWord] + 1 : 1;
    });
    return this.counts;
  }
}
