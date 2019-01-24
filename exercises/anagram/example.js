const normalize = str => str.toLowerCase().split('').sort().join();
const sameWord = (word, candidate) => word.toLowerCase() === candidate.toLowerCase();
const isAnagram = (word, candiate) => normalize(word) === normalize(candiate);

export class Anagram {
  constructor(word) {
    this.word = word;
  }

  matches(words) {
    const wordsCopy = Array.isArray(words) ? words : [...words];
    return wordsCopy.filter(candidate => !sameWord(this.word, candidate)
      && isAnagram(this.word, candidate));
  }
}
