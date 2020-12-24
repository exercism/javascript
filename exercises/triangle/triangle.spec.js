import { Triangle } from './triangle';

describe('Triangle', () => {
  describe('equilateral triangle', () => {
    test('all sides are equal', () => {
      const triangle = new Triangle(2, 2, 2);
      expect(triangle.isEquilateral).toBe(true);
    });

    xtest('any side is unequal', () => {
      const triangle = new Triangle(2, 3, 2);
      expect(triangle.isEquilateral).toBe(false);
    });

    xtest('no sides are equal', () => {
      const triangle = new Triangle(5, 4, 6);
      expect(triangle.isEquilateral).toBe(false);
    });

    xtest('all zero sides is not a triangle', () => {
      const triangle = new Triangle(0, 0, 0);
      expect(triangle.isEquilateral).toBe(false);
    });

    xtest('sides may be floats', () => {
      const triangle = new Triangle(0.5, 0.5, 0.5);
      expect(triangle.isEquilateral).toBe(true);
    });
  });

  describe('isosceles triangle', () => {
    xtest('last two sides are equal', () => {
      const triangle = new Triangle(3, 4, 4);
      expect(triangle.isIsosceles).toBe(true);
    });

    xtest('first two sides are equal', () => {
      const triangle = new Triangle(4, 4, 3);
      expect(triangle.isIsosceles).toBe(true);
    });

    xtest('first and last sides are equal', () => {
      const triangle = new Triangle(4, 3, 4);
      expect(triangle.isIsosceles).toBe(true);
    });

    xtest('equilateral triangles are also isosceles', () => {
      const triangle = new Triangle(4, 4, 4);
      expect(triangle.isIsosceles).toBe(true);
    });

    xtest('no sides are equal', () => {
      const triangle = new Triangle(2, 3, 4);
      expect(triangle.isIsosceles).toBe(false);
    });

    xtest('first triangle inequality violation', () => {
      const triangle = new Triangle(1, 1, 3);
      expect(triangle.isIsosceles).toBe(false);
    });

    xtest('second triangle inequality violation', () => {
      const triangle = new Triangle(1, 3, 1);
      expect(triangle.isIsosceles).toBe(false);
    });

    xtest('third triangle inequality violation', () => {
      const triangle = new Triangle(3, 1, 1);
      expect(triangle.isIsosceles).toBe(false);
    });

    xtest('sides may be floats', () => {
      const triangle = new Triangle(0.5, 0.4, 0.5);
      expect(triangle.isIsosceles).toBe(true);
    });
  });

  describe('scalene triangle', () => {
    xtest('no sides are equal', () => {
      const triangle = new Triangle(5, 4, 6);
      expect(triangle.isScalene).toBe(true);
    });

    xtest('all sides are equal', () => {
      const triangle = new Triangle(4, 4, 4);
      expect(triangle.isScalene).toBe(false);
    });

    xtest('two sides are equal', () => {
      const triangle = new Triangle(4, 4, 3);
      expect(triangle.isScalene).toBe(false);
    });

    xtest('may not violate triangle inequality', () => {
      const triangle = new Triangle(7, 3, 2);
      expect(triangle.isScalene).toBe(false);
    });

    xtest('sides may be floats', () => {
      const triangle = new Triangle(0.5, 0.4, 0.6);
      expect(triangle.isScalene).toBe(true);
    });
  });
});
