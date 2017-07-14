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

import Grains from './grains';

describe('Grains', () => {
  const grains = new Grains();

  test('square 1', () => {
    expect(grains.square(1)).toBe('1');
  });

  xtest('square 2', () => {
    expect(grains.square(2)).toBe('2');
  });

  xtest('square 3', () => {
    expect(grains.square(3)).toBe('4');
  });

  xtest('square 4', () => {
    expect(grains.square(4)).toBe('8');
  });

  xtest('square 16', () => {
    expect(grains.square(16)).toBe('32768');
  });

  xtest('square 32', () => {
    expect(grains.square(32)).toBe('2147483648');
  });

  xtest('square 64', () => {
    expect(grains.square(64)).toBe('9223372036854775808');
  });

  xtest('total', () => {
    expect(grains.total()).toBe('18446744073709551615');
  });
});
