# Introduction

A function allows to group code into a reusable unit.
There are multiple ways to define functions in JavaScript.
Here we will look at _function declarations_ and _function expressions_..
Other possibilities like [arrow functions][concept-arrow-functions] will be covered in other concepts.

## Function Declaration

The standard way of defining a function in JavaScript is a _function declaration_, also called _function definition_ or _function statement_.

It consists of the `function` keyword, the name of the function, and a comma-separated list of parameters in round brackets.
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

When working with parameters inside the function body, be aware of possible side effects.

- Values of [primitive data types][mdn-primitives] are _immutable_.
  The original value is never affected by what happens to the argument in the function body.
- For all other values (objects, arrays, functions), a reassignment will not affect the original value.
  However, if you modify such an argument (e.g. add a key to an object), that also modifies the original value that was passed in.

By default, all parameters defined in the function declaration are optional in JavaScript.
If you provide less arguments than there are parameters, the missing arguments will be `undefined` inside the function, see [Null and Undefined][concept-null-undefined].
In many cases it makes sense to assign a more appropriate default value than `undefined`.
This can by done by specifying default parameters directly in the function definition.

```javascript
function someName(param1 = defaultValue1, param2 = defaultValue2) {
  // ...
}
```

## Return Statement

Using the `return` statement, you can pass the result of a function to the code that called it.
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
[concept-arrays]: /tracks/javascript/concepts/arrays
[concept-callbacks]: /tracks/javascript/concepts/callbacks
[mdn-primitives]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive


## Naming A Function

Naming a function is as important as writing codes. A function name is important to be clear and precise. Consider the following recommendations when you name your function. 

- Choose meaningful words. When you name your function, you should be clear on what it does. On Function name `get(studentId, subject)`, you can't tell what it is geting mark for or what it is getting or whether it is getting Studnet name or Age or their marks. Function `getStudentGrade(studentId, subject)` told you everything you need to know about what it does. It will return the student grade
- Don't make the name too short or too long. It is good to be clear and precise but take care not to make too long name. No one like a name too long.  The longer the name is, the harder it get to remember and the more space it take on the computer screen. `checkStudentFailOrPassOrMeritOrDistinction(mark)` is an example of a unneccessarily long function name.
- Use the name that everyone understand. Your function name should be understandable by everyone who read your code. For example, don't use `DeathStar()` when you write delete item function. Use `deleteItem()` instead.
- Pick one word per one concept and stick with it. For example, if you named `getStudentName()`, don't change `get` to `retrieve` like `retrieveStudentGrade()` when naming another function. 
- Avoid using the same word for two purposes. For example, don't keep using `add` when you want to put a group of items to a collection. Use `insert` or `append` instead.
