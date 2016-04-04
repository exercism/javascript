class Words {

  count(input) {
    let counts = {};
    let words = input.match(/\S+/g);

    words.forEach((word) => {
      const lcWord = word.toLowerCase();
      counts[lcWord] = counts.hasOwnProperty(lcWord) ? counts[lcWord] + 1 : 1;
    });

    return counts;
  }

}

export default Words;
