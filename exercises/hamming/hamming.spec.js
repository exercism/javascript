import { compute } from './hamming';

describe('Hamming', () => {
  test('empty strands', () => {
    expect(compute('', '')).toEqual(0);
  });

  xtest('single letter identical strands', () => {
    expect(compute('A', 'A')).toEqual(0);
  });

  xtest('single letter different strands', () => {
    expect(compute('G', 'T')).toEqual(1);
  });

  xtest('long identical strands', () => {
    expect(compute('GGACTGAAATCTG', 'GGACTGAAATCTG')).toEqual(0);
  });

  xtest('long different strands', () => {
    expect(compute('GGACGGATTCTG', 'AGGACGGATTCT')).toEqual(9);
  });

  xtest('disallow first strand longer', () => {
    expect(() => compute('AATG', 'AAA')).toThrow(
      new Error('left and right strands must be of equal length')
    );
  });

  xtest('disallow second strand longer', () => {
    expect(() => compute('ATA', 'AGTG')).toThrow(
      new Error('left and right strands must be of equal length')
    );
  });

  xtest('disallow left empty strand', () => {
    expect(() => compute('', 'G')).toThrow(
      new Error('left strand must not be empty')
    );
  });

  xtest('disallow right empty strand', () => {
    expect(() => compute('G', '')).toThrow(
      new Error('right strand must not be empty')
    );
  });
});
