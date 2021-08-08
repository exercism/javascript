# About

In JavaScript, values may be of different types. Changing the type of a variable can be done explicit _type conversion_. Besides that, JavaScript also performs _type coercion_ (implicit type conversion) when the context requires it.

## Type Conversion

JavaScript does not have a construct to cast into a (different) type like many other languages but there are built-in helpers that can be used instead.

### Converting to Primitives

The global objects `String`, `Number` and `Boolean` can also be used as functions.

#### String

- primitives
  Many languages have a way to cast a value into a (different) type. JavaScript does not have such constructs. However, the global objects for truthy primitives (String, Number, Boolean) also exist as function (String(val), Number(val), Boolean(val)) which convert the input to the primitive type

- pitfall parseInt/parseFloat

- to string (add for custom classes)

- join, json

TODO continue to make a list, based on existing issue

## Type Coercion

- bool context (if), thruthy/ falsy
- loose equality

- math operators and others operators !, +/- (unary),

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
