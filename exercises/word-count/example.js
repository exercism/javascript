class Words {

  count(input) {
    const counts = {};
    const words = input.match(/\S+/g);

    words.forEach((word) => {
      const lcWord = word.toLowerCase();
      counts[lcWord] = counts.hasOwnProperty(lcWord) ? counts[lcWord] + 1 : 1;
    });

    return counts;
  }

}

export default Words;
