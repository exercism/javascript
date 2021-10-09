# About

Besides function declarations and function expressions, JavaScript also has another very concise syntax for defining a function.
These functions are called _arrow functions_.

In this concept will focus on the syntax used to write an arrow function.
There are differences in the way that an arrow function works, such as _this_ binding, that will be covered in other concepts.

Here is a comparison between a function declaration and an arrow function.

```javascript
function addUpTwoNumbers(num1, num2) {
  return num1 + num2;
}

// function keyword removed and => added
const addUpTwoNumbers = (num1, num2) => {
  return num1 + num2;
};
```

Above, you will see that the arrow function syntax:

1. removes the keyword `function`
2. has declared the identifier `addUpTwoNumbers` as a `const`
3. adds a fat arrow `=>`

If the function body contains only a return statement, like in the example above, the `{}` and the `return` keyword can be omitted.

<!-- prettier-ignore-start -->
```javascript
const addUpTwoNumbers = (num1, num2) => { return num1 + num2 };

// can be shortened to
const addUpTwoNumbers = (num1, num2) => num1 + num2;
// braces {} and return removed
```
<!-- prettier-ignore-end -->

In the special case of only returning an object from an arrow function, parenthesis are needed around the object to be able to omit the return statement.

```javascript
// explicit return of object
const addUpTwoNumbers = (num1, num2) => {
  return { num1, num2 };
};

// implicit return of object
const addUpTwoNumbers = (num1, num2) => ({ num1, num2 });
```

The use of parenthesis around parameters depends on the number of parameters.

<!-- prettier-ignore-start -->
```javascript
// one parameter does not need parenthesis
const square = num => num * num;

// two or more parameters need to be wrapped in parenthesis
const addUpTwoNumbers = (num1, num2) => num1 + num2;
```
<!-- prettier-ignore-end -->

Other concepts such as [Rest Parameters][concept-rest] and [Destructuring][concept-destructure] can also be used with an arrow function.

[concept-rest]: /tracks/javascript/concepts/rest-and-spread
[concept-destructure]: /tracks/javascript/concepts/array-destructuring
