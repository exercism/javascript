class Hamming {

  compute(strand1, strand2) {
    const len1 = strand1.length;
    const len2 = strand2.length;
    if (len1 !== len2) {
      throw new Error('left and right strands must be of equal length');
    }

    let distance = 0;
    let idx = -1;
    const end = len1; // there could be len2, they're equal
    while (++idx < end) {
      if (strand1[idx] !== strand2[idx]) {
        distance++;
      }
    }

    return distance;
  }

}

export default Hamming;
