# Introduction

The for loop is one of the most commonly used statements to repeatedly execute some logic.
In JavaScript it consists of the `for` keyword, a header wrapped in round brackets and a code block that contains the body of the loop wrapped in curly brackets.

```javascript
for (initialization; condition; step) {
  // code that is executed repeatedly as long as the condition is true
}
```

The initialization usually sets up a loop counter, the condition checks whether the execution should be continued or stopped and the step increments the counter.
The individual parts of the header are separated by semicolons.

```javascript
const list = ['a', 'b', 'c'];
for (let i = 0; i < list.length; i++) {
  // code that should be executed for each item in the array
}
```
