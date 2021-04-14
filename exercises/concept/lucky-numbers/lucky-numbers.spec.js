import { twoSum, luckyNumber, dashify } from './lucky-numbers';

describe('typeConversion', () => {
  describe('first input', () => {
    const leftInput = [1, 5, 7, 2, 1];
    const rightInput = [2, 4, 0, 0];
    const expected = 18121;

    test('test summation', () => {
      expect(twoSum(leftInput, rightInput)).toBe(expected);
    });
    test(`luckyNumber(${expected})`, () => {
      expect(luckyNumber(expected)).toBe(false);
    });
    test(`dashify(${expected})`, () => {
      expect(dashify(expected)).toBe('1-8-1-2-1');
    });
  });

  describe('second input', () => {
    const arr1 = [1, 2, 4, 0, 3],
      arr2 = [3, 2, 4, 8];
    let expected = 15651;
    test(`twoSum(${arr1},${arr2})`, () => {
      expect(twoSum(arr1, arr2)).toBe(expected);
    });
    test(`luckyNumber(${expected})`, () => {
      expect(luckyNumber(expected)).toBe(true);
    });
    test(`dashify(${expected})`, () => {
      expect(dashify(expected)).toBe('1-5-6-5-1');
    });
  });
});
