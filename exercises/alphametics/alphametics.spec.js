import { solve } from './alphametics';

describe('Solve the alphametics puzzle', () => {
  test('puzzle with three letters', () => {
    const puzzle = 'I + BB == ILL';
    const expected = {
      I: 1,
      B: 9,
      L: 0,
    };
    expect(solve(puzzle)).toEqual(expected);
  });

  xtest('solution must have unique value for each letter', () => {
    const puzzle = 'A == B';
    expect(solve(puzzle)).toBeNull();
  });

  xtest('leading zero solution is invalid', () => {
    const puzzle = 'ACA + DD == BD';
    expect(solve(puzzle)).toBeNull();
  });

  xtest('puzzle with four letters', () => {
    const puzzle = 'AS + A == MOM';
    const expected = {
      A: 9,
      S: 2,
      M: 1,
      O: 0,
    };
    expect(solve(puzzle)).toEqual(expected);
  });

  xtest('puzzle with six letters', () => {
    const puzzle = 'NO + NO + TOO == LATE';
    const expected = {
      N: 7,
      O: 4,
      T: 9,
      L: 1,
      A: 0,
      E: 2,
    };
    expect(solve(puzzle)).toEqual(expected);
  });

  xtest('puzzle with seven letters', () => {
    const puzzle = 'HE + SEES + THE == LIGHT';
    const expected = {
      E: 4,
      G: 2,
      H: 5,
      I: 0,
      L: 1,
      S: 9,
      T: 7,
    };
    expect(solve(puzzle)).toEqual(expected);
  });

  xtest('puzzle with eight letters', () => {
    const puzzle = 'SEND + MORE == MONEY';
    const expected = {
      S: 9,
      E: 5,
      N: 6,
      D: 7,
      M: 1,
      O: 0,
      R: 8,
      Y: 2,
    };
    expect(solve(puzzle)).toEqual(expected);
  });

  xtest('puzzle with ten letters', () => {
    const puzzle = 'AND + A + STRONG + OFFENSE + AS + A + GOOD == DEFENSE';
    const expected = {
      A: 5,
      D: 3,
      E: 4,
      F: 7,
      G: 8,
      N: 0,
      O: 2,
      R: 1,
      S: 6,
      T: 9,
    };
    expect(solve(puzzle)).toEqual(expected);
  });
});
