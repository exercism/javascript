# About

There are two different kinds of numbers in JavaScript - numbers and "bigints"

Numbers are the most used, and represent numeric data type in the double-precision 64-bit floating point format.

- `number`: a numeric data type in the double-precision 64-bit floating point format (IEEE 754).
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

Number may also be expressed in literal forms like `0b101`, `0o13`, `0x0A`. Learn more on numeric lexical grammar [here][lexical-grammar].

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
## Infinity - Positive and Negative 

The default value of [`infinity`][infinity] is greater than any other number, by default it's set to `Number.POSITIVE_INFINITY`.
Here you can see how `Infinity` can be used : 
```javascript
console.log(Infinity          ); /* Infinity */
console.log(Infinity + 1      ); /* Infinity */
console.log(Math.pow(10, 1000)); /* Infinity */
console.log(Math.log(0)       ); /* -Infinity */
console.log(1 / Infinity      ); /* 0 */
console.log(1 / 0             ); /* Infinity */
```
Beware that [`positive-infinity`][positive-infinity] behaves differently than the mathematical infinity. So you may encounter some unexpected behaviors like this:
- `POSITIVE_INFINITY`, divided by either `NEGATIVE_INFINITY` or `POSITIVE_INFINITY`, is `NaN`.
- `POSITIVE_INFINITY`, divided by any negative value except `NEGATIVE_INFINITY`, is `NEGATIVE_INFINITY`.
- Zero multiplied by `POSITIVE_INFINITY` is `NaN`.

[`negative-infinity`][negative-infinity] is the same as `POSITIVE_INFINITY` but with a negative sign :
- `NEGATIVE_INFINITY`, divided by either `NEGATIVE_INFINITY` or `POSITIVE_INFINITY`, is `NaN`.
- `NEGATIVE_INFINITY`, divided by any negative value except `NEGATIVE_INFINITY`, is `POSITIVE_INFINITY`.
- Any positive value, including `POSITIVE_INFINITY`, multiplied by `NEGATIVE_INFINITY` is `NEGATIVE_INFINITY`.


## NaN or Not-a-Number

The [`NaN`][NaN] is a variable in global scope. There are five different types of operations returning `NaN`:

-  Number cannot be parsed (e.g. parseInt("blabla") or Number(undefined))
-  Math operation where the result is not a real number (e.g. Math.sqrt(-1))
-  Operand of an argument is NaN (e.g. 7 ** NaN)
-  Indeterminate form (e.g. 0 * Infinity, or undefined + undefined)
-  Any operation that involves a string and is not an addition operation (e.g. "foo" / 3)

## Exponentiation 

You can put your [`exponentiation`][exponentiation] by using `**`.
Here are some examples of exponentiation:
```javascript
2 ** 3   // 8
3 ** 2   // 9
3 ** 2.5 // 15.588457268119896
10 ** -1 // 0.1
NaN ** 2 // NaN
```
The exponentiation operator is right-associative: `a ** b ** c` is equal to `a ** (b ** c)`.
Beware that JavaScript is different than most languages with exponentiation, it is impossible to write an ambiguous exponentiation expression. That is, you cannot put a unary operator `(+/-/~/!/delete/void/typeof)` immediately before the base number, doing so will cause a `SyntaxError`.
In other words this : `-2 ** 2` will cause an error, but this is correct `-(2**2)`.
Also do not use `^` like in every other language, as it is reserved for `bitwise logical XOR operator`!

## Underscore in numbers

An [`underscore`][underscore] can be used in numbers to help readability. However you can place underscores only between digits, you cannot place underscores at the beginning or end of a number:

```javascript
let amount = 120_201_123.05; // 120,201,123.05
let expense = 123_4500; // 123.45
let fee = 12345_00; // 12,345
// BigInt
const max = 9_223_372_036_854_775_807n;

// binary
let nibbles = 0b1011_0101_0101;

// octal
let val = 0o1234_5670;

// hex
let message = 0xD0_E0_F0;
```

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

Because numbers in JavaScript are floating point numbers, all math using these values is floating point math.
Therefore, in JavaScript:

```javascript
0.1 + 0.2 === 0.3;
// => false
```

See [0.30000000000000004.com](https://0.30000000000000004.com/) for a brief explanation and [Appendix D](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html) of Oracle's Numerical Computation Guide "What Every Computer Scientist Should Know About Floating-Point Arithmetic" for an in depth explanation.
[underscore]: https://www.javascripttutorial.net/es-next/javascript-numeric-separator/
[exponentiation]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation
[infinity]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity
[negative-infinity]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
[positive-infinity]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY
[NaN]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
[built-in-number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[built-in-math]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
[comparison]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
[lexical-grammar]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals
[string-formatting]: /tracks/javascript/concepts/string-formatting
[ref-math-object-rounding]: https://javascript.info/number#rounding
[concept-comparison]: /tracks/javascript/concepts/comparison
[concept-type-checking]: /tracks/javascript/concepts/type-checking
[concept-type-conversion]: /tracks/javascript/concepts/type-conversion
