# Functions

In JavaScript, functions are _first class objects_ which means they can be assigned to variables and properties, be passed to other functions, and returned from functions. They can have properties and methods, just like any other _object_.

## Input: passing arguments

JavaScript functions allow you to pass arguments when they are called. Arguments are always [passed by value](https://dev.to/xpbytes/javascript-ruby-and-c-are-not-call-by-reference-23f7). In other words, if a function reassigns a parameter inside the function, the value won't change outside the function. That doesn't mean that passed-in objects cannot be mutated.

> 💡 When an object is passed in, the reference to that object is passed in by value. This makes it _seem_ like passing in objects are handled differently, but that's not the case.

An example of a function that takes two arguments and multiplies them is:

```javascript
function multiply(a, b) {
  return a * b;
}

multiply(2, 3);
// => 6
```

## Output: return value

JavaScript can return a single value from a function by using the `return` keyword, followed by an expression. When nothing is returned from a function, the returned value is `undefined`.

An example of a function that returns a value is:

```javascript
function multiply(a, b) {
  return a * b;
}

multiply(2, 3);
// => 6
```

## Defining functions

There are four flavours of functions in JavaScript:

1. Regular functions that can return anything and always run to completion;
2. Async functions that always return a `Promise`, and can paused and resumed with the `await` operator;
3. Generator functions: that always return a `Generator` object, and can be paused and resumed with the `yield` operator;
4. Async generator functions; that always return an `AsyncGenerator` object, and can be paused and resumed with _both_ the `yield` and `await` operators.

For each of these four flavours, there are three ways to define them:

1. using a declaration
2. using an expression
3. using the constructor

Finally there is some special syntax to define _arrow functions and methods_.

## Supported definitions

The tooling used by Exercism to give automated feedback recognizes the following types of declarations and expressions. Definitions using the constructors such as ` Function()` are not supported.

```javascript
function declaration() { return 42 }
function* declaration() { yield 42 }
async function declaration() { }
async function* declaration() { }

const named = function () { return 42 }
const named = function* () { return 42 }
const named = async function() { }
const named = async function*() { }
let named = ...
var name = ...

const arrow = () => { return 42 }
const arrow = () => 42
const arrow = async () => { }
const arrow = async () => 42

collection.assignment = () => {}
collection.assignment = async () => {}

Object.defineProperty(collection, 'property', { value: () => { return 42 } })

const computed = 'name'
const collection = {
  shorthand() { return 42 },
  *shorthand() { yield 42 },
  async shorthand() { },
  async *shorthand() { }

  [computed]() { return 42 }
  *[computed]() { yield 42 }
  async [computed]() { }
  async *[computed]() { }

  property: () => { return 42 },
  property: async () => {},
  property: function () { return 42 },
  property: function* () { yield 42 },
  property: async function () {},
  property: async function* () {},

  [computed]: () => { return 42 },
  [computed]: async () => {},
  [computed]: function () { return 42 },
  [computed]: function* () { yield 42 },
  [computed]: async function () {},
  [computed]: async function* () {}
}

class Klazz {
  get property() { return 42 }
  set property(value) { }

  property = () => { return 42 }
  property = async () => {}
  property = function () { return 42 }
  property = function* () { yield 42 }
  property = async function () { }
  property = async function* () { }

  [computed] = () => { return 42 },
  [computed] = async () => {},
  [computed] = function () { return 42 },
  [computed] = function* () { yield 42 },
  [computed] = async function () {},
  [computed] = async function* () {}

  shorthand() { return 42 }
  *shorthand() { return 42 }
  async shorthand() { }
  async *shorthand() { }

  [computed]() { return 42 }
  *[computed]() { yield 42 }
  async [computed]() { }
  async *[computed]() { }

  static property = () => { return 42 }
  static property = async () => {}
  static property = function () { return 42 }
  static property = function* () { yield 42 }
  static property = async function () { }
  static property = async function* () { }

  static [computed] = () => { return 42 }
  static [computed] = async () => {}
  static [computed] = function () { return 42 }
  static [computed] = function* () { yield 42 }
  static [computed] = async function () { }
  static [computed] = async function* () { }

  static shorthand() { return 42 }
  static *shorthand() { yield 42 }
  static async shorthand() {}
  static async *shorthand() {}

  static [computed]() { return 42 }
  static *[computed]() { yield 42 }
  static async [computed]() { }
  static async *[computed]() { }

  #property = () => { }
  #shorthand() { }
}

Klazz.prototype.fn = () => { }
Klazz.prototype.fn = async () => { }
Klazz.prototype.fn = function () { }
Klazz.prototype.fn = function* () { }
Klazz.prototype.fn = async function () { }
Klazz.prototype.fn = async function* () { }

export default { name: () => {} }
export default { name: async () => {} }
export default { name: function () {} }
export default { name: function* () {} }
export default { name: async function () {} }
export default { name: async function* () {} }

export default { [computed]: () => {} }
export default { [computed]: async () => {} }
export default { [computed]: function () {} }
export default { [computed]: function* () {} }
export default { [computed]: async function () {} }
export default { [computed]: async function* () {} }

export default { name() {} }
export default { *name() {} }
export default { async name() {} }
export default { async *name() {} }

export default { [computed]() {} }
export default { *[computed]() {} }
export default { async [computed]() {} }
export default { async *[computed]() {} }
```
