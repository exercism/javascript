# About

## General Syntax

A common way to conditionally execute logic in JavaScript is the if-statement.
It consists of the `if` keyword, a condition wrapped in round brackets and a code block wrapped in curly brackets.
The code block will only be executed if the condition evaluates to `true`.

```javascript
if (condition) {
  // code that is executed if "condition" is true
}
```

It can be used stand-alone or combined with the `else` keyword.

```javascript
if (condition) {
  // code that is executed if "condition" is true
} else {
  // code that is executed otherwise
}
```

## Nested If-Statements

To nest another condition into the `else` statement you can use `else if`.
Note that there is no `elseif` keyword in JavaScript.
Instead, write `else` followed by another `if` statement.

```javascript
if (condition1) {
  // code that is executed if "condition1" is true
} else if (condition2) {
  // code that is executed if "condition2" is true
  // but "condition1" was false
} else {
  // code that is executed otherwise
}
```

Theoretically, you can nest as many additional conditions as you want.
In practice you would use a [`switch` statement](/tracks/javascript/concepts/conditionals-switch) instead in these cases.

```javascript
if (condition1) {
  // ...
} else if (condition2) {
  // ...
} else if (condition3) {
  // ...
} else if (condition4) {
  // ...
} else {
  // ...
}
```

## Condition

When constructing complex conditions, refer to the [operator precedence table][mdn-operator-precedence] to avoid unnecessary brackets.

```javascript
if (num >= 0 && num < 1) {
  // ...
}

// The inner brackets are obsolete because relational operators
// have higher precedence than logical operators.
<!-- prettier-ignore-start -->

if ((num >= 0) && (num < 1)) {
  // ...
}
<!-- prettier-ignore-end -->

```

Also, consider using additional variables to make the code more readable.

```javascript
const isPositive = num >= 0;
const isSmall = num < 1;
if (isPositive && isSmall) {
  // ...
}
```

In JavaScript, the condition does not have to be of type boolean.
If any other type than boolean is provided in a boolean context like the if-statement, JavaScript will implicitly convert the value to boolean.
Refer to the [type conversion concept][concept-type-conversion] for details on which values are _truthy_ and _falsy_, respectively.

```javascript
const num = 4;
if (num) {
  // this code block will be executed because 4 is truthy
}
```

## Short-Hand Notations

If you only want to execute one statement in the code block for `if` or `else`, it is possible in JavaScript to omit the curly brackets.

<!-- prettier-ignore-start -->
```javascript
if (condition) doSomething();

// or

if (condition)
  doSomething();
```
<!-- prettier-ignore-end -->

This is sometimes used when checking for an error condition for example.
In general, it is not recommended because it is easy to forget to add the brackets back in when adding a second statement that should depend on the same condition.

When writing functions, it is a common pattern to omit the `else` block and use an early `return` in the `if` block instead.
In many cases, this reduces _nesting_ and makes the code more readable and easier to follow.

```javascript
function checkNumber(num) {
  let message = '';

  if (num === 0) {
    message = 'You passed 0, please provide another number.';
  } else {
    message = 'Thanks for passing such a nice number.';
  }

  return message;
}

// Can also be written as ...
function checkNumber(num) {
  if (num === 0) {
    return 'You passed 0, please provide another number.';
  }

  return 'Thanks for passing such a nice number.';
}
```

[concept-type-conversion]: /tracks/javascript/concepts/type-conversion
[mdn-operator-precedence]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
