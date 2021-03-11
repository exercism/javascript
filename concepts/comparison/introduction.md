# Introduction

In JavaScript numbers can be compared using the following relational and equality operators.

| Comparison             | Operator  |
| ---------------------- | --------- |
| Greater than           | `a > b`   |
| Greater than or equals | `a >= b`  |
| Less than              | `a < b`   |
| Less than or equals    | `a <= b`  |
| (Strict) Equals        | `a === b` |
| Not (strict) equals    | `a !== b` |

The result of the comparison is always a boolean value, so either `true` or `false`.

```javascript
1 < 3
// => true

2 !== 2
// => false
```

In JavaScript the comparison operators can also be used to compare strings. In that case a dictionary (lexicographical) order is applied. You can find a list of the exact order of all the characters [here][UTF-16-list].

```javascript
"Apple" > "Pear"
// => false

"a" < "above"
// => true

"a" === "A"
// => false
```

You might wonder about the three equal signs for checking equality in JavaScript. `===` represents the check for _strict equality_ which means that no type conversion is performed and values of different types are always unequal.

There is also `==` which represents checking for _loose equality_. You should avoid it because it will apply implicit type conversion before performing the comparison. This leads to strange results that are difficult to reason about.

```javascript
0 == false
// => true
```

[UTF-16-list]: https://www.fileformat.info/info/charset/UTF-16/list.htm