# About

you can create template strings in javascript by wrapping text in backticks.
they not only allow the text to include new lines and other special characters, you can also embed variables and other expressions.

```javascript
const num1 = 1;
const num2 = 2;

`Adding ${num1} and ${num2} gives ${num1 + num2}.`;
// => Adding 1 and 2 gives 3.
```

In the example above, backticks - (<code>``</code>)- are used to represent a template string. The`${...}` is the placeholder that is used for substitution.
All types of expressions can be used with template strings.

```javascript
const track = 'JavaScript';

`This track on exercism.io is ${track.toUpperCase()}.`;
// => This track on exercism.io is JAVASCRIPT.
```

When you are needing to have strings formatted on multiple lines:

```javascript
`This is example of using template
strings to accomplish multiple
lines`;
```

To implement logic into template string syntax:

```javascript
const grade = 95;

`You have ${grade > 90 ? 'passed' : 'failed'} the exam.`;
// => You have passed the exam.
```
