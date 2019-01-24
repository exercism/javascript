import { Triplet } from './pythagorean-triplet';

describe('Triplet', () => {
  test('calculates the sum', () => {
    expect(new Triplet(3, 4, 5).sum()).toBe(12);
  });

  xtest('calculates the product', () => {
    expect(new Triplet(3, 4, 5).product()).toBe(60);
  });

  xtest('can recognize a pythagorean triplet', () => {
    expect(new Triplet(3, 4, 5).isPythagorean()).toBe(true);
  });

  xtest('can recognize a non pythagorean triplet', () => {
    expect(new Triplet(5, 6, 7).isPythagorean()).toBe(false);
  });

  xtest('can make triplets up to 10', () => {
    const triplets = Triplet.where({ maxFactor: 10 });
    const products = triplets.sort().map(triplet => triplet.product());
    expect(products).toEqual([60, 480]);
  });

  xtest('can make triplets 11 through 20', () => {
    const triplets = Triplet.where({ minFactor: 11, maxFactor: 20 });
    const products = triplets.sort().map(triplet => triplet.product());
    expect(products).toEqual([3840]);
  });

  xtest('can filter on sum', () => {
    const triplets = Triplet.where({ sum: 180, maxFactor: 100 });
    const products = triplets.sort().map(triplet => triplet.product());
    expect(products).toEqual([118080, 168480, 202500]);
  });
});
