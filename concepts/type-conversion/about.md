# About

In JavaScript, values may be of different types. Changing the type of a variable can be done explicit _type conversion_. Besides that, JavaScript also performs _type coercion_ (implicit type conversion) when the context requires it.

## Type Conversion

JavaScript does not have a construct to cast into a (different) type like many other languages but there are built-in helpers that can be used instead.
For example, the global objects `Boolean`, `Number` and `String` can also be used as functions to convert values between those primitive types.

### Converting to a Boolean (Truthy/Falsy Values)

With `Boolean(value)` you can convert a value to a boolean.
How does that work?

There is a fixed set of values, so called _falsy_ values, that convert to `false`.
Most importantly `false`, `0`, emtpy string, `null`, `undefined` and `NaN` are falsy.
The [MDN article on "Falsy"][mdn-falsy] shows the complete list.

For all other values, `Boolean` returns `true`.
These values are called `truthy`.

```javascript
Boolean(-1);
// => true

Boolean(0);
// => false

Boolean('0');
// => true

Boolean('');
// => false

Boolean(' ');
// => true

Boolean('false');
// => true

Boolean([]);
// => true

Boolean({});
// => true
```

### Converting to a Number

`Number(value)` can be used to convert a value into a number.
If you convert a string, whitespaces at the beginning and the end of the string are ignored.
An empty string is converted to `0`.
If you try to convert a string that does not represent number or non-primitive value, no error will be thrown.
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

JavaScript also provides the functions `parseInt` and `parseFloat`.
They apply laxer rules as to which strings can be converted to a number.
Because of that, it is recommended to use `Number` instead to avoid unexpected outcomes.

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

However, you can customize the conversion behavior, e.g. by providing a `toString` method.
The section "[Object to primitive conversion][custom-conversion]" on javascript.info explains the details.

Another common way to achieve a better string representation for objects and arrays is to use [JSON encoding][json].

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

Because the type coercion rules can introduce to unexpected behavior and are often difficult to reason about, it is best to avoid implicit conversion.
Instead, use the explicit type conversion functions introduced above, as well as the strict equality operator `===` for comparison.

### Boolean Context

When a value is used in a boolean context, JavaScript will apply the same rules as explained for the `Boolean` function to implicitly convert the value.

- When the condition of an [if statement][concept-conditionals] is not a boolean, coercion is applied to determine whether the condition is fulfilled or not.

  ```javascript
  const name = 'Jin';
  if (name) {
    // this block is executed because 'Jin' is truthy
  }

  const num = 0;
  if (num) {
    // this block is NOT executed because 0 is falsy
  }
  ```

- The operand of the logical NOT operator `!` is also coerced into boolean before the NOT operation is applied.

  ```javascript
  const name = '';
  !name;
  // => true
  ```

  A result of the described behavior is that `!!value` has the same effect as `Boolean(value)`.
  Nevertheless you should use `Boolean` for readability.

- JavaScript also applies coercion for the operands of the logical AND (`&&`) and OR (`||`) operators.
  However, the result of the expression is **not** a boolean but one of the original operands (see [MDN on Logical Operators][mdn-logical-operators]).

  ```javascript
  null || 'hello';
  // => 'hello'
  ```

### String Context

If the addition operator `+` is used and one of the operands is a string, the other one will be coerced into a string as well (if necessary).
The same conversion rules as for the `String` function apply.

```javascript
'hello' + 42;
// => 'hello42'

undefined + '°C';
// => 'undefined°C'
```

### Numeric Context

- math operators, +/- (unary)

  - comparison operators (>, <, <=,>=)
  - bitwise operators ( | & ^ ~)
  - arithmetic operators (- + \* / % )
  - unary + operator

### (Loose) Equality Check

...

[mdn-falsy]: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
[mdn-nan]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
[mdn-join]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
[custom-conversion]: https://javascript.info/object-toprimitive
[json]: https://javascript.info/json#json-stringify
[concept-conditionals]: /tracks/javascript/concepts/conditionals
[mdn-logical-operators]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
