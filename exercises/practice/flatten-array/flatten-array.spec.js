import { flatten } from './flatten-array';

describe('FlattenArray', () => {
  xtest('empty', () => {
    expect(flatten([])).toEqual([]);
  });

  xtest('no nesting', () => {
    expect(flatten([0, 1, 2])).toEqual([0, 1, 2]);
  });

  xtest('flattens a nested array', () => {
    expect(flatten([[]])).toEqual([]);
  });

  xtest('flattens array with just integers present', () => {
    expect(flatten([1, [2, 3, 4, 5, 6, 7], 8])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8,
    ]);
  });

  xtest('5 level nesting', () => {
    expect(flatten([0, 2, [[2, 3], 8, 100, 4, [[[50]]]], -2])).toEqual([
      0, 2, 2, 3, 8, 100, 4, 50, -2,
    ]);
  });

  xtest('6 level nesting', () => {
    expect(flatten([1, [2, [[3]], [4, [[5]]], 6, 7], 8])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8,
    ]);
  });

  xtest('undefined values are omitted from the final result', () => {
    expect(flatten([1, 2, undefined])).toEqual([1, 2]);
  });

  xtest('null values are omitted from the final result', () => {
    expect(flatten([1, 2, null])).toEqual([1, 2]);
  });

  xtest('6 level nest list with null values', () => {
    expect(flatten([0, 2, [[2, 3], 8, [[100]], null, [[null]]], -2])).toEqual([
      0, 2, 2, 3, 8, 100, -2,
    ]);
  });

  xtest('all values in nested list are null', () => {
    expect(
      flatten([null, [[[null]]], null, null, [[null, null], null], null])
    ).toEqual([]);
  });
});
