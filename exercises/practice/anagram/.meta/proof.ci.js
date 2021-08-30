const normalize = (str) => str.toLowerCase().split('').sort().join();
const sameWord = (word, candidate) =>
  word.toLowerCase() === candidate.toLowerCase();
const isAnagram = (word, candidate) => normalize(word) === normalize(candidate);

export const findAnagrams = (subject, candidates) => {
  const wordsCopy = Array.isArray(candidates) ? candidates : [...candidates];
  return wordsCopy.filter(
    (candidate) =>
      !sameWord(subject, candidate) && isAnagram(subject, candidate)
  );
};
