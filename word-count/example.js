class Words {

  count(input) {
    let counts = {};
    let words = input.match(/\S+/g);

    words.forEach((word) => {
      counts[word] = counts.hasOwnProperty(word) ? counts[word] + 1 : 1;
    });

    return counts;
  }

}

export default Words;
