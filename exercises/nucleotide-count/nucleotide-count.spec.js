import Dna from './nucleotide-count';

describe('DNA', () => {
  it('counts an undefined DNA strand as 0', () => {
    const dna = new Dna();
    expect(dna.count('A')).toEqual(0);
    expect(dna.count('C')).toEqual(0);
    expect(dna.count('G')).toEqual(0);
    expect(dna.count('T')).toEqual(0);
  });

  xit('counts a single repetitive nucleotide correctly.', () => {
    const strand = 'CCCCC';
    expect(new Dna(strand).count(strand[0])).toEqual(strand.length);
  });

  xit('returns the same count values steadily.', () => {
    const strand = 'AACCGGTTAACCGGTT';
    const countOfFirstChar = 4;
    const acid = new Dna(strand);

    expect(acid.count(strand[0])).toEqual(countOfFirstChar);
    expect(acid.count(strand[0])).toEqual(countOfFirstChar);
    expect(acid.count(strand[0])).toEqual(countOfFirstChar);
  });

  xit('counts 0 for unknown or invalid nucleotides.', () => {
    const strand = 'ACGTACGT';

    // U-nucleotide as part of the RNA
    expect(new Dna(strand).count('U')).toEqual(0);
    // no-real-nucleotide
    expect(new Dna(strand).count('Z')).toEqual(0);
    // special-character-nucleotides
    expect(new Dna(strand).count('Ä')).toEqual(0);
    expect(new Dna(strand).count('×')).toEqual(0);
    // 'poocleotide' (aka a Unicode character nucleotide)
    expect(new Dna(strand).count('💩')).toEqual(0);
  });

  xit('counts 0 for nucleotide sequences, even if they match.', () => {
    const strand = 'ACACACGTCACGTC';

    // matching AC
    let includedSubStrand = strand.substr(0, 2);
    expect(new Dna(strand).count(includedSubStrand)).toEqual(0);

    // matching GTC
    includedSubStrand = strand.substr(6, 3);
    expect(new Dna(strand).count(includedSubStrand)).toEqual(0);

    // non-matching GC
    expect(new Dna(strand).count('GC')).toEqual(0);
  });

  xit('counts all nucleotides correctly', () => {
    const strand = 'AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC';
    const dna = new Dna(strand);
    const expected = {
      A: 20,
      T: 21,
      C: 12,
      G: 17,
    };
    const testVals = {
      A: dna.count('A'),
      T: dna.count('T'),
      C: dna.count('C'),
      G: dna.count('G'),
    };

    expect(testVals).toEqual(expected);
  });

  xit('validates DNA for correct nucleotides', () => {
    expect(() => new Dna('JOHNNYAPPLESEED')).toThrow();
  });
});
