# About

Knowning what type an object has is often very important for code to run smoothly and without errors.

Javascript has several ways to check the type of an object.

## The `typeof` operator

The `typeof` operator returns the type of its input. 
The output is restricted to one of the [primitive data types][primitives], "function" or "object".
```javascript
typeof undefined
// => "undefined"

typeof true
// => "boolean"

typeof 42
// => "number"

typeof "Hello, World!"
// => "string"

typeof [1,2,3,4]
// => "object"

typeof typeof function () {return "Hello, World"}
// => "function"

typeof {city: "Stockholm", country: "Sweden"}
// => "object"

```
[primitives]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
