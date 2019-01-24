import { Series } from './series';

describe('Series', () => {
  test('has digits (short)', () => {
    expect(new Series('01234').digits).toEqual([0, 1, 2, 3, 4]);
  });

  xtest('has digits (long)', () => {
    expect(new Series('0123456789').digits)
      .toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  xtest('keeps the digit order if reversed', () => {
    expect(new Series('9876543210').digits)
      .toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });

  xtest('keeps arbitrary digit order', () => {
    expect(new Series('936923468').digits)
      .toEqual([9, 3, 6, 9, 2, 3, 4, 6, 8]);
  });

  xtest('can slice by 1', () => {
    expect(new Series('01234').slices(1))
      .toEqual([[0], [1], [2], [3], [4]]);
  });

  xtest('can slice by 2', () => {
    expect(new Series('98273463').slices(2))
      .toEqual([[9, 8], [8, 2], [2, 7], [7, 3], [3, 4], [4, 6], [6, 3]]);
  });

  xtest('can slice by 3', () => {
    expect(new Series('01234').slices(3))
      .toEqual([[0, 1, 2], [1, 2, 3], [2, 3, 4]]);
  });

  xtest('can slice by 3 with duplicate digits', () => {
    expect(new Series('31001').slices(3))
      .toEqual([[3, 1, 0], [1, 0, 0], [0, 0, 1]]);
  });

  xtest('can slice by 4', () => {
    expect(new Series('91274').slices(4))
      .toEqual([[9, 1, 2, 7], [1, 2, 7, 4]]);
  });

  xtest('can slice by 5', () => {
    expect(new Series('81228').slices(5))
      .toEqual([[8, 1, 2, 2, 8]]);
  });

  xtest('throws an error if not enough digits to slice', () => {
    expect(() => {
      new Series('01032987583').slices(12);
    }).toThrow(new Error('Slice size is too big.'));
  });
});
