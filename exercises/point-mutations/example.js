class DNA {
  constructor(nucleotides){
    this.nucleotides = nucleotides;
  }

  hammingDistance(comparison){
    let distance = 0;
    const calculationDistance = Math.min(this.nucleotides.length, comparison.length);

    for (let i = 0; i < calculationDistance; i++) {
      let currentNucleotide = this.nucleotides[i];
      let comparisonNucleotide = comparison[i];

      if (currentNucleotide !== comparisonNucleotide) { distance++; }
    }

    return distance;
  }
}

export default DNA;
