JavaScript uses `true` and `false` to represent the two truth values of logic.

In JavaScript, for each of the three logical operations (AND, OR and NOT) there is a corresponding operator: `&&`, `||` and `!`. In general, there are rules regarding the order of the operations and, in this case, `!` (negation) is applied first, and then `&&` (conjunction) and then `||` (disjunction).

You can always 'escape' these rules by using an operator with an even higher precedence, namely, `( )` named the 'Grouping operator' or simply said 'parentheses'. As a matter of fact the `( )` operator has the highest precedence of all JavaScript operators. More information about operators precedence [here].

[here]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
