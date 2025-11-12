# Hints

## General

- To extract multiple arguments in the function parameters so can you pack them with the `...<args>`.
- To use rest and spread use the `...` operator.

## 1. Create a list of all wagons

- Multiple arguments in the function parameters can be packed with the [`...<args>` (spread) syntax][spread-syntax]. operator.

## 2. Move the first two elements to the end of the array

- You can unpack a series of parameters using [a destructuring assignment (`...`)][destructuring-assignment].
  This lets you extract the first two elements of an `array` while keeping the rest intact.
- To add another `array` into an existing `array`, you can use the `...` operator to "spread" the `array`.

## 3. Add missing values

- Using unpacking with the rest operator(`...`), you can extract the first element of an `array` while keeping the rest intact.
- To add another `array` into an existing `array`, you can use the `...` operator to "spread" the `array`.

## 4. Extend routing information

- To add another `object` into an existing `object`, you can use the `...` operator to "spread" the `object`.

## 5. Separate arrival time from routing information

- To extract a value from an `object` while keeping the rest intact, you can use the rest operator(`...`).

[spread-syntax]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
[destructuring-assignment]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
