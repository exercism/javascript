import SumOfMultiples from './sum-of-multiples';

describe('SumOfMultiples', () => {
  test('to 1', () => {
    expect(SumOfMultiples([3, 5]).to(1)).toBe(0);
  });

  xtest('to 3', () => {
    expect(SumOfMultiples([3, 5]).to(4)).toBe(3);
  });

  xtest('to 10', () => {
    expect(SumOfMultiples([3, 5]).to(10)).toBe(23);
  });

  xtest('to 100', () => {
    expect(SumOfMultiples([3, 5]).to(100)).toBe(2318);
  });

  xtest('to 1000', () => {
    expect(SumOfMultiples([3, 5]).to(1000)).toBe(233168);
  });

  xtest('[7, 13, 17] to 20', () => {
    expect(SumOfMultiples([7, 13, 17]).to(20)).toBe(51);
  });

  xtest('[4, 6] to 15', () => {
    expect(SumOfMultiples([4, 6]).to(15)).toBe(30);
  });

  xtest('[5, 6, 8] to 150', () => {
    expect(SumOfMultiples([5, 6, 8]).to(150)).toBe(4419);
  });

  xtest('[43, 47] to 10000', () => {
    expect(SumOfMultiples([43, 47]).to(10000)).toBe(2203160);
  });
});
