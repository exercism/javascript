const notAlpha = /[^a-z]+/gi;
const alphaLength = 26;
let cleaned;
let sortedSet;

export const isPangram = (candidate) => {
  cleaned = (candidate.replace(notAlpha, '')).toLowerCase();
  sortedSet = new Set([...cleaned].sort());
  return sortedSet.size === alphaLength;
};
