import { largestProduct } from './largest-series-product';

describe('Series', () => {
  test('can get the largest product of 2', () => {
    expect(largestProduct('0123456789', 2)).toBe(72);
  });

  xtest('works for a tiny number', () => {
    expect(largestProduct('19', 2)).toBe(9);
  });

  xtest('can get the largest product of 3', () => {
    expect(largestProduct('1027839564', 3)).toBe(270);
  });

  xtest('can get the largest product of a big number', () => {
    const largeNumber = '73167176531330624919225119674426574742355349194934969835203127745063262395783180169848018694788'
      + '51843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648'
      + '95044524452316173185640309871112172238311362229893423380308135336276614282806444486645238749303589072962904915604'
      + '40772390713810515859307960866701724271218839987979087922749219016997208880937766572733300105336788122023542180975'
      + '12545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622'
      + '48283972241375657056057490261407972968652414535100474821663704844031998900088952434506585412275886668811642717147'
      + '99244429282308634656748139191231628245861786645835912456652947654568284891288314260769004224219022671055626321111'
      + '10937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636'
      + '899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450';
    expect(largestProduct(largeNumber, 13)).toBe(23514624000);
  });

  xtest('returns 0 if all digits are zero', () => {
    expect(largestProduct('0000', 2)).toBe(0);
  });

  xtest('returns 0 if all spans contain zero', () => {
    expect(largestProduct('99099', 3)).toBe(0);
  });

  xtest('rejects invalid character in input', () => {
    expect(() => {
      largestProduct('1234a5', 2);
    }).toThrow(new Error('Invalid input.'));
  });

  xtest('rejects negative span', () => {
    expect(() => {
      largestProduct('12345', -1);
    }).toThrow(new Error('Invalid input.'));
  });

  xtest('returns 1 for empty string and zero slice length', () => {
    expect(largestProduct('', 0)).toBe(1);
  });

  xtest('returns 1 for non-empty string and zero slice length', () => {
    expect(largestProduct('123', 0)).toBe(1);
  });

  xtest('throws an error for slices bigger than the number', () => {
    expect(() => {
      largestProduct('123', 4);
    }).toThrow(new Error('Slice size is too big.'));
  });

  xtest('throws an error for empty string and non-zero slice length', () => {
    expect(() => {
      largestProduct('', 1);
    }).toThrow(new Error('Slice size is too big.'));
  });
});
