const normalize = (str) => str.toLowerCase().split('').sort().join();
const sameWord = (word, candidate) =>
  word.toLowerCase() === candidate.toLowerCase();
const isAnagram = (word, candiate) => normalize(word) === normalize(candiate);

export const findAnagrams = (subject, candidates) => {
  const wordsCopy = Array.isArray(candidates) ? candidates : [...candidates];
  return wordsCopy.filter(
    (candidate) =>
      !sameWord(subject, candidate) && isAnagram(subject, candidate)
  );
};
