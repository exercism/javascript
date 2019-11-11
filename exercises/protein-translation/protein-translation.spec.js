import { translate } from './protein-translation';

describe('ProteinTranslation', () => {
  test('Empty RNA has no proteins', () => {
    expect(translate()).toEqual([]);
  });

  xtest('Methionine codon translates into protein', () => {
    expect(translate('AUG')).toEqual(['Methionine']);
  });

  xtest('Phenylalanine codons translate into protein', () => {
    expect(translate('UUUUUC')).toEqual(['Phenylalanine', 'Phenylalanine']);
  });

  xtest('Leucine codons translate into protein', () => {
    expect(translate('UUAUUG')).toEqual(['Leucine', 'Leucine']);
  });

  xtest('Serine codons translate into protein', () => {
    expect(translate('UCUUCCUCAUCG')).toEqual(['Serine', 'Serine', 'Serine', 'Serine']);
  });

  xtest('Tyrosine codons translate into protein', () => {
    expect(translate('UAUUAC')).toEqual(['Tyrosine', 'Tyrosine']);
  });

  xtest('Cysteine codons translate into protein', () => {
    expect(translate('UGUUGC')).toEqual(['Cysteine', 'Cysteine']);
  });

  xtest('Tryptophan codon translates into protein', () => {
    expect(translate('UGG')).toEqual(['Tryptophan']);
  });

  xtest('Sequence starts with stop codon 1', () => {
    expect(translate('UAAUUUUUA')).toEqual([]);
  });

  xtest('Sequence starts with stop codon 2', () => {
    expect(translate('UAGAUGUAU')).toEqual([]);
  });

  xtest('Sequence starts with stop codon 3', () => {
    expect(translate('UGAUGU')).toEqual([]);
  });

  xtest('Small RNA strand', () => {
    expect(translate('AUGUUUUCU')).toEqual(['Methionine', 'Phenylalanine', 'Serine']);
  });

  xtest('Stop codon ends translation', () => {
    expect(translate('AUGUUUUCUUAAAUG')).toEqual(['Methionine', 'Phenylalanine', 'Serine']);
  });

  xtest('Invalid codon throws error', () => {
    expect(() => translate('LOL')).toThrow(new Error('Invalid codon'));
  });

  xtest('Invalid codon throws error', () => {
    expect(() => translate('AUGOO')).toThrow(new Error('Invalid codon'));
  });
});
