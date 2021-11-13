import { spiralMatrix } from './spiral-matrix';

describe('Spiral Matrix', () => {
  test('empty spiral', () => {
    const expected = [];
    const actual = spiralMatrix(0);

    expect(actual).toEqual(expected);
  });

  xtest('trivial spiral', () => {
    const expected = [[1]];
    const actual = spiralMatrix(1);

    expect(actual).toEqual(expected);
  });

  xtest('spiral of size 2', () => {
    const expected = [
      [1, 2],
      [4, 3],
    ];
    const actual = spiralMatrix(2);

    expect(actual).toEqual(expected);
  });

  xtest('spiral of size 3', () => {
    const expected = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ];
    const actual = spiralMatrix(3);

    expect(actual).toEqual(expected);
  });

  xtest('spiral of size 4', () => {
    const expected = [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ];
    const actual = spiralMatrix(4);

    expect(actual).toEqual(expected);
  });

  xtest('spiral of size 5', () => {
    const expected = [
      [1, 2, 3, 4, 5],
      [16, 17, 18, 19, 6],
      [15, 24, 25, 20, 7],
      [14, 23, 22, 21, 8],
      [13, 12, 11, 10, 9],
    ];
    const actual = spiralMatrix(5);

    expect(expected).toEqual(actual);
  });
});
