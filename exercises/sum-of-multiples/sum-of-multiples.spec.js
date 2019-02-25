import { sumOfMultiples } from './sum-of-multiples';

describe('SumOfMultiples', () => {
  test('to 1', () => {
    expect(sumOfMultiples([3, 5], 1)).toBe(0);
  });

  xtest('to 3', () => {
    expect(sumOfMultiples([3, 5], 4)).toBe(3);
  });

  xtest('to 10', () => {
    expect(sumOfMultiples([3, 5], 10)).toBe(23);
  });

  xtest('to 100', () => {
    expect(sumOfMultiples([3, 5], 100)).toBe(2318);
  });

  xtest('to 1000', () => {
    expect(sumOfMultiples([3, 5], 1000)).toBe(233168);
  });

  xtest('[7, 13, 17] to 20', () => {
    expect(sumOfMultiples([7, 13, 17], 20)).toBe(51);
  });

  xtest('[4, 6] to 15', () => {
    expect(sumOfMultiples([4, 6], 15)).toBe(30);
  });

  xtest('[5, 6, 8] to 150', () => {
    expect(sumOfMultiples([5, 6, 8], 150)).toBe(4419);
  });

  xtest('[43, 47] to 10000', () => {
    expect(sumOfMultiples([43, 47], 10000)).toBe(2203160);
  });
});
