import { describe, expect, test, xtest } from '@jest/globals';
import { processString } from './error-handling';

describe('Error Handling', () => {
  test('throws TypeError if input is not a string', () => {
    expect(() => processString(42)).toThrow(TypeError);
  });

  xtest('throws Error message if string is empty', () => {
    expect(() => processString('')).toThrow(Error);
  });

  xtest('returns uppercase string if input is valid', () => {
    expect(processString('hello')).toBe('HELLO');
  });
});
