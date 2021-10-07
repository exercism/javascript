# Introduction

An arrow function is a less verbose usage of function syntax.
There are differences in the way that an arrow function works, such
as _this_ binding, and that will be covered in other concepts. This
introduction will focus on the syntax used for an arrow function.

Here is a comparison between a function declaration and an arrow
function. As we continue down, we will continue to compare differences
for reference.

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
// function expression
const addUpTwoNumbers = function (num1, num2) {
  return num1 + num2;
};

// arrow function
const addUpTwoNumbers = (num1, num2) => num1 + num2; // braces - {} - and return removed
```

If there are multiple statements in the body of the function, the braces
would be used along with the `return` keyword:

```javascript
const addUpTwoNumbers = (num1, num2) => {
  const extraStatement = 3;
  return num1 + num2 + 3;
};
```

When returning only an object from an arrow function, the syntax can
be reduced like so:

```javascript
// explicit return of object
const addUpTwoNumbers = (num1, num2) => {
  return {
    num1,
    num2,
  };
};

// implicit return of object
const addUpTwoNumbers = (num1, num2) => ({ num1, num2 });
```

The use of parenthesis around parameters depends on the number of parameters:

<!-- prettier-ignore-start -->
```javascript
// one parameter does not need parenthesis
const addUpTwoNumbers = num1 => num1;

// two or more parameters need to be wrapped in parenthesis
const addUpTwoNumbers = (num1, num2) => num1 + num2;
```
<!-- prettier-ignore-end -->

Other concepts that are taught such as [Rest][concept-rest] and
[Destructuring][concept-destructure] can be used with an arrow function.

[concept-rest]: /tracks/javascript/concepts/rest-and-spread
[concept-destructure]: /tracks/javascript/concepts/array-destructuring
