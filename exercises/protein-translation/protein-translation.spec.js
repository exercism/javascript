var translate = require('./protein-translation');

describe('ProteinTranslation', function () {
  it('Empty RNA has no proteins', function () {
    expect(translate()).toEqual([]);
  });

  xit('Methionine codon translates into protein', function () {
    expect(translate('AUG')).toEqual(['Methionine']);
  });

  xit('Phenylalanine codons translate into protein', function () {
    expect(translate('UUUUUC')).toEqual(['Phenylalanine', 'Phenylalanine']);
  });

  xit('Leucine codons translate into protein', function () {
    expect(translate('UUAUUG')).toEqual(['Leucine', 'Leucine']);
  });

  xit('Serine codons translate into protein', function () {
    expect(translate('UCUUCCUCAUCG')).toEqual(['Serine', 'Serine', 'Serine', 'Serine']);
  });

  xit('Tyrosine codons translate into protein', function () {
    expect(translate('UAUUAC')).toEqual(['Tyrosine', 'Tyrosine']);
  });

  xit('Cysteine codons translate into protein', function () {
    expect(translate('UGUUGC')).toEqual(['Cysteine', 'Cysteine']);
  });

  xit('Tryptophan codon translates into protein', function () {
    expect(translate('UGG')).toEqual(['Tryptophan']);
  });

  xit('Sequence starts with stop codon 1', function () {
    expect(translate('UAAUUUUUA')).toEqual([]);
  });

  xit('Sequence starts with stop codon 2', function () {
    expect(translate('UAGAUGUAU')).toEqual([]);
  });

  xit('Sequence starts with stop codon 3', function () {
    expect(translate('UGAUGU')).toEqual([]);
  });

  xit('Small RNA strand', function () {
    expect(translate('AUGUUUUCU')).toEqual(['Methionine', 'Phenylalanine', 'Serine']);
  });

  xit('Stop codon ends translation', function () {
    expect(translate('AUGUUUUCUUAAAUG')).toEqual(['Methionine', 'Phenylalanine', 'Serine']);
  });

  xit('Invalid codon throws error', function () {
    expect(
      function () {
        translate('LOL');
      }
    ).toThrow(new Error('Invalid codon'));
  });
});
