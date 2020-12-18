/**
 * In JavaScript, integers beyond +/- 9007199254740991 (available as the
 * Number.MIN_SAFE_INTEGER and NUMBER.MAX_SAFE_INTEGER constants) cannot be
 * accurately represented by the default "Number" type. To see this in action,
 * console.log() out the expected number of grains on square #64:
 *
 * console.log(9223372036854775808);
 * // =>       9223372036854776000
 * //                         ^^^^
 *
 * This is because, in JavaScript, "Number" type integers are actually
 * represented internally as 64-bit floating point numbers. If you want to learn
 * more, see:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
 * http://stackoverflow.com/questions/307179/what-is-javascripts-highest-integer-value-that-a-number-can-go-to-without-losin
 *
 * Historically, this limitation could only be overcome by use third-party
 * implementations of a "bit integer" type like "BigInteger.js"
 * (https://github.com/peterolson/BigInteger.js).
 *
 * However, a new JavaScript arbitrary precision integer type named "BigInt",
 * which you should use to solve this exercise, is in the late stages of
 * ECMAScript standardisation and already available in most major browsers and
 * Node.js >= 10.4.0. For more details see:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */

import { square, total } from './grains';

describe('Grains', () => {
  describe('returns the number of grains on the square', () => {
    test('grains on square 1', () => {
      expect(square(1).toString()).toEqual('1');
    });

    xtest('grains on square 2', () => {
      expect(square(2).toString()).toEqual('2');
    });

    xtest('grains on square 3', () => {
      expect(square(3).toString()).toEqual('4');
    });

    xtest('grains on square 4', () => {
      expect(square(4).toString()).toEqual('8');
    });

    xtest('grains on square 16', () => {
      expect(square(16).toString()).toEqual('32768');
    });

    xtest('grains on square 32', () => {
      expect(square(32).toString()).toEqual('2147483648');
    });

    xtest('grains on square 64', () => {
      expect(square(64).toString()).toEqual('9223372036854775808');
    });

    xtest('square 0 raises an exception', () => {
      expect(() => square(0)).toThrow(
        new Error('square must be between 1 and 64')
      );
    });

    xtest('negative square raises an exception', () => {
      expect(() => square(-1)).toThrow(
        new Error('square must be between 1 and 64')
      );
    });

    xtest('square greater than 64 raises an exception', () => {
      expect(() => square(65)).toThrow(
        new Error('square must be between 1 and 64')
      );
    });
  });

  xtest('returns the total number of grains on the board', () => {
    expect(total().toString()).toEqual('18446744073709551615');
  });
});
