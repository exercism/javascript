export const compute = (strand1, strand2) => {
  const len1 = strand1.length;
  const len2 = strand2.length;
  if (len1 !== len2) {
    throw new Error('left and right strands must be of equal length');
  }

  return [...strand1].reduce(
    (distance, _, i) => (strand1[i] !== strand2[i] ? distance + 1 : distance),
    0,
  );
};
