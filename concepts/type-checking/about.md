# About

Knowning what the type of a piece of data is, is often very important for code to run smoothly and without errors.

Javascript has several ways to check the type of a value or object.

```exercism/note
Javascript's type checking mechanisms can be somewhat unreliable.

For better type safety and stronger types, you should probably use TypeScript, a language that builds on JavaScript, but with the type syntax of a static-typed language.
```

## The `typeof` operator

The `typeof` operator returns the type of its operand.
The output is a string matching the name of one of the [primitive data types][primitives], except for `"null"`. 
It can also be `"function"` or `"object"`.

```javascript
typeof undefined;
// => "undefined"

typeof true;
// => "boolean"

typeof 42;
// => "number"

typeof 'Hello, World!';
// => "string"

typeof function () {
  return 'Hello, World';
};
// => "function"

typeof [1, 2, 3, 4];
// => "object"

typeof { city: 'Stockholm', country: 'Sweden' };
// => "object"
```

For [historical reasons][`typeof null` is `"object"`].

## The `instanceof` operator

For checking the type of an object, you can use the `instanceof` operator.
It evaluates into a `boolean` depending on whether the second operand is included in the first operands' [prototype chain][prototype chain].
To clarify, `instanceof` will return whether the first operand is an instance of second operand or one of its child classes.
`instanceof` only works on objects.

```javascript
class Beverage {
  // ...
}

// The Coffee class is a child of the Beverage class.
class Coffee extends Beverage {
  // ...
}

const java = new Coffee();

java instanceof Coffee;
// => true

java instanceof Beverage;
// => true
```

```exercism/advanced
The `Array` class has a method called `Array.isArray()` that checks if its argument is an array.

While `instanceof Array` will not work with an array created in a different `iframe` in a webpage, `Array.isArray()` will.

This is because the Array class has a different constructor in each `iframe`, meaning that the function in the prototype chain will be different, causing `instanceof Array` to fail.
`Array.isArray()` is capable of ignoring this, and should always be used when possible.
```

## The `in` operator

The `in` operator returns whether the first operand is a property of the second operand.
It does not check that the property is defined, a property set to `undefined` will still be detected by `in`.

```javascript
class Coffee {
  constructor() {
    this.temperature = 'hot';
    this.isDarkMatter = undefined;
  }

  coolDown() {
    this.temperature = 'warm';
  }
}

const espresso = new Coffee();

'temperature' in espresso;
// => true

'color' in espresso;
// => false

'isDarkMatter' in espresso;
// => true
```

````exercism/note
`in` can be slightly unreliable, as it will return `true` for inherited properties and methods.
```javascript
"coolDown" in espresso
// => true

"constructor" in espresso
// => true
```
To avoid this, use the hasOwnProperty() method.
````

## The `Object.hasOwn()` function

The `Object.hasOwn()` method returns whether the specified object has _its own property_ (not inherited or a method) that matches a string.

```javascript
class Coffee {
  constructor() {
    this.temperature = 'hot';
  }

  coolDown() {
    this.temperature = 'warm';
  }
}
const cappuccino = new Coffee();

Object.hasOwn(cappucino, 'temperature');
// => true

Object.hasOwn(cappucino, 'constructor');
// => false

Object.hasOwn(cappucino, 'coolDown');
// => false
```

[primitives]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
[typeof null is object]: https://2ality.com/2013/10/typeof-null.html
[prototype chain]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain
