# About

Knowning what type an object has is often very important for code to run smoothly and without errors.

Javascript has several ways to check the type of an object.

## The `typeof` operator

The `typeof` operator returns the type of its input. 
The output is restricted to one of the [primitive data types][primitives], `"function"` or `"object"`.
```javascript
typeof undefined
// => "undefined"

typeof true
// => "boolean"

typeof 42
// => "number"

typeof "Hello, World!"
// => "string"

typeof function () {return "Hello, World"}
// => "function"

typeof [1,2,3,4]
// => "object"

typeof {city: "Stockholm", country: "Sweden"}
// => "object"
```
The one exception to this is that `typeof null` returns `"object"` for [historical reasons][typeof null is object].

## The `instanceof` operator

For checking the type of an object, you can use the `instanceof` operator.
It returns a boolean depending on whether the second operand is included in the first operands' [prototype chain][prototype chain].
To clarify, `instanceof` will return whether the first operand is an instance of second operand or one of its child classes.
`instanceof` only works for compound data types, such as arrays and objects.

```javascript
class Beverage {
  // ...
}
// The Dog class is a child of the Pet class.
class Coffee extends Beverage {
  // ...
}
const java = new Coffee()

java instanceof Coffee
// => true

java instanceof Beverage
// => true

```
~~~~exercism/advanced
The `Array` class has a method called `Array.isArray()` that checks if its argument is an array.

While `instanceof Array` will not work with an array created in a different `iframe` in a webpage, `Array.isArray()` will.

This is because the Array class has a different constructor in each `iframe`, meaning that the function in the prototype chain will be different, causing `instanceof Array` to fail.
`Array.isArray()` is capable of ignoring this, and should always be used when possible.
~~~~
## The `in` operator

[primitives]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
[typeof null is object]: https://2ality.com/2013/10/typeof-null.html
[prototype chain]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain
