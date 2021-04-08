# About

## General Syntax

With a while loop you can execute code repeatably as long as a certain condition is fulfilled.

It is written with the `while` keyword followed by a condition wrapped in round brackets and a code block that contains the _body_ of the loop wrapped in curly brackets.

```javascript
while (condition) {
  // code that is executed repeatedly as long as the condition is true
}
```

JavaScript also has a do-while loop.
Here the condition is evaluated after the loop body was executed.
This is useful when the condition depends on the outcome of the code in the body.

```javascript
do {
  // the code here will always be executed once and then repeatedly
  // if the condition is true after the last iteration
} while (condition);
```

## Break

Inside a loop body you can use the `break` keyword to stop the execution of the loop entirely.
This is often used in combination with `true` as condition.
With that, you can control when the loop should stop from any place inside the loop body.

```javascript
const winningNumber = 7;

while (true) {
  const num = readUserGuess();
  if (num === winningNumber) break;
}
```

The `break` keyword cannot be used inside a function that is nested in the loop, see the [MDN documentation][mdn-break-in-function] for an example.

## Continue

In contrast to `break`, the keyword `continue` only stops the execution of the current iteration and continues with the next one.
With `continue` you can often avoid wrapping big parts of the loop body in an if-statement.

```javascript
let i = 0;

while (i < 100) {
  i = i + 2;

  if (i % 3 === 0) continue;

  // the code here will only executed
  // when i was not divisible by 3 in the check above
}
```

## Infinite Loops

A loop that is (theoretically) repeated forever is created when the loop condition is always fulfilled and no break or return statement is reached in the loop body.
The execution has to be terminated from the outside.
Depending on the environment in which such code runs, this will be done automatically or needs a manual intervention.

```javascript
let i = 0;

while (i < 100) {
  if (i % 3 === 0) continue;

  i = i + 2;
}

// this loop runs forever since i does not change anymore
// after it is divisible by 3 the first time
```

Spotting infinite loops might seem trivial in this toy example but is not always that easy with more complex code.
It is good practice to thoroughly think about whether your condition eventually becomes false or whether your break or return statement is actually reached.

[mdn-break-in-function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break#break_within_functions
