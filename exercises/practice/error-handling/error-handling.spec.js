import { describe, expect, test, xtest } from '@jest/globals';
import { processString } from './error-handling';

describe('Error Handling', () => {
  xtest('throws TypeError if input is not a string', () => {
    expect(() => processString(42)).toThrow(
      expect.objectContaining({
        name: 'TypeError',
        message: expect.stringMatching(/.+/),
      }),
    );
  });

  xtest('returns null if string is empty', () => {
    expect(processString('')).toBeNull();
  });

  xtest('throws error if input is too short', () => {
    expect(() => processString('short')).toThrow(
      expect.objectContaining({
        name: 'RangeError',
        message: expect.stringMatching(/.+/),
      }),
    );
  });

  xtest('throws error if input is too long', () => {
    const longString = 'a'.repeat(101);
    expect(() => processString(longString)).toThrow(
      expect.objectContaining({
        name: 'RangeError',
        message: expect.stringMatching(/.+/),
      }),
    );
  });

  xtest('throws error if input contains a mix of letters and numbers', () => {
    expect(() => processString('12345test6789text')).toThrow(
      expect.objectContaining({
        name: 'SyntaxError',
        message: expect.stringMatching(/.+/),
      }),
    );
  });

  xtest('returns uppercase string if input is valid', () => {
    expect(processString('hellotherefriend')).toBe('HELLOTHEREFRIEND');
  });

  xtest('never throws a generic Error for any invalid input', () => {
    const invalidInputs = [
      42, // TypeError
      'short', // RangeError (too short)
      'a'.repeat(101), // RangeError (too long)
      '12345test6789text', // SyntaxError (mixed)
    ];

    for (const input of invalidInputs) {
      let error;

      try {
        processString(input);
      } catch (err) {
        error = err;
      }

      expect(error).toBeInstanceOf(Error);
      expect(error.constructor).not.toBe(Error);
      expect(error.message).toEqual(expect.stringMatching(/.+/));
    }
  });
});
