import { classify } from './perfect-numbers';

describe('Exercise - Perfect Numbers', () => {
  describe('Invalid Inputs', () => {
    test('Zero is rejected (not a natural number)', () => {
      expect(() => classify(0)).toThrow(
        new Error('Classification is only possible for natural numbers.')
      );
    });

    xtest('Negative integer is rejected (not a natural number)', () => {
      expect(() => classify(-1)).toThrow(
        new Error('Classification is only possible for natural numbers.')
      );
    });
  });

  describe('Perfect Numbers', () => {
    xtest('Smallest perfect number is classified correctly', () => {
      expect(classify(6)).toEqual('perfect');
    });

    xtest('Medium perfect number is classified correctly', () => {
      expect(classify(28)).toEqual('perfect');
    });

    xtest('Large perfect number is classified correctly', () => {
      expect(classify(33550336)).toEqual('perfect');
    });
  });

  describe('Abundant Numbers', () => {
    xtest('Smallest abundant number is classified correctly', () => {
      expect(classify(12)).toEqual('abundant');
    });

    xtest('Medium abundant number is classified correctly', () => {
      expect(classify(30)).toEqual('abundant');
    });

    xtest('Large abundant number is classified correctly', () => {
      expect(classify(33550335)).toEqual('abundant');
    });
  });

  describe('Deficient Numbers', () => {
    xtest('Edge case (no factors other than itself) is classified correctly', () => {
      expect(classify(1)).toEqual('deficient');
    });

    xtest('Smallest prime deficient number is classified correctly', () => {
      expect(classify(2)).toEqual('deficient');
    });

    xtest('Smallest non-prime deficient number is classified correctly', () => {
      expect(classify(4)).toEqual('deficient');
    });

    xtest('Medium deficient number is classified correctly', () => {
      expect(classify(32)).toEqual('deficient');
    });

    xtest('Large deficient number is classified correctly', () => {
      expect(classify(33550337)).toEqual('deficient');
    });
  });
});
