# Introduction

A function allows to group code into a reusable unit.
There are multiple ways to define functions in JavaScript.
Here we will look at function declarations and function expressions.
Other possibilities like [arrow functions][concept-arrow-functions] will be covered in other concepts.

## Function Declaration

The standard way of defining a function in JavaScript is a function declaration, also called function definition or function statement.

It consists of the `function` keyword, the name of the function and a comma-separated list of parameters in round brackets.
This is followed by the function body (the code that should be executed) wrapped in curly brackets.

```javascript
function someName(param1, param2, param3) {
  // ...
}
```

In JavaScript a function is invoked (called) by stating the function name followed by round brackets that contain the arguments.

```javascript
someName(arg1, arg2, arg3);
```

## Parameters

When working with parameters inside the function body, be aware of possible effects to the original value that was passed to the function.
In JavaScript, the behavior depends on the data type of the argument.

- All values that have primitive data types ([full list here][mdn-primitives]) are immutable in JavaScript, so if used as arguments they are _passed by value_.
  That means you are dealing with a copy of the original value in the function body and you can modify it without affecting the original value.
- All other values (objects, arrays, functions) are _passed by reference_.
  If you modify arguments of non-primitive types, you are changing the original value outside of the function because the argument represents a reference to the original value, not a copy of that value.

By default, all parameters defined in the function declaration are optional in JavaScript.
If you provide less arguments than there are parameters, the missing arguments will be `undefined` inside the function, see [Null and Undefined][concept-null-undefined].
In many cases it makes sense to assign a more appropriate default value than `undefined`. This can by done by specifying default parameters directly in the function definition.

```javascript
function someName(param1 = defaultValue1, param2 = defaultValue2) {
  // ...
}
```

## Return Statement

Using the `return` statement, you can pass the result of a function to code that called it.
There can be multiple `return` statements in a function.
The execution of the function ends as soon as it hits one of those `return`s.

```javascript
function checkNumber(num) {
  if (num === 0) {
    return 'You passed 0, please provide another number.';
  }

  return 'Thanks for passing such a nice number.';
}
```

If you use a naked return or no return at all, the result of the function is `undefined`.
There are no implicit returns in JavaScript.

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
If you want to pass more information, you need to combine it into one entity first, usually into an [object][concept-objects].

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
  //...
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
[concept-callbacks]: /tracks/javascript/concepts/callbacks
[mdn-primitives]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
