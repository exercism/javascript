import { Palindromes } from './palindrome-products';

describe('Palindromes', () => {
  test('smallest palindrome from single digit factors', () => {
    const palindromes = Palindromes.generate({ maxFactor: 9, minFactor: 1 });
    const smallest = palindromes.smallest;
    const expected = { value: 1, factors: [[1, 1]] };

    expect(smallest.value).toEqual(expected.value);
    expect(sortFactors(smallest.factors)).toEqual(expected.factors);
  });

  xtest('largest palindrome from single digit factors', () => {
    const palindromes = Palindromes.generate({ maxFactor: 9, minFactor: 1 });
    const largest = palindromes.largest;
    const expected = {
      value: 9,
      factors: [
        [1, 9],
        [3, 3],
      ],
    };

    expect(largest.value).toEqual(expected.value);
    expect(sortFactors(largest.factors)).toEqual(expected.factors);
  });

  xtest('smallest palindrome from double digit factors', () => {
    const palindromes = Palindromes.generate({ maxFactor: 99, minFactor: 10 });
    const smallest = palindromes.smallest;
    const expected = { value: 121, factors: [[11, 11]] };

    expect(smallest.value).toEqual(expected.value);
    expect(sortFactors(smallest.factors)).toEqual(expected.factors);
  });

  xtest('largest palindrome from double digit factors', () => {
    const palindromes = Palindromes.generate({ maxFactor: 99, minFactor: 10 });
    const largest = palindromes.largest;
    const expected = { value: 9009, factors: [[91, 99]] };

    expect(largest.value).toEqual(expected.value);
    expect(sortFactors(largest.factors)).toEqual(expected.factors);
  });

  xtest('smallest palindrome from triple digit factors', () => {
    const palindromes = Palindromes.generate({
      maxFactor: 999,
      minFactor: 100,
    });
    const smallest = palindromes.smallest;
    const expected = { value: 10201, factors: [[101, 101]] };

    expect(smallest.value).toEqual(expected.value);
    expect(sortFactors(smallest.factors)).toEqual(expected.factors);
  });

  xtest('largest palindrome from triple digit factors', () => {
    const palindromes = Palindromes.generate({
      maxFactor: 999,
      minFactor: 100,
    });
    const largest = palindromes.largest;
    const expected = { value: 906609, factors: [[913, 993]] };

    expect(largest.value).toEqual(expected.value);
    expect(sortFactors(largest.factors)).toEqual(expected.factors);
  });

  xtest('smallest palindrome from four digit factors', () => {
    const palindromes = Palindromes.generate({
      maxFactor: 9999,
      minFactor: 1000,
    });
    const smallest = palindromes.smallest;
    const expected = { value: 1002001, factors: [[1001, 1001]] };

    expect(smallest.value).toEqual(expected.value);
    expect(sortFactors(smallest.factors)).toEqual(expected.factors);
  });

  // This test doesn't run on our online test runner because it will time-out
  // with most implementations. It's up to you to test your solution locally.
  test.skip(
    'largest palindrome from four digit factors',
    () => {
      const palindromes = Palindromes.generate({
        maxFactor: 9999,
        minFactor: 1000,
      });
      const largest = palindromes.largest;
      const expected = { value: 99000099, factors: [[9901, 9999]] };

      expect(largest.value).toEqual(expected.value);
      expect(sortFactors(largest.factors)).toEqual(expected.factors);
    },
    20 * 1000,
  );

  xtest('empty result for smallest if no palindrome in range', () => {
    const palindromes = Palindromes.generate({
      maxFactor: 1003,
      minFactor: 1002,
    });
    const smallest = palindromes.smallest;

    expect(smallest.value).toBe(null);
    expect(smallest.factors).toEqual([]);
  });

  xtest('empty result for largest if no palindrome in range', () => {
    const palindromes = Palindromes.generate({ maxFactor: 15, minFactor: 15 });
    const largest = palindromes.largest;

    expect(largest.value).toBe(null);
    expect(largest.factors).toEqual([]);
  });

  xtest('error for smallest if min is more than max', () => {
    expect(() => {
      const palindromes = Palindromes.generate({
        maxFactor: 1,
        minFactor: 10000,
      });
      palindromes.smallest;
    }).toThrow(new Error('min must be <= max'));
  });

  xtest('error for largest if min is more than max', () => {
    expect(() => {
      const palindromes = Palindromes.generate({ maxFactor: 1, minFactor: 2 });
      palindromes.largest;
    }).toThrow(new Error('min must be <= max'));
  });
});

function sortFactors(factors) {
  return factors.map((f) => f.sort()).sort();
}
