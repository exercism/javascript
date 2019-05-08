import { solve } from './darts';

describe('Return the correct amount earned by a dart landing in a given point in the target problem', () => {
  test('A dart lands outside the target', () => {
    const x = -9;
    const y = 9;
    const expected = 0;
    expect(solve(x, y)).toEqual(expected);
  });

  xtest('A dart lands just in the border of the target', () => {
    const x = 0;
    const y = 10;
    const expected = 1;
    expect(solve(x, y)).toEqual(expected);
  });

  xtest('A dart lands in the outer circle', () => {
    const x = 4;
    const y = 4;
    const expected = 1;
    expect(solve(x, y)).toEqual(expected);
  });

  xtest('A dart lands right in the border between outer and middle circles', () => {
    const x = 5;
    const y = 0;
    const expected = 5;
    expect(solve(x, y)).toEqual(expected);
  });

  xtest('A dart lands in the middle circle', () => {
    const x = 0.8;
    const y = -0.8;
    const expected = 5;
    expect(solve(x, y)).toEqual(expected);
  });

  xtest('A dart lands right in the border between middle and inner circles', () => {
    const x = 0;
    const y = -1;
    const expected = 10;
    expect(solve(x, y)).toEqual(expected);
  });

  xtest('A dart lands in the inner circle', () => {
    const x = -0.1;
    const y = -0.1;
    const expected = 10;
    expect(solve(x, y)).toEqual(expected);
  });

  xtest('A dart whose coordinates sum to > 1 but whose radius to origin is <= 1 is scored in the inner circle', () => {
    const x = 0.4;
    const y = 0.8;
    const expected = 10;
    expect(solve(x, y)).toEqual(expected);
  });

  xtest('A dart whose coordinates sum to > 5 but whose radius to origin is <= 5 is scored in the middle circle', () => {
    const x = 2;
    const y = 4;
    const expected = 5;
    expect(solve(x, y)).toEqual(expected);
  });

  xtest('A dart whose coordinates sum to > 10 but whose radius to origin is <= 10 is scored in the outer circle', () => {
    const x = 4;
    const y = 8;
    const expected = 1;
    expect(solve(x, y)).toEqual(expected);
  });
});
