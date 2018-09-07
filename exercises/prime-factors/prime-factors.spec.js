import { primeFactors } from './prime-factors';

describe('primeFactors', () => {
  test('returns an empty array for 1', () => expect(primeFactors(1)).toEqual([]));

  xtest('factors 2', () => expect(primeFactors(2)).toEqual([2]));

  xtest('factors 3', () => expect(primeFactors(3)).toEqual([3]));

  xtest('factors 4', () => expect(primeFactors(4)).toEqual([2, 2]));

  xtest('factors 6', () => expect(primeFactors(6)).toEqual([2, 3]));

  xtest('factors 8', () => expect(primeFactors(8)).toEqual([2, 2, 2]));

  xtest('factors 9', () => expect(primeFactors(9)).toEqual([3, 3]));

  xtest('factors 27', () => expect(primeFactors(27)).toEqual([3, 3, 3]));

  xtest('factors 625', () => expect(primeFactors(625)).toEqual([5, 5, 5, 5]));

  xtest('factors 901255', () => expect(primeFactors(901255)).toEqual([5, 17, 23, 461]));

  xtest('factors 93819012551', () => expect(primeFactors(93819012551)).toEqual([11, 9539, 894119]));
});
