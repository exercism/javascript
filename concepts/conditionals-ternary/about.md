# About

The conditional ternary operator is used to write a condensed expression that returns one of two alternate values based on some condition.
It is often referred to as the "ternary operator".
The name stems from the fact that the operator has three operands: `predicate ? consequent-expression : alternative-expression`
It can be used as a replacement for short if-else statements.

Similar to `if` statements, JavaScript will perform implicit type conversion to evaluate the condition.
If the condition is truthy, the operand on the left-hand side of the colon will be returned.
Otherwise the result of the ternary expression is the operand on the right-hand side of the colon.

```javascript
const year = 2020;

year > 2000 ? 'in the past years' : 'a long time ago';
// => 'in the past years'
```
