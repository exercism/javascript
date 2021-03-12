# About

TODO: this is a stub that needs more information

## Comparing numbers

Numbers are considered equal if they have the same value.

```javascript
1 == 1.0;
// => true

1 === 1.0;
// => true
// Remember, all numbers are floating-points, so this is different syntax for
// the exact same value.

1 === 1n;
// => false
// Strictly checking a number against a bigint will always result in false.

1 == 1n;
// => true
// A number is equal to a bigint if they represent the same value.

1.0 == 1n;
// => true
// A number is equal to a bigint if they represent the same value.
```

There are different outcomes when comparing numbers with different types.
In general, only two operands of the type `number` can ever be _strictly equal_ (`===`), and the following can be used for _loose equality_ (`==`):

| A      | B         | `==`                  |
| ------ | --------- | --------------------- |
| Number | Undefined | `false`               |
| Number | Null      | `false`               |
| Number | Number    | `A === B`             |
| Number | String    | `A === ToNumber(B)`   |
| Number | Boolean   | `A === ToNumber(B)`   |
| Number | Object    | `A == ToPrimitive(B)` |

- `ToNumber(X)` attempts to convert its argument `X` to a `number` before comparison. It is equivalent to `+B` (the unary `+` operator).
- `ToPrimitive(X)` attempts to convert its object argument `X` to a primitive value, by attempting to invoke varying sequences of `X.toString` and `X.valueOf` methods on `X`.
