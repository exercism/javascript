# About

There are two different kinds of numbers in JavaScript - numbers and bigints

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
The `BigInt` type was not designed to replace `Number` for everyday uses.
`42` is still a `Number`, not a `BigInt`.

Number may also be expressed in literal forms like `0b101`, `0o13`, `0x0A`. Learn more on numeric lexical grammar [here][lexical-grammar].

## Built-in Object

There are two built-in objects that are useful when dealing with numbers:

- [`Number`][built-in-number]: static properties for common / useful values, static methods for [type-checking][type-checking] and [type-conversion][type-conversion], instance methods for [type-conversion][type-conversion] and [formatting numbers as strings][string-formatting].
- [`Math`][built-in-math]: properties and methods for mathematical constants and functions, does **not** work with `BigInt`.

The `Number` built-in object is _also_ a global `function` that can be used to convert _almost anything_ that can be represented as a `number` to a `number`. It is less forgiving then _parsing_ a string to a number.

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
However, _every_ number between `Number.MIN_SAFE_INTEGER - 1` and `Number.MAX_SAFE_INTEGER + ` **can** be represented.

## Comparison

Numbers can be considered equal if they have the same value.

```javascript
1 == 1.0;
// => true

1 === 1.0;
// => true
// Remember, all numbers are floating-points, so this is different syntax for
// the exact same value.

1 === 1n;
// => false
// Strictly checking a number against a bigint will always result in false.

1 == 1n;
// => true
// A number is equal to a bigint if they represent the same value.

1.0 == 1n;
// => true
// A number is equal to a bigint if they represent the same value.
```

Because there are different ways to do [comparison][comparison], there are different outcomes when comparing numbers with different types.
In general, only two operands of the type `number` can ever be _strictly equal_ (`===`), and the following can be used for _loose equality_ (`==`):

| Left   | Right     | `==`                  |
| ------ | --------- | --------------------- |
| Number | Undefined | `false`               |
| Number | Null      | `false`               |
| Number | Number    | `A === B`             |
| Number | String    | `A === ToNumber(B)`   |
| Number | Boolean   | `A === ToNumber(B)`   |
| Number | Object    | `A == ToPrimitive(B)` |

In the above table, `ToNumber(X)` attempts to convert its argument to a number before comparison.
Its behavior is equivalent to `+A` (the unary `+` operator).
`ToPrimitive(X)` attempts to convert its object argument to a primitive value, by attempting to invoke varying sequences of `X.toString` and `X.valueOf` methods on `X`.

## Related concepts

<!--
These are widgets. See: https://github.com/exercism/docs/blob/main/anatomy/tracks/widgets.md
Normally these would be put in a list, but it renders better when it's next to each other.
-->

[concept:javascript/comparison](https://github.com/exercism/javascript/tree/main/concepts/comparison) [concept:javascript/type-checking](https://github.com/exercism/javascript/tree/main/concepts/type-checking) [concept:javascript/type-conversion](https://github.com/exercism/javascript/tree/main/concepts/type-conversion) [concept:javascript/string-formatting](https://github.com/exercism/javascript/tree/main/concepts/string-formatting)

[built-in-number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[built-in-math]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
[comparison]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
[lexical-grammar]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals
[string-formatting]: https://exercism.lol/tracks/javascript/concepts/string-formating
[type-checking]: https://exercism.lol/tracks/javascript/concepts/type-checking
[type-conversion]: https://exercism.lol/tracks/javascript/concepts/type-conversion
