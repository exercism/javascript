import { compute } from './hamming';

describe('Hamming', () => {
  test('no difference between empty strands', () => {
    expect(compute('', '')).toEqual(0);
  });

  xtest('no difference between identical strands', () => {
    expect(compute('A', 'A')).toEqual(0);
  });

  xtest('long identical strands', () => {
    expect(compute('GGACTGA', 'GGACTGA')).toEqual(0);
  });

  xtest('complete distance in single nucleotide strands', () => {
    expect(compute('A', 'G')).toEqual(1);
  });

  xtest('complete distance in small strands', () => {
    expect(compute('AG', 'CT')).toEqual(2);
  });

  xtest('small distance in small strands', () => {
    expect(compute('AT', 'CT')).toEqual(1);
  });

  xtest('small distance', () => {
    expect(compute('GGACG', 'GGTCG')).toEqual(1);
  });

  xtest('small distance in long strands', () => {
    expect(compute('ACCAGGG', 'ACTATGG')).toEqual(2);
  });

  xtest('non-unique character in first strand', () => {
    expect(compute('AAG', 'AAA')).toEqual(1);
  });

  xtest('non-unique character in second strand', () => {
    expect(compute('AAA', 'AAG')).toEqual(1);
  });

  xtest('same nucleotides in different positions', () => {
    expect(compute('TAG', 'GAT')).toEqual(2);
  });

  xtest('large distance', () => {
    expect(compute('GATACA', 'GCATAA')).toEqual(4);
  });

  xtest('large distance in off-by-one strand', () => {
    expect(compute('GGACGGATTCTG', 'AGGACGGATTCT')).toEqual(9);
  });

  xtest('disallow first strand longer', () => {
    expect(() => compute('AATG', 'AAA')).toThrow(
      new Error('left and right strands must be of equal length'),
    );
  });

  xtest('disallow second strand longer', () => {
    expect(() => compute('ATA', 'AGTG')).toThrow(
      new Error('left and right strands must be of equal length'),
    );
  });
});
