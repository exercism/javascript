# Introduction

The [conditional ternary operator][conditional-ternary-operator] is for working with conditions based on the condition being truthy or falsy.
The operator can be used in place of `if/else if/else`.

```javascript
const year = 2000;

year > 2000 ? true : false;
// => true
```

There are 3 parts that make up the operator: `predicate ? consequent-expression : alternative-expression`
