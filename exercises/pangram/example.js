const notAlpha = /[^a-z]+/gi,
  alphaLength = 26;
let cleaned,
  sortedSet;

export const isPangram = candidate => {
  cleaned = (candidate.replace(notAlpha, '')).toLowerCase();
  sortedSet = new Set([...cleaned].sort());
  return sortedSet.size === alphaLength;
}
