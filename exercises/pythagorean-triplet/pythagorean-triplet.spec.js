import Triplet from './pythagorean-triplet';

describe('Triplet', () => {
  it('calculates the sum', () => {
    expect(new Triplet(3, 4, 5).sum()).toBe(12);
  });

  xit('calculates the product', () => {
    expect(new Triplet(3, 4, 5).product()).toBe(60);
  });

  xit('can recognize a pythagorean triplet', () => {
    expect(new Triplet(3, 4, 5).isPythagorean()).toBe(true);
  });

  xit('can recognize a non pythagorean triplet', () => {
    expect(new Triplet(5, 6, 7).isPythagorean()).toBe(false);
  });

  xit('can make triplets up to 10', () => {
    const triplets = Triplet.where({ maxFactor: 10 });
    const products = triplets.sort().map(triplet => triplet.product());
    expect(products).toEqual([60, 480]);
  });

  xit('can make triplets 11 through 20', () => {
    const triplets = Triplet.where({ minFactor: 11, maxFactor: 20 });
    const products = triplets.sort().map(triplet => triplet.product());
    expect(products).toEqual([3840]);
  });

  xit('can filter on sum', () => {
    const triplets = Triplet.where({ sum: 180, maxFactor: 100 });
    const products = triplets.sort().map(triplet => triplet.product());
    expect(products).toEqual([118080, 168480, 202500]);
  });
});
