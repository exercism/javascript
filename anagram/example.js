
const sameWord = (word, candidate) =>
  word.toLowerCase() === candidate.toLowerCase();

const isAnagram = (word, candiate) =>
  normalize(word) === normalize(candiate);

const normalize = str => str.toLowerCase().split('').sort().join();

export default class Anagram {
  constructor(word) {
    this.word = word;
  }

  matches(...words) {
    words = Array.isArray(words[0]) ? words[0] : words;

    return words.filter(candidate => {
      return !sameWord(this.word, candidate) && isAnagram(this.word, candidate);
    });
  }
}

