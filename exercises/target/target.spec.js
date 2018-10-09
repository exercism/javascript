import solve from './target';

describe('Solve the target problem', () => {
  test('A dart lands outside the target', () => {
    const x = 15.3;
    const y = 13.2;
    const expected = 0;
    expect(solve(x, y)).toEqual(expected);
  });

  test('A dart lands just in the border of the target', () => {
    const x = 10;
    const y = 0;
    const expected = 1;
    expect(solve(x, y)).toEqual(expected);
  });

  test('Input is not a number', () => {
    const x = 'WRONG';
    const y = 10;
    expect(solve(x, y)).toBeNull();
  });

  test('A dart lands in the middle circle', () => {
    const x = 3;
    const y = 3.7;
    const expected = 5;
    expect(solve(x, y)).toEqual(expected);
  });

  test('A dart lands right in the border between outside and middle circles', () => {
    const x = 0;
    const y = 5;
    const expected = 5;
    expect(solve(x, y)).toEqual(expected);
  });

  test('A dart arrives in the inner circle', () => {
    const x = 0;
    const y = 0;
    const expected = 10;
    expect(solve(x, y)).toEqual(expected);
  });
});
