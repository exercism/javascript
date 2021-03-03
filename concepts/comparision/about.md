# About

In JavaScript numbers can be compared using the following operators.

| Comparison             | Operator  |
| ---------------------- | --------- |
| Greater than           | `a > b`   |
| Greater than or equals | `a >= b`  |
| Less than              | `a < b`   |
| Less than or equals    | `a <= b`  |
| (Strict) Equals        | `a === b` |
| Not (strict) equals    | `a !== b` |

Note the three (!) equal signs for checking equality. There is also `==` (loose equals) in JavaScript which you will learn about later.

The result of the comparison is always a boolean value, so either `true` or `false`.

```javascript
1 < 3
// => true

2 !== 2
// => false
```

The comparison operators can also be used to compare strings. In that case a dictionary ([lexicographical][lexicographical-on-wikipedia] order is applied and a lowercase letter is greater than its uppercase version.

```javascript
"Apple" > "Pear"
// => false

"a" < "above"
// => true

"a" === "A"
// => false
```

In theory you can also ask JavaScript to compare values of different types (e.g., `"1" < 2`) and it will try its best (do some conversions) to figure out whether the result is true or false. In practice this is not a good idea because it is very hard to predict what the result will be. You will learn later how to do type conversion. With that you can then ensure values have the correct type before performing the comparison.


[lexicographical-on-wikipedia]: https://en.wikipedia.org/wiki/Lexicographic_order

TODO operator presedence