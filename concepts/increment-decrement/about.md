# About

JavaScript has an increment and a decrement operator.
`++` adds one to a number, `--` subtracts one from a number.

```javascript
let i = 3;
i++;
// i is now 4

let j = 0;
j--;
// j is now -1
```

The example above shows the postfix increment/decrement operator.
In this case the operator is placed after the variable and the return value of the expression is the value of the variable _before_ the increase/decrease.

```javascript
let a = 3;
let b = a++;
// a = 4
// b = 3
```

There is also the prefix variant where the operator is placed before the variable.
Then the return value is the value of the variable _after_ the increase/decrease.

```javascript
let a = 3;
let b = ++a;
// a = 4
// b = 4
```
