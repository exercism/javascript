import Transcriptor from './rna-transcription';

describe('Transcriptor', () => {
  let transcriptor = new Transcriptor();

  it('transcribes cytosine to guanine', () => {
    expect(transcriptor.toRna('C')).toEqual('G');
  });

  xit('transcribes guanine to cytosine', () => {
    expect(transcriptor.toRna('G')).toEqual('C');
  });

  xit('transcribes adenine to uracil', () => {
    expect(transcriptor.toRna('A')).toEqual('U');
  });

  xit('transcribes thymine to adenine', () => {
    expect(transcriptor.toRna('T')).toEqual('A');
  });

  xit('transcribes all dna nucleotides to their rna complements', () => {
    expect(transcriptor.toRna('ACGTGGTCTTAA'))
        .toEqual('UGCACCAGAAUU');
  });

  xit('correctly handles invalid input', () => {
    expect(() => transcriptor.toRna('U')).toThrow(
      new Error('Invalid input DNA.')
    );
  });

  xit('correctly handles completely invalid input', () => {
    expect(() => transcriptor.toRna('XXX')).toThrow(
      new Error('Invalid input DNA.')
    );
  });

  xit('correctly handles partially invalid input', () => {
    expect(() => transcriptor.toRna('ACGTXXXCTTAA')).toThrow(
      new Error('Invalid input DNA.')
    );
  });

});
