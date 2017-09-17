const countIn = (strand, nucleotide) => [...strand]
  .filter(x => x.includes(nucleotide))
  .length;

class Dna {
  constructor(strand) {
    this.dna = strand || '';
    if (!/^[ACGT]*$/.test(this.dna)) {
      throw new Error(`Input strand must not contain anything but A, C, G or T: ${this.dna}`);
    }
    this.nucleotidesCount = new Map([
      ['A', countIn(this.dna, 'A')],
      ['C', countIn(this.dna, 'C')],
      ['G', countIn(this.dna, 'G')],
      ['T', countIn(this.dna, 'T')],
    ]);
  }
  count(nucleotide) {
    const count = this.nucleotidesCount.get(nucleotide);
    return count || 0;
  }
}

module.exports = Dna;
