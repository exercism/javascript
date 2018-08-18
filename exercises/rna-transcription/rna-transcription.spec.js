var DnaTranscriber = require('./rna-transcription');
var dnaTranscriber = new DnaTranscriber();

describe('toRna()', function () {
  it('transcribes cytosine to guanine', function () {
    expect(dnaTranscriber.toRna('C')).toEqual('G');
  });

  xit('transcribes guanine to cytosine', function () {
    expect(dnaTranscriber.toRna('G')).toEqual('C');
  });

  xit('transcribes adenine to uracil', function () {
    expect(dnaTranscriber.toRna('A')).toEqual('U');
  });

  xit('transcribes thymine to adenine', function () {
    expect(dnaTranscriber.toRna('T')).toEqual('A');
  });

  xit('transcribes all dna nucleotides to their rna complements', function () {
    expect(dnaTranscriber.toRna('ACGTGGTCTTAA'))
      .toEqual('UGCACCAGAAUU');
  });

  xit('correctly handles completely invalid input', function () {
    expect(function () { dnaTranscriber.toRna('XXX'); }).toThrow(
      new Error('Invalid input')
    );
  });

  xit('correctly handles partially invalid input', function () {
    expect(function () { dnaTranscriber.toRna('ACGTXXXCTTAA'); }).toThrow(
      new Error('Invalid input')
    );
  });
});
