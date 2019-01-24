import { DNA } from './point-mutations';

describe('DNA', () => {
  test('no difference between empty strands', () => {
    const dna = new DNA('');
    expect(dna.hammingDistance('')).toEqual(0);
  });

  xtest('no difference between identical strands', () => {
    const dna = new DNA('GGACTGA');
    expect(dna.hammingDistance('GGACTGA')).toEqual(0);
  });

  xtest('complete hamming distance in small strand', () => {
    const dna = new DNA('ACT');
    expect(dna.hammingDistance('GGA')).toEqual(3);
  });

  xtest('hamming distance in off by one strand', () => {
    const dna = new DNA('GGACGGATTCTGACCTGGACTAATTTTGGGG');
    expect(dna.hammingDistance('AGGACGGATTCTGACCTGGACTAATTTTGGGG')).toEqual(19);
  });

  xtest('small hamming distance in middle somewhere', () => {
    const dna = new DNA('GGACG');
    expect(dna.hammingDistance('GGTCG')).toEqual(1);
  });

  xtest('larger distance', () => {
    const dna = new DNA('ACCAGGG');
    expect(dna.hammingDistance('ACTATGG')).toEqual(2);
  });

  xtest('shortens other strand when longer', () => {
    const dna = new DNA('AAACTAGGGG');
    expect(dna.hammingDistance('AGGCTAGCGGTAGGAC')).toEqual(3);
  });

  xtest('shortens original strand when longer', () => {
    const dna = new DNA('GACTACGGACAGGGTAGGGAAT');
    expect(dna.hammingDistance('GACATCGCACACC')).toEqual(5);
  });
});
