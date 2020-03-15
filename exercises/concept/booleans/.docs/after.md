Javascript uses `true` and `false` to represent the two truth values of logic. 

In Javascript, for each of the three logical operations (AND, OR and NOT) there is a corresponding operator: `&&`, `||` and `!`. In general, there are rules regarding the order of the operations, and in this case the `!` (negation) is applied first, than the `&&` (conjunction) and than the `||` (disjunction). 

You can always 'escape' these rules by using an operator with an even higher precedence, namely, `( )` named the 'Grouping operator' or simply said 'parenthesis'. As a matter of fact the `( )` operator has the highest precedence of all Javascript operators. More information about operators precedence [here].

[here]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
