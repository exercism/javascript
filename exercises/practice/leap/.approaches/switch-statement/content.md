# `switch` statement

```javascript
export function isLeap(year) {
  switch (true) {
    case year % 400 == 0:
      return true;
    case year % 100 == 0:
      return false;
    default:
      return year % 4 == 0;
  }
}
```

The [switch][switch] statement tests the value `true`, which leaves the actual testing up to the `case` arms.
The `default` arm of the `switch` returns whether the year is evenly divisable by `4` when none of the previous arms match.

| year | year % 4 | year % 100 | year % 400 | is leap year |
| ---- | -------- | ---------- | ---------- | ------------ |
| 2020 | 0        | 20         | 20         | true         |
| 2019 | 3        | 19         | 19         | false        |
| 2000 | 0        | 0          | 0          | true         |
| 1900 | 0        | 0          | 300        | false        |

The `switch` statement is somewhat more verbose than other approaches,
and may also be considered less readable.

## Shortening

By using the [falsiness][falsey] of `0`, a test for a value equaling `0` can be shortened using the logical NOT operator,
like so

```javascript
export function isLeap(year) {
  switch (true) {
    case !(year % 400):
      return true;
    case !(year % 100):
      return false;
    default:
      return !(year % 4);
  }
}
```

It can be thought of as the expression _not_ having a remainder.

[switch]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#an_alternative_to_if...else_chains
[falsey]: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
[logical-not]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
