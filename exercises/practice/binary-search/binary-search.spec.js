import { find } from './binary-search';

describe('Binary Search', () => {
  test('finds a value in an array with one element', () => {
    expect(find([6], 6)).toEqual(0);
  });

  xtest('finds a value in the middle of an array', () => {
    const array = [1, 3, 4, 6, 8, 9, 11];
    expect(find(array, 6)).toEqual(3);
  });

  xtest('finds a value at the beginning of an array', () => {
    const array = [1, 3, 4, 6, 8, 9, 11];
    expect(find(array, 1)).toEqual(0);
  });

  xtest('finds a value at the end of an array', () => {
    const array = [1, 3, 4, 6, 8, 9, 11];
    expect(find(array, 11)).toEqual(6);
  });

  xtest('finds a value in an array of odd length', () => {
    const array = [1, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 634];
    expect(find(array, 144)).toEqual(9);
  });

  xtest('finds a value in an array of even length', () => {
    const array = [1, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];
    expect(find(array, 21)).toEqual(5);
  });

  xtest('identifies that a value is not included in the array', () => {
    const array = [1, 3, 4, 6, 8, 9, 11];
    expect(() => find(array, 7)).toThrow(new Error('Value not in array'));
  });

  xtest("a value smaller than the array's smallest value is not found", () => {
    const array = [1, 3, 4, 6, 8, 9, 11];
    expect(() => find(array, 0)).toThrow(new Error('Value not in array'));
  });

  xtest("a value larger than the array's largest value is not found", () => {
    const array = [1, 3, 4, 6, 8, 9, 11];
    expect(() => find(array, 13)).toThrow(new Error('Value not in array'));
  });

  xtest('nothing is found in an empty array', () => {
    expect(() => find([], 1)).toThrow(new Error('Value not in array'));
  });

  xtest('nothing is found when the left and right bounds cross', () => {
    expect(() => find([1, 2], 0)).toThrow(new Error('Value not in array'));
  });
});
