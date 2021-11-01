import { nucleotideCounts } from './nucleotide-count';

describe('count all nucleotides in a strand', () => {
  test('empty strand', () => {
    expect(nucleotideCounts('')).toEqual('0 0 0 0');
  });

  xtest('can count one nucleotide in single-character input', () => {
    expect(nucleotideCounts('G')).toEqual('0 0 1 0');
  });

  xtest('strand with repeated nucleotide', () => {
    expect(nucleotideCounts('GGGGGGG')).toEqual('0 0 7 0');
  });

  xtest('strand with multiple nucleotides', () => {
    expect(
      nucleotideCounts(
        'AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC'
      )
    ).toEqual('20 12 17 21');
  });

  xtest('strand with invalid nucleotides', () => {
    expect(() => nucleotideCounts('AGXXACT')).toThrow(
      new Error('Invalid nucleotide in strand')
    );
  });
});
