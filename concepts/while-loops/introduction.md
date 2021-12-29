# Introduction

With a while loop you can execute code repeatably as long as a certain condition is fulfilled.
It is written with the `while` keyword followed by a condition wrapped in round brackets and a code block that contains the _body_ of the loop wrapped in curly brackets.

```javascript
while (condition) {
  // code that is executed repeatedly as long as the condition is true
}
```

JavaScript also has a do-while loop.
Here the condition is checked after the loop body was executed.
This is useful when the condition depends on the outcome of the code in the body.

```javascript
do {
  // The code here will always be executed once and then
  // repeatedly while the condition is true.
} while (condition);
```

Inside a loop body you can use the `break` keyword to stop the execution of the loop entirely.
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
