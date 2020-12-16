import { toRna } from './rna-transcription';

describe('Transcription', () => {
  test('empty rna sequence', () => {
    expect(toRna('')).toEqual('');
  });

  xtest('transcribes cytosine to guanine', () => {
    expect(toRna('C')).toEqual('G');
  });

  xtest('transcribes guanine to cytosine', () => {
    expect(toRna('G')).toEqual('C');
  });

  xtest('transcribes thymine to adenine', () => {
    expect(toRna('T')).toEqual('A');
  });

  xtest('transcribes adenine to uracil', () => {
    expect(toRna('A')).toEqual('U');
  });

  xtest('transcribes all dna nucleotides to their rna complements', () => {
    expect(toRna('ACGTGGTCTTAA')).toEqual('UGCACCAGAAUU');
  });
});
