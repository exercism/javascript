# About

Javascript uses 6 different kinds of operators to perform arithmetic operations on numbers.

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

  ```javascript
  8 / 2; // => 4
  25 / 3; // => 8.333333333333334
  ```

- `%`: The remainder operator is used to find the remainder of a division performed.

  ```javascript
  40 % 4; // => 0
  11 % 4; // => 3
  ```

- `**`: The exponentiation operator is used to raise a number to a power.

  ```javascript
  4 ** 3; // => 62
  4 ** 1/2; // => 2
  ```

## Order of Operations

When using multiple operators in a line, javascript follows an order of precendence as shown in [this table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table). To simplify it to our context, javascript uses the PEDMAS(Parentheses, Exponents, Division/Multiplication, Addition/Subtraction) rule we've leant in elementary math classes.

```javascript
let result = 3 ** 3 + 9 * 4/(3-1)
// => 3 ** 3 + 9 * 4/2
// => 27 + 9 * 4/2
// => 27 + 18
// => 45
```

## Shorthand Assignment Operators

Shorthand assignment operators are a shorter way of writing code conducting arithmetic operations on a variable, and assigning the new value to the same variable. Consider two variable `x` & `y`(`y` can aso be replaced by any number)

- `x += y`: Same as `x = x + y`.
- `x -= y`: Same as `x = x - y`.
- `x *= y`: Same as `x = x * y`.
- `x /= y`: Same as `x = x / y`.
- `x %= y`: Same as `x = x % y`.
- `x **= y`: Same as `x = x ** y`.
- `x++`: Same as `x += 1` or `x = x + 1`
- `x--`: Same as `x -= 1` or `x -= x + 1`

```javascript
let x = 5;
x += 25; //=>x = 30
x %= 3; //=> x = 2
x--; //=> x = 4
```
