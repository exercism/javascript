# Introduction

In JavaScript the global method `String` has been missing some of the features that can be found in other languages when it comes to substitution. In es6, the [template strings][template-strings] has introduced functionality for substitution in a semantic way.

```javascript
const num1 = 1;
const num2 = 2;

`Adding ${num1} and ${num2} gives ${num1 + num2}`;
// => Adding 1 and 2 gives 3
```

In the example above, backticks - ````- are used to represent a template string. The`${...}` is the placeholder that is used for substitution.
All types of expressions can be used with template strings.

```javascript
const track = 'JavaScript';

`This track on exercism.io is ${track.toUpperCase()}`;
// => This track on exercism.io is JAVASCRIPT
```

When you are needing to have strings formatted on multiple lines:

```javascript
`This is example of using template
strings to accomplish multiple
lines`;
```

With the substitution capabilities that are available, you can also introduce logic into the process to determine what the output string should be. One way to handle the logic could be using the [ternary operator][ternary-operator]. This gives the same conditional `if/else if/else` functionality in a slightly different format.

```javascript
const year = 2000;

year > 2000 ? true : false;
// => true
```

To implement logic into template string syntax:

```javascript
const grade = 95;

`You have ${grade > 90 ? 'passed' : 'failed'} the exam.`;
// => You have padded the exam.
```

[template-strings]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
[ternary-operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
