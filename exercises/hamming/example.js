
class Hamming {

  compute(strand1, strand2) {
    let len1 = strand1.length;
    let len2 = strand2.length;
    if (len1 !== len2) {
      throw new Error('DNA strands must be of equal length.');
    }

    let distance = 0;
    let idx = -1;
    let end = len1; // there could be len2, they're equal
    while (++idx < end) {
      if (strand1[idx] !== strand2[idx]) {
        distance++;
      }
    }

    return distance;
  }

}

export default Hamming;
