# About

In JavaScript, _template strings_ allows for embedding expressions in strings, also referred to as string interpolation.
This functionality extends the functionality of the build in [`String`][string-reference] global object.

You can create template strings in javascript by wrapping text in backticks.
They not only allow the text to include new lines and other special characters, you can also embed variables and other expressions.

```javascript
const num1 = 1;
const num2 = 2;

`Adding ${num1} and ${num2} gives ${num1 + num2}.`;
// => Adding 1 and 2 gives 3.
```

In the example above, backticks - (<code>\`\`</code>) - are used to represent a template string. The`${...}` is the placeholder that is used for substitution.
Any non-string types are _implicitly_ converted to strings.
This topic is covered in the [type conversion][type-conversion-concept] concept.
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

[string-reference]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[type-conversion-concept]: /tracks/javascript/concepts/type-conversion
