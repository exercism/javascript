# About

## Arithmetic Operators

JavaScript provides 6 different operators to perform basic arithmetic operations on numbers.

- `+`: The addition operator is used to find sum of numbers.

  ```javascript
  1 + 2; // => 3
  2.5 + 3.9; // => 6.5
  ```

- `-`: The subtraction operator is used to find the difference between two numbers

  ```javascript
  19 - 2; // => 17
  7.4 - 1.2; // => 1.5
  ```

- `*`: The multiplication operator is used to find the product of two numbers two numbers

  ```javascript
  7 * 5; // => 35
  9.2 * 6.3; // => 57.959999999999994
  ```

- `/`: The division operator is used to divide two numbers.
  Since JavaScript numbers are always floating point numbers, there is no integer division.

  ```javascript
  8 / 2; // => 4
  25 / 3; // => 8.333333333333334
  ```

- `%`: The remainder operator is used to find the remainder of a division performed.

  ```javascript
  40 % 4; // => 0
  11 % 4; // => 3
  -11 % 4; // => -3
  ```

- `**`: The exponentiation operator is used to raise a number to a power.
  It is the equivalent of using [`Math.pow()`][mdn-math-pow]

  ```javascript
  4 ** 3; // => 64
  4 ** 1 / 2; // => 2
  ```

## Order of Operations

When using multiple operators in a line, JavaScript follows an order of precedence as shown in [this precedence table][mdn-operator-precedence].
To simplify it to our context, JavaScript uses the PEDMAS (Parentheses, Exponents, Division/Multiplication, Addition/Subtraction) rule we've learnt in elementary math classes.

<!-- prettier-ignore-start -->
```javascript
const result = 3 ** 3 + 9 * 4 / (3 - 1);
// => 3 ** 3 + 9 * 4/2
// => 27 + 9 * 4/2
// => 27 + 18
// => 45
```
<!-- prettier-ignore-end -->

## Shorthand Assignment Operators

Shorthand assignment operators are a shorter way of writing code conducting arithmetic operations on a variable, and assigning the new value to the same variable.
For example, consider two variables `x` and `y`.
Then, `x += y` is same as `x = x + y`.
Often, this is used with a number instead of a variable `y`.
The 5 other operations can also be conducted in a similar style.

```javascript
let x = 5;
x += 25; // x is now 30

let y = 31;
y %= 3; // y is now 1
```

[mdn-math-pow]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
[mdn-operator-precedence]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
