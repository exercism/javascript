const DNA_TO_RNA = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

export const toRna = (dna) =>
  dna.replace(/./g, (nucleotide) => DNA_TO_RNA[nucleotide]);
