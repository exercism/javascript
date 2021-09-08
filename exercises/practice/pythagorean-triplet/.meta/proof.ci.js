class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }

  get pythagorean() {
    return this.a * this.a + this.b * this.b === this.c * this.c;
  }

  get sum() {
    return this.a + this.b + this.c;
  }
}

export function triplets({ minFactor, maxFactor, sum }) {
  const min = minFactor || 1;
  const max = maxFactor || sum - 1;

  const isDesired = (triplet) => {
    return triplet.pythagorean && (!sum || triplet.sum === sum);
  };

  const result = [];
  const squared_map = {};

  for (let a = min; a < max; a += 1) {
    squared_map[a * a] = a;
  }

  for (let a = min; a < max - 1; a += 1) {
    for (let b = a + 1; b < max; b += 1) {
      const c = a * a + b * b;
      if (squared_map[c]) {
        const triplet = new Triplet(a, b, squared_map[c]);
        if (isDesired(triplet)) {
          result.push(triplet);
        }
      }
    }
  }

  return result;
}
