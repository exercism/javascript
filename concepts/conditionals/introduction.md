# Introduction

The most commonly used way to conditionally execute logic in JavaScript is the If-statement. It consists of the `if` keyword, a condition wrapped in round brackets and a code block wrapped in curly brackets. The code block will only be executed if the condition evaluates to `true`.

```javascript
if(condition) {
    // code that is executed if "condition" is true
}
```

It can be used stand-alone or combined with the `else` keyword.

```javascript
if(condition) {
    // code that is executed if "condition" is true
} else {
    // code that is executed otherwise
}
```

To nest another condition into the `else` statement you can use `else if`.

```javascript
if(condition1) {
    // code that is executed if "condition1" is true
} else if (condition2) {
    // code that is executed if "condition2" is true
    // but "condition1" was false
} else {
    // code that is executed otherwise
}
```

The condition can just be a [boolean][concept-booleans] variable but often times some comparison is done...

```javascript
if(num >= 0) {
    // ...
}
```

... and/or [logical operators][concept-logical-operators] are used.

```javascript
const isPositive = num >= 0;
const isSmall = num < 1;
if(isPositive && isSmall) {
    // ...
}
```

[concept-booleans]: /tracks/javascript/concepts/booleans
[concept-logical-operators]: /tracks/javascript/concepts/logical-operators