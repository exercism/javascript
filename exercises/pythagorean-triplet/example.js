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

  const triplets = [];

  for (let a = min; a < max - 1; a += 1) {
    for (let b = a + 1; b < max; b += 1) {
      for (let c = b + 1; c <= max; c += 1) {
        const triplet = new Triplet(a, b, c);

        if (isDesired(triplet)) {
          triplets.push(triplet);
        }
      }
    }
  }

  return triplets;
}
