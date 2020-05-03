var alphagram = function(word) {
  return word.split('').sort().join('');
};

var are_anagrams = function(l, r){
  let left = l.toLowerCase();
  let right = r.toLowerCase();

  if (left == right ) return false;

  return alphagram(left) == alphagram(right);
};

var Anagram = function(word){
  this.word = word;
};
Anagram.prototype.match = function(words){
  return words.filter(function(word){
    return are_anagrams(this.word, word);
  },this);
};

module.exports = Anagram;