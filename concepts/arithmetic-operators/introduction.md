# Introduction
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
  ```javascipt
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
  
 Moreover, numbers stored as variables can also be used for all arithmetic operations.
 ```javascript
 let p = 4;
 let q = 2;
 
 let sum_ab = p + q; // => 6
 let pow_ab = p ** q; // => 16
 ```


## Order of Operations 
When using multiple operators in a line, javascript follows an order of precendence as shown in [this table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table). To simplify it to our context, javascript uses the PEDMAS(Parentheses, Exponents, Division/Multiplication, Addition/Subtraction) rule we've leant in elementary math classes. 
```javascript
let result = 3 ** 3 + 9 * 4/(3-1);
// => 3 ** 3 + 9 * 4/2
// => 27 + 9 * 4/2
// => 27 + 18
// => 45
```
## Shorthand Assignment Operators 
Shorthand assignment operators are a shorter way of writing code conducting arithmetic operations on a variable, and assigning the new value to the same variable. For example, consider two variable `x` & `y`(`y` can aso be replaced by any number). Then, `x += y`is same as `x = x + y`. The 5 other operations can also be conducted in a similar style.

```javascript
let x = 5;
x += 25;
//=> 30
```

