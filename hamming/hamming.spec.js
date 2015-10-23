import Hamming from './hamming';

describe('Hamming', () => {
  let hamming = new Hamming();

  it('no difference between identical strands', () => {
    expect(hamming.compute('A', 'A')).toEqual(0);
  });

  xit('complete hamming distance for single nucleotide strand', () => {
    expect(hamming.compute('A','G')).toEqual(1);
  });

  xit('complete hamming distance for small strand', () => {
    expect(hamming.compute('AG','CT')).toEqual(2);
  });

  xit('small hamming distance', () => {
    expect(hamming.compute('AT','CT')).toEqual(1);
  });

  xit('small hamming distance in longer strand', () => {
    expect(hamming.compute('GGACG', 'GGTCG')).toEqual(1);
  });

  xit('large hamming distance', () => {
    expect(hamming.compute('GATACA', 'GCATAA')).toEqual(4);
  });

  xit('hamming distance in very long strand', () => {
    expect(hamming.compute('GGACGGATTCTG', 'AGGACGGATTCT')).toEqual(9);
  });

  xit('throws error when strands are not equal length', () => {
    expect(() => hamming.compute('GGACGGATTCTG', 'AGGAC')).toThrow(
      new Error('DNA strands must be of equal length.')
    );
  });

});
