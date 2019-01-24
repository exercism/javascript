import { Prime } from './nth-prime';

describe('Prime', () => {
  const prime = new Prime();

  test('first', () => {
    expect(prime.nth(1)).toEqual(2);
  });

  xtest('second', () => {
    expect(prime.nth(2)).toEqual(3);
  });

  xtest('sixth', () => {
    expect(prime.nth(6)).toEqual(13);
  });

  xtest('big prime', () => {
    expect(prime.nth(10001)).toEqual(104743);
  });

  xtest('weird case', () => {
    expect(() => prime.nth(0))
      .toThrow(new Error('Prime is not possible'));
  });
});
