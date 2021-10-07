# Introduction

An arrow function is a less verbose usage of function syntax.
There are differences in the way that an arrow function works, such
as _this_ binding, and that will be covered in other concepts. This
introduction will focus on the syntax used for an arrow function.

Here is a comparison between a function declaration and an arrow
function. As we continue down, we will continue to compare differences.

```javascript
function addUpTwoNumbers(num1, num2) {
  return num1 + num2;
}

const addUpTwoNumbers = (num1, num2) => {
  // function keyword removed and => added
  return num1 + num2;
};
```

Above, you will see that the arrow function syntax:

1. removes the keyword `function`
2. has declared the identifier `addUpTwoNumbers` as a `const`
3. adds a fat arrow `=>`

Notice that there is only one statement that is in the body of the
function. When there is only one statement that is returned in the
body, the `{}` and the `return` keyword can be omitted, like so:

```javascript
const addUpTwoNumbers = (num1, num2) => num1 + num2; // braces - {} - and return removed
```

The use of parenthesis around parameters depends on the number of parameters:

```javascript
// one parameter does not need parenthesis
const addUpTwoNumbers = (num1) => num1;

// two or more parameters need to be wrapped in parenthesis
const addUpTwoNumbers = (num1, num2) => num1 + num2;
```

Other concepts that are taught such as [Rest][concept-rest] and
[Destructuring][concept-destructure] can be used with an arrow function.

[concept-rest]: /tracks/javascript/concepts/rest-and-spread
[concept-destructure]: /tracks/javascript/concepts/array-destructuring
