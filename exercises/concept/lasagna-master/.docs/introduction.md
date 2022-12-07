# Introduction

A function is a block of organized, reusable code that is used to perform some action.
There are multiple ways to define functions in JavaScript.
Here we will look at _function declarations_ and _function expressions_.
Other possibilities like [arrow functions][concept-arrow-functions] will be covered in other concepts.

## Function Declaration

The standard way of defining a function in JavaScript is a _function declaration_, also called _function definition_ or _function statement_.

It consists of the `function` keyword, the name of the function, and a comma-separated list of parameters in round brackets.
This is followed by the function body (collection of statements that defines what a function does) wrapped in curly brackets.

```javascript
function someName(param1, param2, param3) {
  // ...
}
```

In JavaScript, a function is invoked (called) by stating the function name followed by parentheses that contain the arguments.

```javascript
someName(arg1, arg2, arg3);
```

## Parameters

When working with parameters inside the function body, be aware of possible side effects.

- Values of [primitive data types][mdn-primitives] are _immutable_.
  The original value is never affected by what happens to the argument in the function body.
- For all other values (objects, arrays, functions), a reassignment will not affect the original value.
  However, if you modify such an argument (e.g. add a key to an object), that also modifies the original value that was passed in.

By default, all parameters defined in the function declaration are optional in JavaScript.
If you provide fewer arguments than there are parameters, the missing arguments will be `undefined` inside the function, see [Null and Undefined][concept-null-undefined].
In many cases, it makes sense to assign a more appropriate default value than `undefined`.
This can be done by specifying default parameters directly in the function definition.

```javascript
function someName(param1 = defaultValue1, param2 = defaultValue2) {
  // ...
}
```

## Return Statement

A `return` statement ends the function execution and specifies a value to be returned to the function caller. A function can have multiple `return` statements.

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

[concept-arrow-functions]: /tracks/javascript/concepts/arrow-functions
[concept-null-undefined]: /tracks/javascript/concepts/null-undefined
[concept-objects]: /tracks/javascript/concepts/objects
[concept-arrays]: /tracks/javascript/concepts/arrays
[concept-callbacks]: /tracks/javascript/concepts/callbacks
[mdn-primitives]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
