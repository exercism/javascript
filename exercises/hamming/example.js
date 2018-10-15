export const compute = (strand1, strand2) => {
  const len1 = strand1.length;
  const len2 = strand2.length;
  if (len1 !== len2) {
    throw new Error('left and right strands must be of equal length');
  }

  let distance = 0;
  const end = len1; // there could be len2, they're equal
  for (let idx = 0; idx < end; idx += 1) {
    if (strand1[idx] !== strand2[idx]) {
      distance += 1;
    }
  }

  return distance;
};
