# Introduction

A function allows to group code into a reusable unit.
There are multiple ways to define functions in JavaScript.
Here we will look at function declarations and function expressions.
Other possibilities like [arrow functions][concept-arrow-functions] will be covered in other concepts.

## Function Declaration

The standard way of defining a function in JavaScript is a function declaration, also called function definition or function statement.

It consist of the `function` keyword, the name of the function and a comma-separated list of parameters in round brackets. This is followed by the function body (the code that should be executed) wrapped in curly brackets.

```javascript
function someName(param1, param2, param3) {
  // ...
}
```

## Using a Function

In JavaScript a function is invoked (called) by stating the function name followed by round brackets that contain the arguments.

```javascript
someName(arg1, arg2, arg3);
```

Just stating the function name does **not** call the function in JavaScript.

```javascript
function sayHello() {
  console.log('Hello World!');
}

sayHello;
// => [Function: sayHello]

sayHello();
// => 'Hello World!'
```

## Parameters and Arguments

TODO Pass by value vs. pass by reference
In JavaScript, all values of primitive type

By default, all parameters defined in the function declaration are optional in JavaScript.
If you provide less arguments than there are parameters, the missing arguments will be `undefined` inside the function, see [Null and Undefined][concept-null-undefined].
You can even call a function with more arguments than there were parameters in the definition.
Then the excess arguments are accessible via the arguments array (see details below).

It is also possible to define functions that accept an arbitrary number of arguments (variadic functions), see [Rest and Spread Operators][concept-rest-and-spread] for details about this.

### Default Parameters

TODO continue here

### Arguments Array

## Return

TODO continue here

- only return 1 value
- many returns allowed
- what if naked return or no return
- how to return multiple things?

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

TODO "one-off"

## Scope

- what is declared inside only visible inside
- what is outside is also visible
- inner takes precendence over the outer one but shadowing should be avoided

hoisting
IIFE
Pitfall new line after return?
Advice on naming?
one function, one action?
avoid massive functions
very short function names like \_

[concept-arrow-functions]: /tracks/javascript/concepts/arrow-functions
[concept-null-undefined]: /tracks/javascript/concepts/null-undefined
[concept-rest-and-spread]: /tracks/javascript/concepts/rest-and-spread
[concept-objects]: /tracks/javascript/concepts/objects
[concept-callbacks]: /tracks/javascript/concepts/callbacks
