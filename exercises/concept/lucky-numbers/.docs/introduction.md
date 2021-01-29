In JavaScript, values may be of different types. To change them from one type to another, we may either _explicitly convert_ or _implicitly coerce_ from one type to another type.

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
