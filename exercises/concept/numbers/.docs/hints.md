## 1. Calculate the day rate given an hourly rate

## 2. Calculate the month rate, given an hourly rate and a discount

- There is a global built-in function to _parse_ a `string` to a fractional
  number, ignoring non-numeric characters, such as the `%` (percent)-sign.
- `100% - discount` equals the percentage after the discount is applied.
- There is a built-in helper object called [`Math`][ref-math-object] with
  functions to, for example, round-down (`floor`) or round-up (`ceil`).

[ref-math-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

## 3. Calculate the number of workdays given a budget, rate and discount

- There is a function on the `number` (proto)type to return a "fixed" number of
  decimals.
- First determine the dayRate, given the discount, then calculate the number of
  days, and finally "fix" the number of decimals.
