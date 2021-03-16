# Introduction

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

To nest another condition into the `else` statement you can use `else if`.

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
