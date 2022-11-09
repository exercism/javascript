# Introduction

There are various idiomatic approaches to solve Leap.
You can use a chain of boolean expressions to test the conditions.
Or you can use a [ternary operator][ternary-operator].
Another approach you can use is a [switch][switch] statement.

## General guidance

The key to solving Leap is to know if the year is evenly divisible by `4`, `100` and `400`.
For determining that, you will use the [remainder operator][remainder-operator].

## Approach: Chain of Boolean expressions

```javascript
export function isLeap(year) {
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
}
```

For more information, check the [Boolean chain approach][approach-boolean-chain].

## Approach: Ternary operator of Boolean expressions

```javascript
export function isLeap(year) {
  return year % 100 == 0 ? year % 400 == 0 : year % 4 == 0;
}
```

For more information, check the [Ternary operator approach][approach-ternary-operator].

## Approach: `switch` statement

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

For more information, check the [`switch` statement approach][approach-switch-statement].

## Other approaches

Besides the aforementioned, idiomatic approaches, you could also approach the exercise as follows:

## Approach: `new Date` `getMonth` approach:

Create a new `Date` from February 29th for the year and see if the month is still February.
For more information, see the [`new Date` `getMonth` approach][approach-new-date-getmonth].

## Which approach to use?

- The chain of boolean expressions is most efficient, as it proceeds from the most likely to least likely conditions.
  It has a maximum of three checks.
- The ternary operator has a maximum of only two checks, but it starts from a less likely condition.
- The `switch` statement is more verbose and may be considered less readable.
- Using a new `Date` with `getMonth` may be considered a "cheat" for the exercise.

[remainder-operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
[switch]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
[ternary-operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
[approach-boolean-chain]: https://exercism.org/tracks/javascript/exercises/leap/approaches/boolean-chain
[approach-ternary-operator]: https://exercism.org/tracks/javascript/exercises/leap/approaches/ternary-operator
[approach-switch-statement]: https://exercism.org/tracks/javascript/exercises/leap/approaches/switch-statement
[approach-new-date-getmonth]: https://exercism.org/tracks/javascript/exercises/leap/approaches/new-date-getmonth
