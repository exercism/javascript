# `new Date` `getMonth`

```javascript
export function isLeap(year) {
  return new Date(year, 1, 29).getMonth() == 1;
}
```

<!-- prettier-ignore-start -->
~~~~exercism/caution
This approach may be considered a "cheat" for this exercise.
~~~~
<!-- prettier-ignore-end -->

By creating a `new` [`Date`][date] from February 29th for the year, you can see if the month is still February.
If it is, then the year is a leap year.
This is checked by using the [getMonth][getmonth] method of the `Date` object.

<!-- prettier-ignore-start -->
~~~~exercism/note
Note that the value returned from the `getMonth` method is zero-based, meaning that February is `1`, not `2`.
~~~~
<!-- prettier-ignore-end -->

## Shortening

When the body of a function is a single expression, the function can be implemented as an [arrow function][arrow-function], like so

```javascript
export const isLeap = (year) => new Date(year, 1, 29).getMonth() == 1;
```

Notice that `return` and the curly braces are not needed.

[date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[getmonth]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
[arrow-function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
