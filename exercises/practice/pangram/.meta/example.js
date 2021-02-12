const notAlpha = /[^a-z]+/gi;
const alphaLength = 26;

export const isPangram = (candidate) => {
  const cleaned = candidate.replace(notAlpha, '').toLowerCase();
  const sortedSet = new Set([...cleaned].sort());
  return sortedSet.size === alphaLength;
};
