// //
// // This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// // convenience to get you started writing code faster.
// //

// export const findAnagrams = () => {
//   throw new Error("Remove this statement and implement this function");
// }

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