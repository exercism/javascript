export const compute = (strand1, strand2) => {
  const len1 = strand1.length;
  const len2 = strand2.length;

  if (len1 !== len2) {
    throw new Error('strands must be of equal length');
  }

  return [...strand1].filter((element, index) => element !== strand2[index])
    .length;
};
