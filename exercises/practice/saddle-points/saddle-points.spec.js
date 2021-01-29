import { saddlePoints } from './saddle-points';

describe('Saddle Points', () => {
  test('Can identify single saddle point', () => {
    const expected = [{ row: 2, column: 1 }];
    expect(
      saddlePoints([
        [9, 8, 7],
        [5, 3, 2],
        [6, 6, 7],
      ])
    ).toEqual(expected);
  });

  xtest('Can identify that empty matrix has no saddle points', () => {
    expect(saddlePoints([[]])).toEqual([]);
  });

  xtest('Can identify lack of saddle points when there are none', () => {
    expect(
      saddlePoints([
        [1, 2, 3],
        [3, 1, 2],
        [2, 3, 1],
      ])
    ).toEqual([]);
  });

  xtest('Can identify multiple saddle points in a column', () => {
    const expected = [
      { row: 1, column: 2 },
      { row: 2, column: 2 },
      { row: 3, column: 2 },
    ];
    expect(
      saddlePoints([
        [4, 5, 4],
        [3, 5, 5],
        [1, 5, 4],
      ])
    ).toEqual(expected);
  });

  xtest('Can identify multiple saddle points in a row', () => {
    const expected = [
      { row: 2, column: 1 },
      { row: 2, column: 2 },
      { row: 2, column: 3 },
    ];
    expect(
      saddlePoints([
        [6, 7, 8],
        [5, 5, 5],
        [7, 5, 6],
      ])
    ).toEqual(expected);
  });

  xtest('Can identify saddle point in bottom right corner', () => {
    const expected = [{ row: 3, column: 3 }];
    expect(
      saddlePoints([
        [8, 7, 9],
        [6, 7, 6],
        [3, 2, 5],
      ])
    ).toEqual(expected);
  });

  xtest('Can identify saddle points in a non square matrix', () => {
    const expected = [
      { row: 1, column: 1 },
      { row: 1, column: 3 },
    ];
    expect(
      saddlePoints([
        [3, 1, 3],
        [3, 2, 4],
      ])
    ).toEqual(expected);
  });

  xtest('Can identify that saddle points in a single column matrix are those with the minimum value', () => {
    const expected = [
      { row: 2, column: 1 },
      { row: 4, column: 1 },
    ];
    expect(saddlePoints([[2], [1], [4], [1]])).toEqual(expected);
  });

  xtest('Can identify that saddle points in a single row matrix are those with the maximum value', () => {
    const expected = [
      { row: 1, column: 2 },
      { row: 1, column: 4 },
    ];
    expect(saddlePoints([[2, 5, 3, 5]])).toEqual(expected);
  });
});
