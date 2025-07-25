import { describe, expect, it, jest } from '@jest/globals';
import { processString } from './error-handling';

describe('Error Handling', () => {
  it('returns uppercase if valid string', () => {
    expect(processString('hello')).toBe('HELLO');
  });

  it('throws TypeError if input is not a string', () => {
    expect(() => processString(42)).toThrow(TypeError);
    expect(() => processString(42)).toThrow('input must be a string');
  });

  it('throws Error with EmptyStringError if string is empty', () => {
    expect(() => processString('')).toThrow(Error);
    expect(() => processString('')).toThrow('EmptyStringError');
  });

  it('always logs cleanup message', () => {
    console.log = jest.fn();

    try {
      processString('');
    } catch {
      /*
                intentionally left empty,
                I expext this call to throw,
                but only care about verifying that the finally block is executed
                and clean up message logged.
            */
    }

    expect(console.log).toHaveBeenCalledWith('Resource cleaned up');
  });
});
