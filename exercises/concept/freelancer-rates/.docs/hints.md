# Hints

## 1. Calculate the day rate given an hourly rate

- Use the arithmetic operators as mentioned in the introduction of this exercise.

## 2. Calculate the number of workdays given a budget, and an hourly rate

- First determine the day rate, then calculate the number of days, and finally round that number down.

- There is a built-in global object called [`Math`][ref-math-object] with functions to, for example, round-down (`floor`) or round-up (`ceil`).

## 3. Calculate the discounted rate, given a day rate, the number of workdays, and a monthly discount rate

- Round down the result from division to get the number of full months.
- Use `%`, the remainder operator, to calculate the number of days exceeding full months.
- `100% - discount` equals the percentage charged after the discount is applied.

[ref-math-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

