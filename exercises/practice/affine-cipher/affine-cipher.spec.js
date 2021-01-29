import { encode, decode } from './affine-cipher';

describe('Affine cipher', () => {
  describe('encode', () => {
    test('encode yes', () => {
      expect(encode('yes', { a: 5, b: 7 })).toBe('xbt');
    });

    xtest('encode no', () => {
      expect(encode('no', { a: 15, b: 18 })).toBe('fu');
    });

    xtest('encode OMG', () => {
      expect(encode('OMG', { a: 21, b: 3 })).toBe('lvz');
    });

    xtest('encode O M G', () => {
      expect(encode('O M G', { a: 25, b: 47 })).toBe('hjp');
    });

    xtest('encode mindblowingly', () => {
      expect(encode('mindblowingly', { a: 11, b: 15 })).toBe('rzcwa gnxzc dgt');
    });

    xtest('encode numbers', () => {
      expect(encode('Testing,1 2 3, testing.', { a: 3, b: 4 })).toBe(
        'jqgjc rw123 jqgjc rw'
      );
    });

    xtest('encode deep thought', () => {
      expect(encode('Truth is fiction.', { a: 5, b: 17 })).toBe(
        'iynia fdqfb ifje'
      );
    });

    xtest('encode all the letters', () => {
      expect(
        encode('The quick brown fox jumps over the lazy dog.', { a: 17, b: 33 })
      ).toBe('swxtj npvyk lruol iejdc blaxk swxmh qzglf');
    });

    xtest('encode with a not coprime to m', () => {
      expect(() => {
        encode('This is a test.', { a: 6, b: 17 });
      }).toThrowError('a and m must be coprime.');
    });
  });
  describe('decode', () => {
    test('decode exercism', () => {
      expect(decode('tytgn fjr', { a: 3, b: 7 })).toBe('exercism');
    });

    xtest('decode a sentence', () => {
      expect(
        decode('qdwju nqcro muwhn odqun oppmd aunwd o', { a: 19, b: 16 })
      ).toBe('anobstacleisoftenasteppingstone');
    });

    xtest('decode numbers', () => {
      expect(decode('odpoz ub123 odpoz ub', { a: 25, b: 7 })).toBe(
        'testing123testing'
      );
    });

    xtest('decode all the letters', () => {
      expect(
        decode('swxtj npvyk lruol iejdc blaxk swxmh qzglf', { a: 17, b: 33 })
      ).toBe('thequickbrownfoxjumpsoverthelazydog');
    });

    xtest('decode with no spaces in input', () => {
      expect(
        decode('swxtjnpvyklruoliejdcblaxkswxmhqzglf', { a: 17, b: 33 })
      ).toBe('thequickbrownfoxjumpsoverthelazydog');
    });

    xtest('decode with too many spaces', () => {
      expect(decode('vszzm    cly   yd cg    qdp', { a: 15, b: 16 })).toBe(
        'jollygreengiant'
      );
    });

    xtest('decode with a not coprime to m', () => {
      expect(() => {
        decode('Test', { a: 13, b: 5 });
      }).toThrowError('a and m must be coprime.');
    });
  });
});
