import { translator } from './pig-latin';

describe('Pig Latin', () => {
  describe('ay is added to words that start with vowels', () => {
    test('word beginning with a', () => {
      expect(translator.translate('apple')).toEqual('appleay');
    });

    xtest('word beginning with e', () => {
      expect(translator.translate('ear')).toEqual('earay');
    });

    xtest('word beginning with i', () => {
      expect(translator.translate('igloo')).toEqual('iglooay');
    });

    xtest('word beginning with o', () => {
      expect(translator.translate('object')).toEqual('objectay');
    });

    xtest('word beginning with u', () => {
      expect(translator.translate('under')).toEqual('underay');
    });

    xtest('word beginning with a vowel and followed by a qu', () => {
      expect(translator.translate('equal')).toEqual('equalay');
    });
  });

  describe('first letter and ay are moved to the end of words that start with consonants', () => {
    xtest('word beginning with p', () => {
      expect(translator.translate('pig')).toEqual('igpay');
    });

    xtest('word beginning with k', () => {
      expect(translator.translate('koala')).toEqual('oalakay');
    });

    xtest('word beginning with x', () => {
      expect(translator.translate('xenon')).toEqual('enonxay');
    });

    xtest('word beginning with q without a following u', () => {
      expect(translator.translate('qat')).toEqual('atqay');
    });
  });

  describe('some letter clusters are treated like a single consonant', () => {
    xtest('word beginning with ch', () => {
      expect(translator.translate('chair')).toEqual('airchay');
    });

    xtest('word beginning with qu', () => {
      expect(translator.translate('queen')).toEqual('eenquay');
    });

    xtest('word beginning with qu and a preceding consonant', () => {
      expect(translator.translate('square')).toEqual('aresquay');
    });

    xtest('word beginning with th', () => {
      expect(translator.translate('therapy')).toEqual('erapythay');
    });

    xtest('word beginning with thr', () => {
      expect(translator.translate('thrush')).toEqual('ushthray');
    });

    xtest('word beginning with sch', () => {
      expect(translator.translate('school')).toEqual('oolschay');
    });
  });

  describe('some letter clusters are treated like a single vowel', () => {
    xtest('word beginning with yt', () => {
      expect(translator.translate('yttria')).toEqual('yttriaay');
    });

    xtest('word beginning with xr', () => {
      expect(translator.translate('xray')).toEqual('xrayay');
    });
  });

  describe('position of y in a word determines if it is a consonant or a vowel', () => {
    xtest('y is treated like a consonant at the beginning of a word', () => {
      expect(translator.translate('yellow')).toEqual('ellowyay');
    });

    xtest('y is treated like a vowel at the end of a consonant cluster', () => {
      expect(translator.translate('rhythm')).toEqual('ythmrhay');
    });

    xtest('y as second letter in two letter word', () => {
      expect(translator.translate('my')).toEqual('ymay');
    });
  });

  describe('phrases are translated', () => {
    xtest('a whole phrase', () => {
      expect(translator.translate('quick fast run')).toEqual(
        'ickquay astfay unray'
      );
    });
  });
});
