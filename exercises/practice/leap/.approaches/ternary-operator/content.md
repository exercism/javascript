# Ternary operator

```javascript
export function isLeap(year) {
  return year % 100 == 0 ? year % 400 == 0 : year % 4 == 0;
}
```

A [conditional operator][ternary-operator], also known as a "ternary conditional operator", or just "ternary operator",
uses a maximum of two checks to determine if a year is a leap year.

It starts by testing the outlier condition of the year being evenly divisible by `100`.
It does this by using the [remainder operator][remainder-operator].
If the year is evenly divisible by `100`, then the expression is `true`, and the ternary operator returns if the year is evenly divisible by `400`.
If the year is _not_ evenly divisible by `100`, then the expression is `false`, and the ternary operator returns if the year is evenly divisible by `4`.

| year | year % 100 == 0 | year % 400 == 0 | year % 4 == 0 | is leap year |
| ---- | --------------- | --------------- | ------------- | ------------ |
| 2020 | false           | not evaluated   | true          | true         |
| 2019 | false           | not evaluated   | false         | false        |
| 2000 | true            | true            | not evaluated | true         |
| 1900 | true            | false           | not evaluated | false        |

Although it uses a maximum of only two checks, the ternary operator tests an outlier condition first,
making it less efficient than another approach that would first test if the year is evenly divisible by `4`,
which is more likely than the year being evenly divisible by `100`.

## Shortening

By using the [falsiness][falsey] of `0`, a test for a value equaling `0` can be shortened using the [logical NOT operator][logical-not],
like so

```javascript
export function isLeap(year) {
  !(year % 100) ? !(year % 400) : !(year % 4);
}
```

It can be thought of as the expression _not_ having a remainder.

When the body of a function is a single expression, the function can be implemented as an [arrow function][arrow-function], like so

```javascript
export const isLeap = (year) =>
  year % 100 == 0 ? year % 400 == 0 : year % 4 == 0;
```

or

```javascript
export const isLeap = (year) => (!(year % 100) ? !(year % 400) : !(year % 4));
```

Notice that `return` and the curly braces are not needed.

[ternary-operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
[remainder-operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
[falsey]: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
[logical-not]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
[arrow-function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
