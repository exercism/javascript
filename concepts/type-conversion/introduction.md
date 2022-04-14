# Introduction

In JavaScript, values may be of different types. Changing the type of a variable can be done by explicit _type conversion_.
Besides that, JavaScript also performs _type coercion_ (implicit type conversion) when the context requires it.

## Type Conversion

JavaScript does not have a construct to cast into a (different) type like many other languages but some built-in helpers can be used instead.
Most notably, `Boolean`, `Number` and `String` can be used as functions to convert a value to the respective type.

### Converting to a Boolean (Truthy/Falsy Values)

With `Boolean(value)` you can convert any value to a boolean.
There is a fixed set of values, so called _falsy_ values, that convert to `false`.
Most importantly, `false`, `0`, empty string, `null`, `undefined` and `NaN` are falsy.

For all other values, `Boolean` returns `true`.
These values are called _truthy_.

```javascript
Boolean(-1);
// => true

Boolean(0);
// => false

Boolean(' ');
// => true

Boolean('');
// => false
```

Note that because of the described rules, `'0'`, `'false'`, `[]` and `{}` are **truthy** in JavaScript.

### Converting to a Number

`Number(value)` can be used to convert a value to a number.
Whitespaces at the beginning and the end of a string are ignored and an empty string is converted to `0`.
If you try to convert a non-primitive value or a string that does not represent a number, the result is `NaN` ([Not-A-Number][mdn-nan]).

```javascript
Number('  -12.34  ');
// => -12.34

Number('1,2');
// => NaN

Number('');
// => 0

Number({ num: 123 });
// => NaN
```

### Converting to a String

With `String(value)` you can convert a value to a string.
The result is what you would expect it to be for primitive values.

```javascript
String(12.34);
// => '12.34'

String(false);
// => 'false'

String(null);
// => 'null'

String(undefined);
// => 'undefined'
```

For arrays, the `String` function will apply the string conversion for each element and join the results with a comma.
You can also apply the [`join` method][mdn-join] yourself, e.g. to customize the separator.
Note that in these cases `null` and `undefined` will be converted to an empty string.

```javascript
String([42, null, true, 'abc']);
// => '42,,true,abc'
```

For objects, by default `String` returns an unhelpful text.

```javascript
String({ key: 'value' });
// => '[object Object]'
```

## Type Coercion

In certain contexts, JavaScript will automatically convert a value to another data type before it evaluates some statement.
This implicit conversion is called _type coercion_.

### Boolean Context

When a non-boolean value is used in a boolean context, JavaScript will apply the same rules as the `Boolean` function to implicitly convert the value.

Coercion to boolean commonly occurs for

- the condition of an [if statement][concept-conditionals]
- the first operand of the [ternary operator][mdn-ternary] `?`
- the operand of the logical NOT operator `!`
- the operands of the logical AND `&&` and OR `||` operators (the result of the expression is one of the operands, not necessarily a boolean)

```javascript
const num = 0;
if (num) {
  // this block is NOT executed because 0 is falsy
}
```

### String Context

If the addition operator `+` is used for primitive values and one operand is a string, the other one will be coerced into a string as well.
The conversion logic is the same as when using the `String` function.
Afterwards, the two strings are concatenated.

```javascript
let name;
'hello ' + name;
// => 'hello undefined'
```

### Numeric Context

Many operators coerce the operands into numbers (if necessary) according to the logic of the `Number` function explained above.

- Arithmetic operators: `+` (if no string is involved), `-`, `*`, `/`, `%`, `**`
- Unary plus and unary negation operators: `+`, `-`
- Relational operators (for non-string operands): `>`, `>=`, `<`, `<=`
- Bitwise operators: `|`, `&`, `^`, `~`

Refer to the [MDN list of operators][mdn-operators] for more details about any of those operators.

To avoid mistakes, it is good practice to always call `Number` explicitly before applying those operators.

[mdn-nan]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
[mdn-join]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
[concept-conditionals]: /tracks/javascript/concepts/conditionals
[mdn-ternary]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
[mdn-operators]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
