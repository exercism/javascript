const DNA_TO_RNA = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

export default class Transcriptor {
  toRna(dna) {
    const rna = dna.replace(/./g, nucleotide => DNA_TO_RNA[nucleotide]);

    if (rna.length !== dna.length) {
      // invalid characters in the strand
      throw new Error('Invalid input DNA.');
    } else {
      return rna;
    }
  }
}
