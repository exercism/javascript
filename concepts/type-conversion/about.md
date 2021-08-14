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

- pitfall parseInt/parseFloat

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

However, you can add functions to your object to customize the conversion behavior. The section "[Object to primitive conversion][custom-conversion]" on javascript.info explains how to do this.

Another common way to get a better string representation for objects and arrays is to use [JSON encoding][json].

## Type Coercion

- bool context (if), thruthy/ falsy
- loose equality

- math operators and others operators !, +/- (unary),

// FIXME OLD TEXT BELOW
JavaScript will implicitly coerce types transparently to a programmer, which may introduce unexpected behavior into code.

```javascript
// Examples of implicit type coercion:
true + false; // => 1
12 == '12'; // => true
'number' + 5; // => "number5"
```

How a type is coerced is often dependent on the order of the values and the operator causing the types to be coerced.

<!-- prettier-ignore-start -->
```javascript
{} + '1' // => 1
'1' + {} // "1[object Object]"
```
<!-- prettier-ignore-end -->

Generally, it is best to _avoid_ _implicit type coercion_ and use explicit type conversion functions.

```javascript
const a = 46;
String(a); // => "46"

const b = '3.4';
Number(b); //=> 3.4
Boolean(b); // => true
```

Other functions also exist to convert a value from one type to another:

- Array has an instance method `join` which will return the array as a string:

<!-- prettier-ignore-start -->
  ```javascript
  ['hello', 'world'].join('') // => 'hello world'
  ```
<!-- prettier-ignore-end -->

- All values inherit a function which returns a string representation:

<!-- prettier-ignore-start -->
  ```javascript
  (42).toString() // => "42"
  (false).toString() // "false"
  ({}).toString() // => "[object Object]"
  ([1, 2, 3]).toString() // => "1,2,3"
  ```
<!-- prettier-ignore-end -->

[mdn-falsy]: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
[mdn-nan]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
[mdn-join]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
[custom-conversion]: https://javascript.info/object-toprimitive
[json]: https://javascript.info/json#json-stringify
