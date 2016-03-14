import Series from './largest-series-product';

describe('Series', () => {

  it('can get the largest product of 2', () => {
    expect(new Series('0123456789').largestProduct(2)).toBe(72);
  });

  xit('works for a tiny number', () => {
    expect(new Series('19').largestProduct(2)).toBe(9);
  });

  xit('can get the largest product of 3', () => {
    expect(new Series('1027839564').largestProduct(3)).toBe(270);
  });

  xit('can get the largest product of a big number', () => {
    const largeNumber = '73167176531330624919225119674426574742355349194934';
    expect(new Series(largeNumber).largestProduct(6)).toBe(23520);
  });

  xit('returns 0 if all digits are zero', () => {
    expect(new Series('0000').largestProduct(2)).toBe(0);
  });

  xit('returns 0 if all spans contain zero', () => {
    expect(new Series('99099').largestProduct(3)).toBe(0);
  });

  xit('returns 1 for empty string and zero slice length', () => {
    expect(new Series('').largestProduct(0)).toBe(1);
  });

  xit('returns 1 for non-empty string and zero slice length', () => {
    expect(new Series('123').largestProduct(0)).toBe(1);
  });

  xit('throws an error for slices bigger than the number', () => {
    expect(() => {
      new Series('123').largestProduct(4);
    }).toThrow(new Error('Slice size is too big.'));
  });

  xit('throws an error for empty string and non-zero slice length', () => {
    expect(() => {
      new Series('').largestProduct(1);
    }).toThrow(new Error('Slice size is too big.'));
  });

});
