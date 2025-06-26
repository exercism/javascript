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
It returns a boolean depending on whether the second argument is included in the first arguments' [prototype chain][prototype chain].
To clarify, `instanceof` will return whether the first argument is an instance of second argument or one of its child classes.

```javascript
// The SpecialArray class is a child of the Array class.
class SpecialArray extends Array {
  //...
}
const aSpecialArray = new SpecialArray

aSpecialArray instanceof SpecialArray
// => true

aSpecialArray instanceof Array
// => true

```
[primitives]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
[typeof null is object]: https://2ality.com/2013/10/typeof-null.html
[prototype chain]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain
