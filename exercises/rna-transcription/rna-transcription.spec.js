import Transcriptor from './rna-transcription';

describe('Transcriptor', () => {
  const transcriptor = new Transcriptor();

  test('transcribes cytosine to guanine', () => {
    expect(transcriptor.toRna('C')).toEqual('G');
  });

  xtest('transcribes guanine to cytosine', () => {
    expect(transcriptor.toRna('G')).toEqual('C');
  });

  xtest('transcribes adenine to uracil', () => {
    expect(transcriptor.toRna('A')).toEqual('U');
  });

  xtest('transcribes thymine to adenine', () => {
    expect(transcriptor.toRna('T')).toEqual('A');
  });

  xtest('transcribes all dna nucleotides to their rna complements', () => {
    expect(transcriptor.toRna('ACGTGGTCTTAA'))
        .toEqual('UGCACCAGAAUU');
  });

  xtest('correctly handles invalid input', () => {
    expect(() => transcriptor.toRna('U')).toThrow(
      new Error('Invalid input DNA.'),
    );
  });

  xtest('correctly handles completely invalid input', () => {
    expect(() => transcriptor.toRna('XXX')).toThrow(
      new Error('Invalid input DNA.'),
    );
  });

  xtest('correctly handles partially invalid input', () => {
    expect(() => transcriptor.toRna('ACGTXXXCTTAA')).toThrow(
      new Error('Invalid input DNA.'),
    );
  });
});
