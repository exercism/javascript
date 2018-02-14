const count = (str, nuc) => str.split('').filter(nucleotide => nucleotide === nuc).length;

class nucleotideCounts {
  static parse(strand) {
    if (strand.replace(/A|C|G|T/g, '').length) {
      throw new Error('Invalid nucleotide in strand');
    } else {
      return `${count(strand, 'A')} ${count(strand, 'C')} ${count(strand, 'G')} ${count(strand, 'T')}`;
    }
  }
}

export default nucleotideCounts;
