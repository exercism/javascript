import { describe, expect, test, xtest } from '@jest/globals';
import { translate } from './protein-translation';

describe('ProteinTranslation', () => {
  test('Empty RNA sequence results in no proteins', () => {
    expect(translate()).toEqual([]);
  });

  describe('Single codons', () => {
    xtest('Methionine RNA sequence', () => {
      expect(translate('AUG')).toEqual(['Methionine']);
    });

    xtest('Phenylalanine RNA sequence 1', () => {
      expect(translate('UUU')).toEqual(['Phenylalanine']);
    });
    xtest('Phenylalanine RNA sequence 2', () => {
      expect(translate('UUC')).toEqual(['Phenylalanine']);
    });

    xtest('Leucine RNA sequence 1', () => {
      expect(translate('UUA')).toEqual(['Leucine']);
    });
    xtest('Leucine RNA sequence 2', () => {
      expect(translate('UUG')).toEqual(['Leucine']);
    });

    xtest('Serine RNA sequence 1', () => {
      expect(translate('UCU')).toEqual(['Serine']);
    });
    xtest('Serine RNA sequence 2', () => {
      expect(translate('UCC')).toEqual(['Serine']);
    });
    xtest('Serine RNA sequence 3', () => {
      expect(translate('UCA')).toEqual(['Serine']);
    });
    xtest('Serine RNA sequence 4', () => {
      expect(translate('UCG')).toEqual(['Serine']);
    });

    xtest('Tyrosine RNA sequence 1', () => {
      expect(translate('UAU')).toEqual(['Tyrosine']);
    });
    xtest('Tyrosine RNA sequence 2', () => {
      expect(translate('UAC')).toEqual(['Tyrosine']);
    });

    xtest('Cysteine RNA sequence 1', () => {
      expect(translate('UGU')).toEqual(['Cysteine']);
    });
    xtest('Cysteine RNA sequence 2', () => {
      expect(translate('UGC')).toEqual(['Cysteine']);
    });

    xtest('Tryptophan RNA sequence', () => {
      expect(translate('UGG')).toEqual(['Tryptophan']);
    });

    xtest('STOP codon RNA sequence 1', () => {
      expect(translate('UAA')).toEqual([]);
    });
    xtest('STOP codon RNA sequence 2', () => {
      expect(translate('UAG')).toEqual([]);
    });
    xtest('STOP codon RNA sequence 3', () => {
      expect(translate('UGA')).toEqual([]);
    });
  });

  describe('Multiple codons', () => {
    xtest('Sequence of two protein codons translates into proteins', () => {
      expect(translate('UUUUUU')).toEqual(['Phenylalanine', 'Phenylalanine']);
    });

    xtest('Sequence of two different protein codons translates into proteins', () => {
      expect(translate('UUAUUG')).toEqual(['Leucine', 'Leucine']);
    });

    xtest('Translate RNA strand into correct protein list', () => {
      expect(translate('AUGUUUUGG')).toEqual([
        'Methionine',
        'Phenylalanine',
        'Tryptophan',
      ]);
    });

    xtest('Translation stops if STOP codon at beginning of sequence', () => {
      expect(translate('UAGUGG')).toEqual([]);
    });

    xtest('Translation stops if STOP codon at end of three-codon sequence', () => {
      expect(translate('AUGUUUUAA')).toEqual(['Methionine', 'Phenylalanine']);
    });

    xtest('Translation stops if STOP codon in middle of three-codon sequence', () => {
      expect(translate('UGGUAGUGG')).toEqual(['Tryptophan']);
    });

    xtest('Translation stops if STOP codon in middle of six-codon sequence', () => {
      expect(translate('UGGUGUUAUUAAUGGUUU')).toEqual([
        'Tryptophan',
        'Cysteine',
        'Tyrosine',
      ]);
    });

    xtest('Sequence of two non-STOP codons does not translate to a STOP codon', () => {
      expect(translate('AUGAUG')).toEqual(['Methionine', 'Methionine']);
    });
  });

  describe('Unexpected strands', () => {
    xtest("Unknown amino acids, not part of a codon, can't translate", () => {
      expect(() => translate('XYZ')).toThrow(new Error('Invalid codon'));
    });

    xtest("Incomplete RNA sequence can't translate", () => {
      expect(() => translate('AUGU')).toThrow(new Error('Invalid codon'));
    });

    xtest('Incomplete RNA sequence can translate if valid until a STOP codon', () => {
      expect(translate('UUCUUCUAAUGGU')).toEqual([
        'Phenylalanine',
        'Phenylalanine',
      ]);
    });
  });
});
