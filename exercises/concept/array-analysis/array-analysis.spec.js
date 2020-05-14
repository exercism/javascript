import {
  getCardPosition,
  doesStackIncludeCard,
  isEachCardEven,
  doesStackIncludesOddCard,
  getFirstOddCard,
  getFirstEvenCardPosition,
} from './array-analysis'

describe('arrays-analysis', () => {
  describe('getCardPosition', () => {
    const getCardPositionTestCases = [
      [[1, 2, 3], 1, 0],
      [[1, 2, 2], 2, 1],
      [[1, 2, 3], 4, -1],
    ]

    getCardPositionTestCases.forEach(([array, item, expected]) => {
      test(`getCardIndex([${array}], ${item})`, () => {
        expect(getCardPosition(array, item)).toStrictEqual(expected)
      })
    })
  })

  describe('doesStackIncludeCard', () => {
    const doesStackIncludeCardTestCases = [
      [[1, 2, 3], 1, true],
      [[1, 2, 3], 4, false],
    ]

    doesStackIncludeCardTestCases.forEach(([array, item, expected]) => {
      test(`doesStackIncludeCard([${array}],${item})`, () => {
        expect(doesStackIncludeCard(array, item)).toBe(expected)
      })
    })
  })

  describe('isEachCardEven', () => {
    const isEachCardEvenTestCases = [
      [[1], false],
      [[2, 5], false],
      [[2, 4, 8, 6], true],
    ]

    isEachCardEvenTestCases.forEach(([array, expected]) => {
      test(`isEachCardEven([${array}])`, () => {
        expect(isEachCardEven(array)).toStrictEqual(expected)
      })
    })
  })

  describe('doesStackIncludesOddCard', () => {
    const doesStackIncludesOddCardTestCases = [
      [[2, 4, 6], false],
      [[2, 5], true],
      [[1, 3, 5, 7], true],
    ]

    doesStackIncludesOddCardTestCases.forEach(([array, expected]) => {
      test(`doesStackIncludesOddCard([${array}])`, () => {
        expect(doesStackIncludesOddCard(array)).toStrictEqual(expected)
      })
    })
  })

  describe('getFirstOddCard', () => {
    const getFirstOddCardTestCases = [
      [[2, 4, 1, 3], 1],
      [[1, 2], 1],
      [[4, 2, 6], undefined],
    ]

    getFirstOddCardTestCases.forEach(([array, expected]) => {
      test(`getFirstOddCard([${array}])`, () => {
        expect(getFirstOddCard(array)).toStrictEqual(expected)
      })
    })
  })

  describe('getFirstEvenCardPosition', () => {
    const getFirstEvenCardPositionTestCases = [
      [[2, 4, 1, 3], 0],
      [[1, 2], 1],
      [[1, 3, 5], -1],
    ]

    getFirstEvenCardPositionTestCases.forEach(([array, expected]) => {
      test(`getFirstEvenCardPosition([${array}])`, () => {
        expect(getFirstEvenCardPosition(array)).toStrictEqual(expected)
      })
    })
  })
})
