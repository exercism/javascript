# Bit-shifting

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

Instead of using math to calculate the number of grains on a square, you can set a bit in the correct position of a [`BigInt`][bigint] value.

<!-- prettier-ignore-start -->
~~~~exercism/note
Note that a `BigInt` literal can be specified by appending `n` to the value.
~~~~
<!-- prettier-ignore-end -->

To understand how this works, consider just two squares that are represented in binary bits as `00`.

You use the [left-shift operator][left-shift-operator] to set `1n` at the position needed to make the correct decimal value.

- To set the one grain on Square One you shift `1n` for `0` positions to the left.
  So, if `num` is `1` for square One, you subtract `num` by `1` to get `0`, which will not move it any positions to the left.
  The result is binary `01`, which is decimal `1`.
- To set the two grains on Square Two you shift `1n` for `1` position to the left.
  So, if `num` is `2` for square Two, you subtract `num` by `1` to get `1`, which will move it `1` position to the left.
  The result is binary `10`, which is decimal `2`.

| Square | Shift Left By | Binary Value | Decimal Value |
| ------ | ------------- | ------------ | ------------- |
| 1      | 0             | 0001         | 1             |
| 2      | 1             | 0010         | 2             |
| 3      | 2             | 0100         | 4             |
| 4      | 3             | 1000         | 8             |

For `total` we want all of the 64 bits set to `1` to get the sum of grains on all sixty-four squares.
The easy way to do this is to set the 65th bit to `1` and then subtract `1`.
To go back to our two-square example, if we can grow to three squares, then we can shift `1n` two positions to the left for binary `100`,
which is decimal `4`.
By subtracting `1` we get `3`, which is the total amount of grains on the two squares.

| Square | Binary Value | Decimal Value |
| ------ | ------------ | ------------- |
| 3      | 0100         | 4             |

| Square | Sum Binary Value | Sum Decimal Value |
| ------ | ---------------- | ----------------- |
| 1      | 0001             | 1                 |
| 2      | 0011             | 3                 |

## Shortening

When the body of a function is a single expression, the function can be implemented as an [arrow function][arrow-function], like so

```javascript
export const total = () => (1n << 64n) - 1n;
```

[bigint]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[left-shift-operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift
[arrow-function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
