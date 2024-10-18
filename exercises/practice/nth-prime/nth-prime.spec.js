import { describe, expect, test, xtest } from '@jest/globals';
import { prime } from './nth-prime';

describe('nth-prime', () => {
  test('first prime', () => {
    expect(prime(1)).toEqual(2);
  });

  xtest('second prime', () => {
    expect(prime(2)).toEqual(3);
  });

  xtest('sixth prime', () => {
    expect(prime(6)).toEqual(13);
  });

  xtest('big prime', () => {
    expect(prime(10001)).toEqual(104743);
  });

  xtest('there is no zeroth prime', () => {
    expect(() => prime(0)).toThrow(new Error('there is no zeroth prime'));
  });
});
