import { describe, expect, test, xtest } from '@jest/globals';
import { processString } from './error-handling';

describe('Error Handling', () => {
  xtest('throws TypeError if input is not a string', () => {
    expect(() => processString(42)).toThrow(TypeError);
  });

  xtest('returns null if string is empty', () => {
    expect(processString('')).toBeNull();
  });

  xtest('throws error if input is too short',() => {
    expect(() => processString('short')).toThrow()
  })

  xtest('throws error if input is too long', () => {
    const longString = 'a'.repeat(101);
    expect(() => processString(longString)).toThrow()
  })

  xtest('throws error if input contains a mix of letters and numbers', () => {
    expect(() => processString('abc123')).toThrow()
  })

  xtest('returns uppercase string if input is valid', () => {
    expect(processString('hellotherefriend')).toBe('HELLOTHEREFRIEND');
  });
});
