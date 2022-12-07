# About

In JavaScript, values may be of different types. Changing the type of a variable can be done by explicit _type conversion_.
Besides that, JavaScript also performs _type coercion_ (implicit type conversion) when the context requires it.

## Type Conversion

JavaScript does not have a construct to cast into a (different) type like many other languages but some built-in helpers can be used instead.
Most notably, the global objects `Boolean`, `Number` and `String` can be used as functions to convert a value to the respective type.

### Converting to a Boolean (Truthy/Falsy Values)

With `Boolean(value)` you can convert any value to a boolean.
How does that work?

There is a fixed set of values, so called _falsy_ values, that convert to `false`.
Most importantly, `false`, `0`, empty string, `null`, `undefined` and `NaN` are falsy.
The [MDN article on "Falsy"][mdn-falsy] shows the complete list.

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
If you try to convert a non-primitive value or a string that does not represent a number, **no** error will be thrown.
Instead, the result is `NaN` ([Not-A-Number][mdn-nan]).

```javascript
Number('  -12.34  ');
// => -12.34

Number('1,2');
// => NaN

Number('1 2');
// => NaN

Number('');
// => 0

Number('10e3');
// => 10000

Number({ key: '123' });
// => NaN
```

Below you can see what `Number` returns for other primitive values.

```javascript
Number(true);
// => 1

Number(false);
// => 0

Number(null);
// => 0

Number(undefined);
// => NaN
```

Note that in contrast to the last example, `Number()` called without any argument is defined to return `0`.

JavaScript also provides the functions `parseInt` and `parseFloat`.
They apply laxer rules as to which strings can be converted to a number.
Because of that, `Number` should be preferred as the conversion function to avoid unexpected outcomes.

```javascript
parseInt('123a45');
// => 123

Number('123a45');
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
However, in these cases `null` and `undefined` will be converted to an empty string.

```javascript
String([42, null, true, 'abc']);
// => '42,,true,abc'
```

For objects, by default `String` returns an unhelpful text.

```javascript
String({ key: 'value' });
// => '[object Object]'
```

You can customize the conversion behavior, e.g. by providing a `toString` method.
The section "[Object to primitive conversion][custom-conversion]" on javascript.info explains the details.

Another common way to achieve a better string representation for objects and arrays is to use [JSON encoding][json].
You can convert into a string with `JSON.stringify` and back into an object or array with `JSON.parse`.

```javascript
const obj = {
  name: 'Gilda Guerra',
  address: {
    city: 'Goiânia',
  },
};

JSON.stringify(obj);
// => '{"name":"Gilda Guerra","address":{"city":"Goiânia"}}'
```

## Type Coercion

In certain contexts, JavaScript will automatically convert a value to another data type before it evaluates some statement.
This implicit conversion is called _type coercion_.

### Boolean Context

When a value is used in a boolean context, JavaScript will apply the same rules as the `Boolean` function to implicitly convert the value.

- When the condition of an [if statement][concept-conditionals] is not a boolean, coercion is applied to determine whether the condition is fulfilled or not.
  The same applies for the first operand of the [ternary operator][mdn-ternary] `?`.

  ```javascript
  const num = 0;
  if (num) {
    // this block is NOT executed because 0 is falsy
  }

  const name = 'Jin';
  name ? 'name was provided' : 'no name provided';
  // => 'name was provided'
  ```

- The operand of the logical NOT operator `!` is also coerced into boolean before the NOT operation is applied.

  ```javascript
  const name = '';
  !name;
  // => true
  ```

  A result of the described behavior is that `!!value` has the same effect as `Boolean(value)`.
  Nevertheless, you should use `Boolean` for readability.

- JavaScript also applies coercion for the operands of the logical AND (`&&`) and OR (`||`) operators.
  But keep in mind that the result of the expression is **not** necessarily a boolean.
  It returns one of the original operands (see [MDN on Logical Operators][mdn-logical-operators]).

  ```javascript
  null || 'hello';
  // => 'hello'
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

The same implicit conversion happens for non-string values that are embedded in [template strings][mdn-template-strings].

```javascript
const degrees = 23;
`It is ${degrees} °C`;
// => 'Is is 23 °C.';
```

### Numeric Context

Many operators coerce the operands into numbers (if necessary) according to the logic of the `Number` function explained above.

- Arithmetic operators: `+` (if no string is involved), `-`, `*`, `/`, `%`, `**`
- Unary plus and unary negation operators: `+`, `-`
- Relational operators (for non-string operands): `>`, `>=`, `<`, `<=`
- Bitwise operators: `|`, `&`, `^`, `~`

Refer to the [MDN list of operators][mdn-operators] for more details about any of those operators.

When an operand could potentially be a string, it is best to always explicitly convert with the `Number` function to avoid mistakes.

```javascript
'1' + '2';
// => '12'
// addition operator in string context as explained above

Number('1') + Number('2');
// => 3
```

Sometimes you will see the unary plus operator being used to coerce a string into a number.
This is not recommended because it is much harder to read than the explicit `Number` call.

```javascript
const value = '42';
+value;
// => 42

Number(value);
// => 42
```

Using the loose equality and inequality operators `==`/`!=` also often involves an implicit conversion to a number.
However, the exact logic of these operators is rather complicated (see [MDN on loose equality][mdn-loose-equality]).
The results are hard to predict and sometimes not what you would expect.
Use the strict equality/inequality operators `===`/`!==` instead to avoid these implicit conversions.

[mdn-falsy]: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
[mdn-nan]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
[mdn-join]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
[custom-conversion]: https://javascript.info/object-toprimitive
[json]: https://javascript.info/json#json-stringify
[concept-conditionals]: /tracks/javascript/concepts/conditionals
[mdn-logical-operators]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
[mdn-ternary]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
[mdn-template-strings]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
[mdn-operators]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
[mdn-loose-equality]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#loose_equality_using_
