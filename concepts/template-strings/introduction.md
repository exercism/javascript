# Introduction

In JavaScript, _template strings_ allows for embedding expressions in strings, also referred to as string interpolation.
This functionality extends the functionality of the built-in [`String`][string-reference] global object.

You can create template strings in JavaScript by wrapping text in backticks.
They not only allow the text to include new lines and other special characters, but you can also embed variables and other expressions.

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

`This track on exercism.org is ${track.toUpperCase()}.`;
// => This track on exercism.org is JAVASCRIPT.
```

When you are needing to have strings formatted on multiple lines:

```javascript
`This is an example of using template
strings to accomplish multiple
lines`;

/* => This is an example of using template
     strings to accomplish multiple
     lines
*/
```

If you want to represent a newline inside a regular string instead of using a template string (ie. not using backticks), you can use the newline escape sequence `\n`:

````javascript
"This is an example of using the newline escape sequence!\nWithout backticks"

/* => This is an example of using the newline escape sequence!
      Without backticks
*/

With the available substitution capabilities, you can also introduce logic into the process to determine what the output string should be.
One way to handle the logic could be using the [ternary operator][ternary-operator].
This gives the same conditional `if/else` functionality in a slightly different format.

To implement logic into template string syntax:

```javascript
const grade = 95;

`You have ${grade > 90 ? 'passed' : 'failed'} the exam.`;
// => You have passed the exam.
````

[string-reference]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[type-conversion-concept]: /tracks/javascript/concepts/type-conversion
[ternary-operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
