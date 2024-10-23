import { combinations } from './killer-sudoku-helper';

describe('Trivial 1-digit cages', () => {
  test('1', () => {
    const inputCage = {
      sum: 1,
      size: 1,
      exclude: [],
    };
    const expected = [[1]];
    const actual = combinations(inputCage);
    expect(actual).toEqual(expected);
  });

  xtest('2', () => {
    const inputCage = {
      sum: 2,
      size: 1,
      exclude: [],
    };
    const expected = [[2]];
    const actual = combinations(inputCage);
    expect(actual).toEqual(expected);
  });

  xtest('3', () => {
    const inputCage = {
      sum: 3,
      size: 1,
      exclude: [],
    };
    const expected = [[3]];
    const actual = combinations(inputCage);
    expect(actual).toEqual(expected);
  });

  xtest('4', () => {
    const inputCage = {
      sum: 4,
      size: 1,
      exclude: [],
    };
    const expected = [[4]];
    const actual = combinations(inputCage);
    expect(actual).toEqual(expected);
  });

  xtest('5', () => {
    const inputCage = {
      sum: 5,
      size: 1,
      exclude: [],
    };
    const expected = [[5]];
    const actual = combinations(inputCage);
    expect(actual).toEqual(expected);
  });

  xtest('6', () => {
    const inputCage = {
      sum: 6,
      size: 1,
      exclude: [],
    };
    const expected = [[6]];
    const actual = combinations(inputCage);
    expect(actual).toEqual(expected);
  });

  xtest('7', () => {
    const inputCage = {
      sum: 7,
      size: 1,
      exclude: [],
    };
    const expected = [[7]];
    const actual = combinations(inputCage);
    expect(actual).toEqual(expected);
  });

  xtest('8', () => {
    const inputCage = {
      sum: 8,
      size: 1,
      exclude: [],
    };
    const expected = [[8]];
    const actual = combinations(inputCage);
    expect(actual).toEqual(expected);
  });

  xtest('9', () => {
    const inputCage = {
      sum: 9,
      size: 1,
      exclude: [],
    };
    const expected = [[9]];
    const actual = combinations(inputCage);
    expect(actual).toEqual(expected);
  });
});

describe('Other cages', () => {
  xtest('Cage with sum 45 contains all digits 1:9', () => {
    const inputCage = {
      sum: 45,
      size: 9,
      exclude: [],
    };
    const expected = [[1, 2, 3, 4, 5, 6, 7, 8, 9]];
    const actual = combinations(inputCage);
    expect(actual).toEqual(expected);
  });

  xtest('Cage with only 1 possible combination', () => {
    const inputCage = {
      sum: 7,
      size: 3,
      exclude: [],
    };
    const expected = [[1, 2, 4]];
    const actual = combinations(inputCage);
    expect(actual).toEqual(expected);
  });

  xtest('Cage with several combinations', () => {
    const inputCage = {
      sum: 10,
      size: 2,
      exclude: [],
    };
    const expected = [
      [1, 9],
      [2, 8],
      [3, 7],
      [4, 6],
    ];
    const actual = combinations(inputCage);
    expect(actual).toEqual(expected);
  });

  xtest('Cage with several combinations that is restricted', () => {
    const inputCage = {
      sum: 10,
      size: 2,
      exclude: [1, 4],
    };
    const expected = [
      [2, 8],
      [3, 7],
    ];
    const actual = combinations(inputCage);
    expect(actual).toEqual(expected);
  });
});
