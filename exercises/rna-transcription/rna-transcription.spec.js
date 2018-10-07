import { toRna } from './rna-transcription';

describe('Transcriptor', () => {
  test('empty rna sequence', () => {
    expect(toRna('')).toEqual('');
  });

  xtest('transcribes cytosine to guanine', () => {
    expect(toRna('C')).toEqual('G');
  });

  xtest('transcribes guanine to cytosine', () => {
    expect(toRna('G')).toEqual('C');
  });

  xtest('transcribes adenine to uracil', () => {
    expect(toRna('A')).toEqual('U');
  });

  xtest('transcribes thymine to adenine', () => {
    expect(toRna('T')).toEqual('A');
  });

  xtest('transcribes all dna nucleotides to their rna complements', () => {
    expect(toRna('ACGTGGTCTTAA'))
      .toEqual('UGCACCAGAAUU');
  });

  xtest('correctly handles invalid input', () => {
    expect(() => toRna('U')).toThrow(new Error('Invalid input DNA.'));
  });

  xtest('correctly handles completely invalid input', () => {
    expect(() => toRna('XXX')).toThrow(new Error('Invalid input DNA.'));
  });

  xtest('correctly handles partially invalid input', () => {
    expect(() => toRna('ACGTXXXCTTAA')).toThrow(new Error('Invalid input DNA.'));
  });
});
