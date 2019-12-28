import { equilateral, isosceles, scalene } from './triangle';

describe('Triangle', () => {
  describe('equilateral triangle', () => {
    test('all sides are equal', () => {
      expect(equilateral([2, 2, 2])).toEqual(true);
    });

    xtest('any side is unequal', () => {
      expect(equilateral([2, 3, 2])).toEqual(false);
    });

    xtest('no sides are equal', () => {
      expect(equilateral([5, 4, 6])).toEqual(false);
    });

    xtest('all zero sides is not a triangle', () => {
      expect(equilateral([0, 0, 0])).toEqual(false);
    });

    xtest('sides may be floats', () => {
      expect(equilateral([0.5, 0.5, 0.5])).toEqual(true);
    });
  });

  describe('isosceles triangle', () => {
    xtest('last two sides are equal', () => {
      expect(isosceles([3, 4, 4])).toEqual(true);
    });

    xtest('first two sides are equal', () => {
      expect(isosceles([4, 4, 3])).toEqual(true);
    });

    xtest('first and last sides are equal', () => {
      expect(isosceles([4, 3, 4])).toEqual(true);
    });

    xtest('equilateral triangles are also isosceles', () => {
      expect(isosceles([4, 4, 4])).toEqual(true);
    });

    xtest('no sides are equal', () => {
      expect(isosceles([2, 3, 4])).toEqual(false);
    });

    xtest('first triangle inequality violation', () => {
      expect(isosceles([1, 1, 3])).toEqual(false);
    });

    xtest('second triangle inequality violation', () => {
      expect(isosceles([1, 3, 1])).toEqual(false);
    });

    xtest('third triangle inequality violation', () => {
      expect(isosceles([3, 1, 1])).toEqual(false);
    });

    xtest('sides may be floats', () => {
      expect(isosceles([0.5, 0.4, 0.5])).toEqual(true);
    });
  });

  describe('scalene triangle', () => {
    xtest('no sides are equal', () => {
      expect(scalene([5, 4, 6])).toEqual(true);
    });

    xtest('all sides are equal', () => {
      expect(scalene([4, 4, 4])).toEqual(false);
    });

    xtest('two sides are equal', () => {
      expect(scalene([4, 4, 3])).toEqual(false);
    });

    xtest('may not violate triangle inequality', () => {
      expect(scalene([7, 3, 2])).toEqual(false);
    });

    xtest('sides may be floats', () => {
      expect(scalene([0.5, 0.4, 0.6])).toEqual(true);
    });
  });
});

