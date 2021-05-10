import { Change } from './change';

describe('Change', () => {
  test('change for 1 cent', () => {
    const change = new Change();
    const result = change.calculate([1, 5, 10, 25], 1);
    expect(result).toEqual([1]);
  });

  xtest('single coin change', () => {
    const change = new Change();
    const result = change.calculate([1, 5, 10, 25, 100], 25);
    expect(result).toEqual([25]);
  });

  xtest('multiple coin change', () => {
    const change = new Change();
    const result = change.calculate([1, 5, 10, 25, 100], 15);
    expect(result).toEqual([5, 10]);
  });

  xtest('change with Lilliputian Coins', () => {
    // https://en.wikipedia.org/wiki/Change-making_problem#Greedy_method
    const change = new Change();
    const result = change.calculate([1, 4, 15, 20, 50], 23);
    expect(result).toEqual([4, 4, 15]);
  });

  xtest('change with Lower Elbonia Coins', () => {
    // https://en.wikipedia.org/wiki/Change-making_problem#Greedy_method
    const change = new Change();
    const result = change.calculate([1, 5, 10, 21, 25], 63);
    expect(result).toEqual([21, 21, 21]);
  });

  xtest('large target values', () => {
    const change = new Change();
    const result = change.calculate([1, 2, 5, 10, 20, 50, 100], 999);
    expect(result).toEqual([
      2, 2, 5, 20, 20, 50, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    ]);
  });

  xtest('possible change without unit coins available', () => {
    const change = new Change();
    const result = change.calculate([2, 5, 10, 20, 50], 21);
    expect(result).toEqual([2, 2, 2, 5, 10]);
  });

  xtest('another possible change without unit coins available', () => {
    const change = new Change();
    const result = change.calculate([4, 5], 27);
    expect(result).toEqual([4, 4, 4, 5, 5, 5]);
  });

  xtest('no coins make 0 change', () => {
    const change = new Change();
    const result = change.calculate([1, 5, 10, 21, 25], 0);
    expect(result).toEqual([]);
  });

  xtest('error testing for change smaller than the smallest of coins', () => {
    const change = new Change();
    const message = 'The total 3 cannot be represented in the given currency.';
    const test = () => {
      change.calculate([5, 10], 3);
    };
    expect(test).toThrowError(message);
  });

  xtest('error testing if no combination can add up to target', () => {
    const change = new Change();
    const message = 'The total 94 cannot be represented in the given currency.';
    const test = () => {
      change.calculate([5, 10], 94);
    };
    expect(test).toThrowError(message);
  });

  xtest('cannot find negative change values', () => {
    const change = new Change();
    const message = 'Negative totals are not allowed.';
    const test = () => {
      change.calculate([1, 2, 5], -5);
    };
    expect(test).toThrowError(message);
  });
});
