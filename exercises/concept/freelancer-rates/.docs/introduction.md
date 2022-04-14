# Introduction

## Numbers

Many programming languages have specific numeric types to represent different types of numbers, but JavaScript only has two:

- `number`: a numeric data type in the double-precision 64-bit floating-point format (IEEE 754).
  Examples are `-6`, `-2.4`, `0`, `0.1`, `1`, `3.14`, `16.984025`, `25`, `976`, `1024.0` and `500000`.
- `bigint`: a numeric data type that can represent _integers_ in the arbitrary precision format.
  Examples are `-12n`, `0n`, `4n`, and `9007199254740991n`.

If you require arbitrary precision or work with extremely large numbers, use the `bigint` type.
Otherwise, the `number` type is likely the better option.

### Rounding

There is a built-in global object called `Math` that provides various [rounding functions][ref-math-object-rounding]. For example, you can round down (`floor`) or round up (`ceil`) decimal numbers to the nearest whole numbers.

```javascript
Math.floor(234.34); // => 234
Math.ceil(234.34); // => 235
```

## Arithmetic Operators

JavaScript provides 6 different operators to perform basic arithmetic operations on numbers.

- `+`: The addition operator is used to find the sum of numbers.
- `-`: The subtraction operator is used to find the difference between two numbers
- `*`: The multiplication operator is used to find the product of two numbers.
- `/`: The division operator is used to divide two numbers.

```javascript
2 - 1.5; //=> 0.5
19 / 2; //=> 9.5
```

- `%`: The remainder operator is used to find the remainder of a division performed.

  ```javascript
  40 % 4; // => 0
  -11 % 4; // => -3
  ```

- `**`: The exponentiation operator is used to raise a number to a power.

  ```javascript
  4 ** 3; // => 64
  4 ** 1 / 2; // => 2
  ```

### Order of Operations

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

### Shorthand Assignment Operators

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

[mdn-operator-precedence]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
[ref-math-object-rounding]: https://javascript.info/number#rounding
