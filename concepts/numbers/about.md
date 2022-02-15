# About

There are two different kinds of numbers in JavaScript - numbers and "bigints"

Numbers are the most used, and represent numeric data type in the double-precision 64-bit floating-point format.

- `number`: a numeric data type in the double-precision 64-bit floating-point format (IEEE 754).
  Examples are `-6`, `-2.4`, `0`, `0.1`, `1`, `3.14`, `16.984025`, `25`, `976`, `1024.0` and `500000`.
- `bigint`: a numeric data type that can represent _integers_ in the arbitrary precision format.
  Examples are `-12n`, `0n`, `4n`, and `9007199254740991n`.

```javascript
let numericValue = 42;
// => 42
```

A number literal like `42` in JavaScript code is a floating-point value, not an integer.
There is no separate integer type in common everyday use.
The `bigint` type is not designed to replace the `number` type for everyday uses.
`42` is still a `Number`, not a `BigInt`.

## Special Notations

There are two types of notations:
- Exponential notation(E-notation)
- Underscore notation

### Exponential notation
The E-notation indicates a number that should be multiplied by 10 raised to a given power.
The format of E-notation is to have a number, followed by `e` or `E`, than by the power of 10 to multiply by.
```javascript
const num = 3.125e7;
// => 31250000
// The notation essentially says, "Take 3.125 and multiply it by 10^7".
```
E-notation can also be used to represent very small numbers:
```javascript
num = 325987e-6; // Equals to 0. 325987
// The notation essentially says, "Take 325987 and multiply it by 10^-6.
```

### Underscore notation
The underscore notaion is used to make lage numbers easier to read to the user. (The compiler will ignore the underscores)
```javascript
let num = 1_000_000; // You can read this as 1,000,000
console.log(num) // => 1000000
```

Numbers may also be expressed in literal forms like `0b101`, `0o13`, `0x0A`. Learn more on numeric lexical grammar [here][lexical-grammar].

## Built-in Object

There are two built-in objects that are useful when dealing with numbers:

- [`Number`][built-in-number]: static properties for common / useful values, static methods for [type-checking][concept-type-checking] and [type-conversion][concept-type-conversion], instance methods for [type-conversion][concept-type-conversion] and [formatting numbers as strings][string-formatting].
- [`Math`][built-in-math]: properties and methods for mathematical constants and functions, does **not** work with `BigInt`.

`Math` also includes methods for rounding numbers.
You can read more about the available rounding options in this [javascript.info article on rounding][ref-math-object-rounding].

```javascript
Math.floor(234.34); // => 234
Math.ceil(234.34); // => 235
```

The `Number` built-in global `object` is _also_ a global `function` that can be used to convert _almost anything_ number-like to a `number`.
It is less forgiving than _parsing_ a `string` to a `number`.

```javascript
const date = new Date('December 17, 1995 03:24:00');
const unix = Number(date);

unix;
// => 819199440000
```

There are three types of maximum (and minimum / maximum negative) values for numbers in JavaScript:

- `VALUE`: given by `Number.MAX_VALUE` and `Number.MIN_VALUE`
- `INFINITY`: given by `Number.POSITIVE_INFINITY` and `Number.NEGATIVE_INFINITY`
- `SAFE_INTEGER`: given by `Number.MAX_SAFE_INTEGER` and `Number.MIN_SAFE_INTEGER`

Because of how numbers in JavaScript are implemented, **not** every number between `Number.MIN_VALUE` and `Number.MAX_VALUE` can be represented.
However, _every_ number between `Number.MIN_SAFE_INTEGER - 1` and `Number.MAX_SAFE_INTEGER + 1` **can** be represented.

## Special Numbers Values

JavaScript has several special number values:
- Two error values, `NaN` and `Infinity`.
- Two values for zero, `+0` and `-0`.

### NaN

The error value `NaN`(aka "Not a Number"), is produced when:

- A number could not be parsed:
  ```javascript
  Number("123"); // => 123
  Number("Hello, World!"); // => NaN
  ```
- An operation failed:
  ```javascript
  Math.sqrt(-64); // => NaN
  ```
- One of the operands is NaN:
  ```javascript
  NaN + 69; // => NaN
  ```

`NaN` is the only value that is not equal to itself:
```javascript
 NaN === NaN; // => false
```

If you want to check whether a value is `NaN`, you have to use the global function `isNaN()`:
```javascript
isNaN(NaN); // => true
isNaN(123); // => false
```

### Infinity
`Infinity` is an error value indicating one of two problems: 
- A number can’t be represented because its magnitude is too large.
  ```javascript
  Math.pow(2, 1024); // => Infinity
  ```
- A division by zero has happened.
  ```javascript
  6 / 0; // => Infinity
  -6 / 0; // => -Infinity
  ```

 `Infinity` is larger than any other number (except `NaN`). 
 Similarly, `-Infinity` is smaller than any other number (except `NaN`)

 Additionally, the global function `sFinite()`allows you to check whether a value is an actual number (neither infinite nor NaN):
 ```javascript
 isFinite(80085); // => true
 isFinite(Infinity); // => false
 isFinite(NaN); // => false
 ```

### The two zeros
`+0` or `-0` can be produced if you represented a number, that is so small that it is indistinguishable from 0.
The signed zero allows you to record “from which direction” you approached zero; that is, what sign the number had before it was considered zero.
It is best practise to pretend there's only one zero.

## Comparison

Numbers are considered equal if they have the same value.

```javascript
1 == 1.0;
// => true

1 === 1.0;
// => true
// Remember, all numbers are floating-points, so this is
// different syntax for the exact same value.

1 === 1n;
// => false
// Strictly checking a number against a bigint will always result
// in false.
```

See [comparison][concept-comparison] for more information on comparisons in general and comparing numeric values in JavaScript.

## Pitfalls

Because numbers in JavaScript are floating-point numbers, all math using these values is floating-point math.
Therefore, in JavaScript:

```javascript
0.1 + 0.2 === 0.3;
// => false
```

See [0.30000000000000004.com](https://0.30000000000000004.com/) for a brief explanation and [Appendix D](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html) of Oracle's Numerical Computation Guide "What Every Computer Scientist Should Know About Floating-Point Arithmetic" for an in-depth explanation.

[built-in-number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[built-in-math]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
[comparison]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
[lexical-grammar]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals
[string-formatting]: /tracks/javascript/concepts/string-formatting
[ref-math-object-rounding]: https://javascript.info/number#rounding
[concept-comparison]: /tracks/javascript/concepts/comparison
[concept-type-checking]: /tracks/javascript/concepts/type-checking
[concept-type-conversion]: /tracks/javascript/concepts/type-conversion
