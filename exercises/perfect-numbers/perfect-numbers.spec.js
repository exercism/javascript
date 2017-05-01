import PerfectNumbers from './perfect-numbers';

describe('Exercise - Perfect Numbers', () => {

  const perfectNumbers = new PerfectNumbers();

  describe('Perfect Numbers', () => {

    it('Smallest perfect number is classified correctly', () => {
      expect(perfectNumbers.classify(6)).toEqual('perfect');
    });

    xit('Medium perfect number is classified correctly', () => {
      expect(perfectNumbers.classify(28)).toEqual('perfect');
    });

    xit('Large perfect number is classified correctly', () => {
      expect(perfectNumbers.classify(33550336)).toEqual('perfect');
    });

  });

  describe('Abundant Numbers', () => {

    xit('Smallest abundant number is classified correctly', () => {
      expect(perfectNumbers.classify(12)).toEqual('abundant');
    });

    xit('Medium abundant number is classified correctly', () => {
      expect(perfectNumbers.classify(30)).toEqual('abundant');
    });

    xit('Large abundant number is classified correctly', () => {
      expect(perfectNumbers.classify(33550335)).toEqual('abundant');
    });

  });

  describe('Deficient Numbers', () => {

    xit('Smallest prime deficient number is classified correctly', () => {
      expect(perfectNumbers.classify(2)).toEqual('deficient');
    });

    xit('Smallest non-prime deficient number is classified correctly', () => {
      expect(perfectNumbers.classify(4)).toEqual('deficient');
    });

    xit('Medium deficient number is classified correctly', () => {
      expect(perfectNumbers.classify(32)).toEqual('deficient');
    });

    xit('Large deficient number is classified correctly', () => {
      expect(perfectNumbers.classify(33550337)).toEqual('deficient');
    });

    xit('Edge case (no factors other than itself) is classified correctly', () => {
      expect(perfectNumbers.classify(1)).toEqual('deficient');
    });

  });

  describe('Invalid Inputs', () => {

    xit('Zero is rejected (not a natural number)', () => {
      expect(() => perfectNumbers.classify(0))
        .toThrow('Classification is only possible for natural numbers.');
    });

    xit('Negative integer is rejected (not a natural number)', () => {
      expect(() => perfectNumbers.classify(-1))
        .toThrow('Classification is only possible for natural numbers.');
    });

  });

});
