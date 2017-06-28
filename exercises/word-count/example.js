class Words {

  constructor() {
    this.words = null;
  }

  count(input) {
    const counts = {};
    this.words = input.match(/\S+/g);

    this.words.forEach((word) => {
      const lcWord = word.toLowerCase();
      counts[lcWord] = counts.hasOwnProperty(lcWord) ? counts[lcWord] + 1 : 1;
    });

    return counts;
  }

}

export default Words;
