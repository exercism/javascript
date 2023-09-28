# Introduction

There are various idiomatic approaches to solve Grains.
You can use [exponentiation][exponentiation] to calculate the number on grains on a square.
Or you can use bit-shifting.

## General guidance

The key to solving Grains is to focus on each square having double the amount of grains as the square before it.
This means that the amount of grains grows exponentially.
The first square has one grain, which is `2` to the power of `0`.
The second square has two grains, which is `2` to the power of `1`.
The third square has four grains, which is `2` to the power of `2`.
You can see that the exponent, or power, that `2` is raised by is always one less than the square number.

| Square | Power | Value                   |
| ------ | ----- | ----------------------- |
| 1      | 0     | 2 to the power of 0 = 1 |
| 2      | 1     | 2 to the power of 1 = 2 |
| 3      | 2     | 2 to the power of 2 = 4 |
| 4      | 3     | 2 to the power of 3 = 8 |

You can use the `bigint` type and [BigInt][bigint] global object to support numbers above [`NUMBER.MAX_SAFE_INTEGER`][max-safe-integer].

## Approach: Exponentiation

```javascript
export function square(num) {
  if (num < 1 || num > 64) {
    throw new Error('square must be between 1 and 64');
  }
  return 2n ** BigInt(num - 1);
}

export function total() {
  return 2n ** 64n - 1n;
}
```

For more information, check the [exponentiation approach][approach-exponentiation].

## Approach: Bit-shifting

```javascript
export function square(num) {
  if (num < 1 || num > 64) {
    throw new Error('square must be between 1 and 64');
  }
  return 1n << (BigInt(num) - 1n);
}

export function total() {
  return (1n << 64n) - 1n;
}
```

For more information, check the [Bit-shifting approach][approach-bit-shifting].

## Which approach to use?

Exponentiation may be considered the most readable solution.

Bit-shifting may be considered less readable, and is about 30% slower than exponentiation.

[exponentiation]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation
[bigint]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[max-safe-integer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
[approach-exponentiation]: https://exercism.org/tracks/javascript/exercises/grains/approaches/exponentiation
[approach-bit-shifting]: https://exercism.org/tracks/javascript/exercises/grains/approaches/bit-shifting
