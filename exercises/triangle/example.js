export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  kind() {
    if (this.isIllegal()) {
      throw new TypeError('illegal');
    }

    if (this.isEquilateral()) {
      return 'equilateral';
    }

    if (this.isIsosceles()) {
      return 'isosceles';
    }

    return 'scalene';
  }

  isIllegal() {
    return this.violatesInequality() || this.hasImpossibleSides();
  }

  violatesInequality() {
    const [a, b, c] = this.sides;
    return a + b < c || a + c < b || b + c < a;
  }

  hasImpossibleSides() {
    const [a, b, c] = this.sides;
    return a <= 0 || b <= 0 || c <= 0;
  }

  isEquilateral() {
    return this.uniqueSidesLength() === 1;
  }

  isIsosceles() {
    return this.uniqueSidesLength() === 2;
  }

  uniqueSidesLength() {
    return new Set(this.sides).size;
  }
}
