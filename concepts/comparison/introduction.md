# Introduction

## Comparing Numbers

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
1 < 3;
// => true

2 !== 2;
// => false

1 === 1.0;
// => true
// All numbers are floating-points, so this is different syntax for
// the exact same value.
```

## Comparing Strings

In JavaScript, the comparison operators above can also be used to compare strings.
In that case, a dictionary (lexicographical) order is applied.
You can find a list of the exact order of all the characters [here][utf-16-list].

```javascript
'Apple' > 'Pear';
// => false

'a' < 'above';
// => true

'a' === 'A';
// => false
```

## Strict Equality

You might wonder about the three equal signs for checking equality in JavaScript.
`===` represents the check for _strict equality_ which means that no type conversion is performed and values of different types are always unequal.

```javascript
'3' === 3;
// => false
// The value on the left has type string, the value on the right has type number.

1 === 1n;
// => false
// The value on the left has type number, the value on the right has type bigint.
```

Using `===` and `!==` is the recommended way of checking equality in JavaScript.

There is also `==` and `!=` which represents checking for _loose equality_.
You should avoid it because it will apply implicit type conversion before performing the comparison.
The outcomes in these cases are hard to predict and sometimes not what you would expect.

```javascript
0 == false;
// => true
```

[utf-16-list]: https://www.fileformat.info/info/charset/UTF-16/list.htm
