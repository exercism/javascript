import { rows } from './pascals-triangle';

describe('Pascals Triangle', () => {
  describe("Given a count, return a collection of that many rows of pascal's triangle", () => {
    test('zero rows', () => {
      expect(rows(0)).toEqual([]);
    });

    xtest('single row', () => {
      expect(rows(1)).toEqual([[1]]);
    });

    xtest('two rows', () => {
      expect(rows(2)).toEqual([[1], [1, 1]]);
    });

    xtest('three rows', () => {
      expect(rows(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
    });

    xtest('four rows', () => {
      expect(rows(4)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]);
    });

    xtest('five rows', () => {
      expect(rows(5)).toEqual([
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
      ]);
    });

    xtest('six rows', () => {
      expect(rows(6)).toEqual([
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
        [1, 5, 10, 10, 5, 1],
      ]);
    });

    xtest('ten rows', () => {
      expect(rows(10)).toEqual([
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
        [1, 5, 10, 10, 5, 1],
        [1, 6, 15, 20, 15, 6, 1],
        [1, 7, 21, 35, 35, 21, 7, 1],
        [1, 8, 28, 56, 70, 56, 28, 8, 1],
        [1, 9, 36, 84, 126, 126, 84, 36, 9, 1],
      ]);
    });
  });
});
