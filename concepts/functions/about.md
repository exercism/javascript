# About

A function is a block of organized, reusable code that is used to perform some action.
There are multiple ways to define functions in JavaScript.
Here we will look at _function declarations_ and _function expressions_.
Other possibilities like [arrow functions][concept-arrow-functions] will be covered in other concepts.

## Function Declaration

The standard way of defining a function in JavaScript is a _function declaration_, also called _function definition_ or _function statement_.

It consists of the `function` keyword, the name of the function, and a comma-separated list of parameters enclosed in parentheses.
This is followed by the function body (collection of statements that defines what a function does) wrapped in curly braces.

```javascript
function someName(param1, param2, param3) {
  // ...
}
```

## Using a Function

In JavaScript, a function is invoked (called) by stating the function name followed by parentheses that contain the arguments.

```javascript
someName(arg1, arg2, arg3);
```

Just stating the function name does **not** call the function in JavaScript.

```javascript
function sayHello() {
  console.log('Hello, World!');
}

sayHello;
// => function sayHello() {
//   console.log('Hello, World!');
// }

sayHello();
// => 'Hello, World!'
```

## Parameters

When working with parameters inside the function body, be aware of possible side effects.

- Values of [primitive data types][mdn-primitives] are _immutable_.
  The original value is never affected by what happens to the argument in the function body.

```javascript
const num = 0;

function add(num) {
  return num + 1;
}

add(num);
// => 1

num;
// => 0
```

- It is different for values like _objects_, _arrays_, _functions_.
  Since the reference is copied, a reassignment will not affect the original value.
  However, since you are dealing with a [shallow copy][wikipedia-shalllow-copy], modifying the argument in the function body will also change the original value that was passed in.

```javascript
const nums = [0, 1, 2, 3, 4];

function add(arr) {
  arr.push(5);
}

add(nums);

nums;
// => (6) [0, 1, 2, 3, 4, 5]
```

If a function is provided with fewer arguments than there are parameters,
the missing arguments will be `undefined` inside the function body, see [Null and Undefined][concept-null-undefined].
In many cases, it makes more sense to initialize a parameter with a _default_ value if no value or `undefined` property is passed.

```javascript
function someName(param1 = defaultValue1, param2 = defaultValue2) {
  // ...
}
```

A function can be invoked (called) with more arguments than there were parameters in the function definition.
All arguments, including those excess arguments, can be found in the [arguments "array"][mdn-arguments-object].

It is also possible to define functions that accept an arbitrary number of arguments (variadic functions),
see rest parameters in [Rest and Spread Operators][concept-rest-and-spread] for more details.

It is also important to notice that when invoking a function,
the order in which the parameters are defined is the order in which the arguments should be passed in.

```javascript
function printNumbers(num1, num2, num3, num4) {
  console.log('1: ', num1);
  console.log('2: ', num2);
  console.log('3: ', num3);
  console.log('4: ', num4);
}

printNumbers(4, 2, 1, 3);
// => 1:  4
// => 2:  2
// => 3:  1
// => 4:  3

printNumbers(1, 3, 4);
// => 1:  1
// => 2:  3
// => 3:  4
// => 4:  undefined
```

## Return Statement

A function can have multiple `return` statements. A return statement ends the function execution and specifies a value to be returned to the function caller.

```javascript
function checkNumber(num) {
  if (num === 0) {
    return 'You passed 0, please provide another number.';
  }

  return 'Thanks for passing such a nice number.';
}
```

The result of a function that `return`s no value or does not have a `return` statement is `undefined`.
There are no implicit `return`s in JavaScript.

```javascript
function nakedReturn(a) {
  a * 2;
  return;
}

nakedReturn(1);
// => undefined

function noReturn(a) {
  a * 2;
}

noReturn(1);
// => undefined
```

In JavaScript, you can only return exactly one value.
If you want to pass more information, you need to combine it into one entity first, usually into an [object][concept-objects], or an [array][concept-arrays].

```javascript
function divide(a, b) {
  return {
    quotient: Math.floor(a / b),
    remainder: a % b,
  };
}
```

## Function Expression

A function declaration is a standalone statement.
But sometimes it is helpful to define a function as part of another expression, e.g., in an assignment, as a function parameter ([callback][concept-callbacks]) or as value in an [object][concept-objects].
This can be done with a function expression.
It has the same syntax as a function declaration, only that the function name can be omitted to create an _anonymous function_.

```javascript
const someFunction = function (param) {
  // ...
};

someOtherFunction(function (param) {
  // ...
});

const obj = {
  someFunction: function (param) {
    // ...
  },
};
```

## Scope

A function introduces a new execution context in JavaScript.
Variables defined inside a function are not accessible outside of that function.
But variables defined in the parent scope (the scope where the function was defined itself) are accessible inside the function.
The [MDN documentation on scope][mdn-scope] shows examples of this behavior.

Have a look at [closures][concept-closures] to learn more about variable scope in JavaScript.

[concept-arrow-functions]: /tracks/javascript/concepts/arrow-functions
[wikipedia-shalllow-copy]: https://en.wikipedia.org/wiki/Object_copying#Shallow_copy
[concept-null-undefined]: /tracks/javascript/concepts/null-undefined
[concept-rest-and-spread]: /tracks/javascript/concepts/rest-and-spread
[concept-objects]: /tracks/javascript/concepts/objects
[concept-arrays]: /tracks/javascript/concepts/arrays
[concept-callbacks]: /tracks/javascript/concepts/callbacks
[mdn-arguments-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
[mdn-primitives]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
[mdn-scope]: https://developer.mozilla.org/en-US/docs/Glossary/Scope
[concept-closures]: /tracks/javascript/concepts/closures
