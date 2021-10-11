# Introduction

In JavaScript the global method `String` has been missing some of the features that can be found in other languages when it comes to substitution. In es6, the `[Template strings]`[template-string] has introduced functionality for substitution in a semantic way.

```javascript
let num1 = 1;
let num2 = 2;

`Adding ${num1} and ${num2} gives ${num1 + num2}`;
// => Adding 1 and 2 gives 3
```

In the example above, backticks - ````- are used to represent a template string. The`${...}` is the placeholder that is used for substitution.
All types of expressions can be used with template strings.

```javascript
let track = 'JavaScript';

`This track on exercism.io is ${track.toUpperCase()}`;
```
