# Introduction

## While Loops

With a while loop, you can execute code repeatably as long as a certain condition is fulfilled.
It is written with the `while` keyword followed by a condition wrapped in round brackets and a code block that contains the _body_ of the loop wrapped in curly brackets.

```javascript
while (condition) {
  // code that is executed repeatedly as long as the condition is true
}
```

JavaScript also has a do-while loop.
Here the condition is checked after the loop body was executed.
This is useful when the condition depends on evaluations done in the body.

```javascript
do {
  // The code here will always be executed once and then
  // repeatedly while the condition is true.
} while (condition);
```

Inside a loop body, you can use the `break` keyword to stop the execution of the loop entirely.
In contrast to this, the keyword `continue` only stops the execution of the current iteration and continues with the next one.
With `continue` you can often avoid wrapping big parts of the loop body in an if-statement.

```javascript
let i = 0;

while (i < 100) {
  i = i + 2;

  if (i % 3 === 0) {
    continue;
  }

  // The code here will only be executed when i was not divisible
  // by 3 in the check above.
}
```

## Switch Statements

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

The `break` statements above are needed because by default all cases are "fallthrough" in JavaScript.
That means without any `break` statement all the code in the cases below the first matching option would be executed even though `x` did not match those options.
This "fallthrough by default" behavior is a common pitfall when using `switch` in JavaScript.
Inside a function, `return` can also be used instead of `break` to avoid this problem.

[concept-comparison]: /tracks/javascript/concepts/comparison
