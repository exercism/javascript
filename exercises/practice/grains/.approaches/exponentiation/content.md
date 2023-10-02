## Exponentiation

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

JavaScript uses the [exponential operator][exponentiation] to raise a number by a certain exponent.
[`Math.pow()`][pow] can also be used to raise a number by an exponent, but it does not work with a [`BigInt`][bigint].

Exponentiation is nicely suited to the problem, since we start with one grain and keep doubling the number of grains on each successive square.
`1` grain is `2n ** 0`, `2` grains is `2n ** 1`, `4` is `2n ** 2`, and so on.

<!-- prettier-ignore-start -->
~~~~exercism/note
Note that a [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) literal can be specified by appending `n` to the value.
~~~~
<!-- prettier-ignore-end -->

So, to get the right exponent, we subtract `1` from the square number `num`.

The easiest way to get `total` is to get the value for an imaginary 65th square,
and then subtract `1` from it.
To understand how that works, consider a board that has only two squares.
If we could grow the board to three squares, then we could get the number of grains on the imaginary third square,
which would be `4.`
You could then subtract `4` by `1` to get `3`, which is the number of grains on the first square (`1`) and the second square (`2`).
Remembering that the exponent must be one less than the square you want,
you can call `2n ** 64` to get the number of grains on the imaginary 65th square.
Subtracting that value by `1` gives the values on all `64` squares.

## Shortening

When the body of a function is a single expression, the function can be implemented as an [arrow function][arrow-function], like so

```javascript
export const total = () => 2n ** 64n - 1n;
```

Notice that `return` and the curly braces are not needed.

[exponentiation]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation
[bigint]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[pow]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
[arrow-function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
