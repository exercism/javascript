
const sameWord = (word, candidate) =>
  word.toLowerCase() === candidate.toLowerCase();

const isAnagram = (word, candiate) =>
  normalize(word) === normalize(candiate);

const normalize = str => str.toLowerCase().split('').sort().join();

export default class Anagram {
  constructor(word) {
    this.word = word;
  }

  matches(words) {
    words = Array.isArray(words) ? words : Array.from(arguments);

    return words.filter(candidate => !sameWord(this.word, candidate) && isAnagram(this.word, candidate));
  }
}

