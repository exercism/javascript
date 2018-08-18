'use strict';

function Anagram(word) {
  this.word = word;
}

Anagram.prototype.matches = function (wordList) {
  var words = Array.isArray(wordList) ? wordList : [].slice.call(arguments, 0);

  return words.filter(function (candidate) {
    return !sameWord(this.word, candidate) && isAnagram(this.word, candidate);
  }, this);
};

function sameWord(word, candidate) {
  return word.toLowerCase() === candidate.toLowerCase();
}

function isAnagram(word, candiate) {
  return normalize(word) === normalize(candiate);
}

function normalize(string) {
  return string.toLowerCase().split('').sort().toString();
}

module.exports = Anagram;

