/**
 * Generate palindrom-products table and calculate largest/smallest.
 *
 * @param {Number} [minFactor]
 * Minimum Factor
 *
 * @param {Number} [maxFactor]
 * Maximum Factor
 *
 * @return {{largest: number, smallest: number}}
 */

function generate({ minFactor = 1, maxFactor = Number.MAX_VALUE }) {
  let factors = range(minFactor, maxFactor);
  let palindromes = [for (x of factors) for (y of factors) if (isPalindrome(x * y)) palindrome(x, y)];

  return  {
    largest: palindromes.sort(comparator).pop(),
    smallest: palindromes.shift()
  }
}

/**
 * Create a product/factor record.
 *
 * @param {Number} multiplicand
 * Multiplicand factor.
 *
 * @param {Number} multiplier
 * Multiplier factor.
 *
 * @return {{value: number, factors: array}}
 * Record depicting the product and an ordered array representation of the factors.
 */

function palindrome(multiplicand, multiplier) {
  return {
    value: multiplicand * multiplier,
    factors: [multiplicand, multiplier].sort()
  };
}

/**
 * Comparison predicate for product/factor records.
 *
 * @param {Number} a
 * First item.
 *
 * @param {Number} b
 * Second item.
 *
 * @return {Number}
 * When > 0, sort a higher than b.
 */

function comparator(a, b) { return a.value - b.value; }

/**
 * Whether given number is a palindrome.
 *
 * @param {Number} num
 * Number to test.
 *
 * @return {Boolean}
 * Whether given number is a palindrome.
 */

function isPalindrome(num) {
  return String(num) === "".split.call(num, '').reverse().join('');
}

/**
 * Generate a list of integers incremented by 1 from start to stop (inclusive).
 *
 * @param {Number} start
 * Starting integer.
 *
 * @param {Number} stop
 * Ending integer.
 *
 * @return {Array}
 * Array containing list of integers incremented by 1 from start to stop.
 */

function range(start, stop) {
  var out = [];
  var idx = start - 1;

  while (++idx <= stop) {
    out.push(idx);
  }

  return out;
}

export default generate;
