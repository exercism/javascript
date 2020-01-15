/**
 * In JavaScript, integers beyond +/- 9007199254740991 cannot be accurately
 * represented. To see this in action, console.log() out the expected number
 * of grains on square #64:
 *
 * console.log(9223372036854775808);
 * // =>       9223372036854776000
 * //                         ^^^^
 *
 * This is because, in JavaScript, integers are represented as 64-bit floating
 * point numbers. If you want to learn more, see:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
 * http://stackoverflow.com/questions/307179/what-is-javascripts-highest-integer-value-that-a-number-can-go-to-without-losin
 *
 * So, an accurate solution to this problem requires the use of a
 * "big integer" type. There are multiple ways to use big integer types.
 * We have provided you with BigInteger.js. You can read more about it here:
 *
 * https://github.com/peterolson/BigInteger.js
 * ^--- The "Methods" section of the README will be especially helpful.
 *
 * https://github.com/peterolson/BigInteger.js/blob/master/spec/spec.js
 * ^--- Tests are a good way to understand, in addition to the README.
 *
 * To get you started, this folder has a file of the big-integer module.
 * See its tests in this folder for a quick primer on how to use it! ( :
 */

import { square, total } from './grains';

describe('Grains', () => {
  describe('Returns The Number Of Grains On The Square', () => {
    test('1', () => {
      expect(square(1)).toEqual('1');
    });

    xtest('2', () => {
      expect(square(2)).toEqual('2');
    });

    xtest('3', () => {
      expect(square(3)).toEqual('4');
    });

    xtest('4', () => {
      expect(square(4)).toEqual('8');
    });

    xtest('16', () => {
      expect(square(16)).toEqual('32768');
    });

    xtest('32', () => {
      expect(square(32)).toEqual('2147483648');
    });

    xtest('64', () => {
      expect(square(64)).toEqual('9223372036854775808');
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
    expect(total()).toEqual('18446744073709551615');
  });
});
