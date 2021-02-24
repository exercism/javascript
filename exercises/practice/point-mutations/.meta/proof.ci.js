export class DNA {
  constructor(nucleotides) {
    this.nucleotides = nucleotides;
  }

  hammingDistance(comparison) {
    let distance = 0;
    const calculationDistance = Math.min(
      this.nucleotides.length,
      comparison.length
    );

    for (let i = 0; i < calculationDistance; i += 1) {
      const currentNucleotide = this.nucleotides[i];
      const comparisonNucleotide = comparison[i];

      if (currentNucleotide !== comparisonNucleotide) {
        distance += 1;
      }
    }

    return distance;
  }
}
