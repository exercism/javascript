import {
  getItem,
  setItem,
  insertItemAtTop,
  removeItem,
  removeItemFromTop,
  insertItemAtBottom,
  removeItemAtBottom,
  checkSizeOfStack
} from './arrays';

describe('arrays', () => {
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

    setItemTestCases.forEach(([array, index, newCard, expected]) => {
      test(`setItem([${array}], ${index}, ${newCard})`, () => {
        expect(setItem(array, index, newCard)).toStrictEqual(expected);
      });
    });
  });

  describe('insertItemAtTop', () => {
    const iinsertItemAtTopTopCases = [
      [[1], 2, [1, 2]],
      [[2, 5], 3, [2, 5, 3]],
      [[3, 4, 9, 7], 8, [3, 4, 9, 7, 8]],
      [[5, 9, 7, 1], 8, [5, 9, 7, 1, 8]]
    ];

    insertItemAtTopCases.forEach(([array, newCard, expected]) => {
      test(`insertItemAtTop([${array}], ${newCard})`, () => {
        expect(insertItemAtTop(array, newCard)).toStrictEqual(expected);
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

  describe('insertItemAtBottom', () => {
    const insertItemAtBottomCases = [
      [[1], 2, [2, 1]],
      [[3, 1, 2], 1, [1, 3, 1, 2]],
      [[9, 9, 9, 9], 9, [9, 9, 9, 9, 9]],
      [[5, 9, 7, 1], 8, [8, 5, 9, 7, 1]]
    ];

    insertItemAtBottomCases.forEach(([array, newCard, expected]) => {
      test(`insertItemAtBottom([${array}], ${newCard})`, () => {
        expect(insertItemAtBottom(array, newCard)).toStrictEqual(expected);
      });
    });
  });

  describe('removeItemAtBottom', () => {
    const removeItemAtBottomCases = [
      [[], []],
      [[3, 1, 2], [1, 2]],
      [[8, 8, 8, 8], [8, 8, 8]],
      [[8, 5, 9, 7, 1], [5, 9, 7, 1]]
    ];

    removeItemAtBottomCases.forEach(([array, expected]) => {
      test(`removeItemAtBottom([${array}]])`, () => {
        expect(removeItemAtBottom(array)).toStrictEqual(expected);
      });
    });
  });

  describe('checkSizeOfStack', () => {
    const ccheckSizeOfStackTestCases = [
      [[], 0, true],
      [[], 1, false],
      [[9], 0, false],
      [[9], 1, true],
      [[9], 2, false],
      [[9, 8, 7, 1, 4], 4, false],
      [[9, 8, 7, 1, 4], 5, true],
      [[9, 8, 7, 1, 4], 6, false],
    ];

    checkSizeOfStackTestCases.forEach(([array, stackSize, expected]) => {
      test(`checkSizeOfStack([${array}], ${stackSize})`, () => {
        expect(checkSizeOfStack(array, stackSize)).toBe(expected);
      });
    });
  });
});
