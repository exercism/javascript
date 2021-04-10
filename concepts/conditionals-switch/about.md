# About

## General Syntax

Besides the if-statement, JavaScript also has a switch-statement to conditionally execute logic.
It is used when a single variable needs to be compared to multiple variants.
The comparison is done by checking for strict equality (`===`), see [concept comparison][concept-comparison].
For some variable `x`, the switch statement in JavaScript has the following syntax.

<!-- prettier-ignore-start -->
```javascript
switch (x) {
  case option1:
    // code that is executed when "x === option1" is true
    break;
  case option2:
    // code that is executed when "x === option2" is true
    break;
  default:
    // code that is executed when x does not equal any of the options
}
```
<!-- prettier-ignore-end -->

The `default` case is optional and used in case you want to execute some code if none of the other options match the variable.

## Fallthrough by Default

The `break` statements above are needed because by default all cases are "fallthrough" in JavaScript.
That means without any `break` statement all the code in the cases below the first matching option would be executed even though `x` did not match those options.
This "fallthrough by default" behavior is a common pitfall when using `switch` in JavaScript.
Inside a function, `return` can also be used instead of `break` to avoid this problem.

You can use the fallthrough behavior to your advantage when you want to apply the same code for multiple cases.
You can find an example of this in the [MDN documentation][mdn-group-cases].

## Using Expressions

Instead of a variable `x`, you can also use an expression.
That expression is evaluated once at the beginning of the switch statement and the result compared against the cases.
A common use of this is a "type switch" that executes different code depending on the type of a variable.

<!-- prettier-ignore-start -->
```javascript
switch (typeof x) {
  case 'string':
    // code that is executed when x is a string
    break;
  case 'number':
    // code that is executed when x is a number
    break;
  default:
    // code that is executed when x has some other type
}
```
<!-- prettier-ignore-end -->

The options can be expressions as well.

[concept-comparison]: /tracks/javascript/concepts/comparison
[mdn-group-cases]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#methods_for_multi-criteria_case
