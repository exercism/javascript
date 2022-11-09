# Chain of boolean expressions

```javascript
export function isLeap(year) {
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
}
```

The first boolean expression uses the [remainder operator][remainder-operator] to check if the year is evenly divided by `4`.

- If the year is not evenly divisible by `4`, then the chain will "short circuit" due to the next operator being a [logical AND][logical-and] (`&&`),
  and will return `false`.
- If the year _is_ evenly divisible by `4`, then the [logical NOT operator][logical-not] is used to check if the year is _not_ evenly divisible by `100`.
- If the year is not evenly divisible by `100`, then the expression is `true` and the chain will "short-circuit" to return `true`,
  since the next operator is a [logical OR][logical-or] (`||`).
- If the year _is_ evenly divisible by `100`, then the expression is `false`, and the returned value from the chain will be if the year is evenly divisible by `400`.

| year | year % 4 == 0 | year % 100 != 0 | year % 400 == 0 | is leap year |
| ---- | ------------- | --------------- | --------------- | ------------ |
| 2020 | true          | true            | not evaluated   | true         |
| 2019 | false         | not evaluated   | not evaluated   | false        |
| 2000 | true          | false           | true            | true         |
| 1900 | true          | false           | false           | false        |

The chain of boolean expressions is efficient, as it proceeds from testing the most likely to least likely conditions.

## Shortening

By using the [falsiness][falsey] of `0`, a test for a value equaling `0` can be shortened using the logical NOT operator,
like so

```javascript
export function isLeap(year) {
  return !(year % 4) && (year % 100 != 0 || !(year % 400));
}
```

It can be thought of as the expression _not_ having a remainder.

When the body of a function is a single expression, the function can be implemented as an [arrow function][arrow-function], like so

```javascript
export const isLeap = (year) =>
  year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
```

or

```javascript
export const isLeap = (year) =>
  !(year % 4) && (year % 100 != 0 || !(year % 400));
```

Notice that `return` and the curly braces are not needed.

[remainder-operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
[logical-not]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
[logical-and]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
[logical-or]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
[falsey]: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
[arrow-function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
