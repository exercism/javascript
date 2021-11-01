const count = (str, nuc) =>
  [...str].filter((nucleotide) => nucleotide === nuc).length;

export function countNucleotides(strand) {
  if (strand.replace(/A|C|G|T/g, '').length) {
    throw new Error('Invalid nucleotide in strand');
  }

  return `${count(strand, 'A')} ${count(strand, 'C')} ${count(
    strand,
    'G'
  )} ${count(strand, 'T')}`;
}
