import {
  getItem,
  setItem,
  prefilledArray,
  removeItem,
  removeItemFromTop,
  checkLengthOfStack
} from './arrays-basic';

describe('arrays-basic', () => {
  describe('getItem', () => {
    const getItemTestCases = [
      [[1, 2, 3], 0, 1],
      [[1, 2, 3], 1, 2],
      [[1, 2, 3], 2, 3]
    ];

    getItemTestCases.forEach(([array, item, expected]) => {
      test(`getItem([${array}], ${item})`, () => {
        expect(getItem(array, item)).toBe(expected);
      });
    });
  });

  describe('setItem', () => {
    const setItemTestCases = [
      [[1, 2, 3], 0, 7, [7, 2, 3]],
      [[1, 2, 3], 1, 8, [1, 8, 3]],
      [[1, 2, 3], 2, 9, [1, 2, 9]]
    ];

    setItemTestCases.forEach(([array, index, newValue, expected]) => {
      test(`setItem([${array}], ${index}, ${newValue})`, () => {
        expect(setItem(array, index, newValue)).toStrictEqual(expected);
      });
    });
  });

  describe('prefilledArray', () => {
    const prefilledArrayTestCases = [
      [1, 0, []],
      [2, 1, [2]],
      [3, 2, [3, 3]],
      [5, 6, [5, 5, 5, 5, 5, 5]]
    ];

    prefilledArrayTestCases.forEach(([value, length, expected]) => {
      test(`prefilledArray([${value}], ${length})`, () => {
        expect(prefilledArray(value, length)).toStrictEqual(expected);
      });
    });
  });

  describe('removeItem', () => {
    const removeItemTestCases = [
      [[1, 2, 3, 4], 0, [2, 3, 4]],
      [[1, 2, 3, 4], 1, [1, 3, 4]],
      [[1, 2, 3, 4], 2, [1, 2, 4]],
      [[1, 2, 3, 4], 3, [1, 2, 3]]
    ];

    removeItemTestCases.forEach(([array, index, expected]) => {
      test(`removeItem([${array}], ${index})`, () => {
        expect(removeItem(array, index)).toStrictEqual(expected);
      });
    });
  });

  describe('removeItemFromTop', () => {
    const removeItemFromTopTestCases = [
      [[1], []],
      [[1, 2], [1]],
      [[1, 2, 3], [1, 2]],
    ];

    removeItemFromTopTestCases.forEach(([array, expected]) => {
      test(`removeItemFromTop([${array}])`, () => {
        expect(removeItemFromTop(array)).toStrictEqual(expected);
      });
    });
  });

  describe('checkLengthOfStack', () => {
    const checkLengthOfStackTestCases = [
      [[], 0, true],
      [[], 1, false],
      [[9], 0, false],
      [[9], 1, true],
      [[9], 2, false],
      [[9, 8, 7, 1, 4], 4, false],
      [[9, 8, 7, 1, 4], 5, true],
      [[9, 8, 7, 1, 4], 6, false],
    ];

    checkLengthOfStackTestCases.forEach(([array, stackLength, expected]) => {
      test(`checkLengthOfStack([${array}], ${stackLength})`, () => {
        expect(checkLengthOfStack(array, stackLength)).toBe(expected);
      });
    });
  });
});
