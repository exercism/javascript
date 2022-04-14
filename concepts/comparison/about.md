# About

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
// All numbers are floating-points, so this is different syntax
// for the exact same value.
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

You need to be careful when you compare two variables that appear to contain numeric values but are of type string.
Due to the dictionary order, the result will not be the same as comparing values of type `Number`.

```javascript
10 < 2;
// => false

'10' < '2';
// => true (because "1" comes before "2")
```

Another way to compare strings is the [localeCompare][mdn-locale-compare] method.
It allows setting a variety of [options][mdn-locale-compare-options] to adjust the way strings are compared.

## Strict Equality

You might wonder about the three equal signs for checking equality in JavaScript.
`===` represents the check for _strict equality_ which means that no type conversion is performed and values of different types are always unequal.

```javascript
'3' === 3;
// => false
// The value on the left has type string, the value on the right
// has type number.

1 === 1n;
// => false
// The value on the left has type number, the value on the right
// has type bigint.
```

Using `===` and `!==` is the recommended way of checking equality in JavaScript.

## Avoiding Implicit Type Conversion

There is also `==` and `!=` which represents checking for _loose equality_.
You should avoid it because it will apply implicit type conversion before performing the comparison.
The outcomes in these cases are hard to predict and sometimes not what you would expect.
You can read more about it [here][mdn-loose-equals].

```javascript
0 == false;
// => true
```

In theory, you can also compare values of different types (e.g., `"1" < 2`).
Then the values will be implicitly converted to determine whether the result is true or false.
Just as checking for loose equality, this is also not recommended for the same reason as mentioned above.

What should you do instead?
You can apply [explicit type conversion][concept-type-conversion].
With that, you can then ensure values have the correct type before performing the comparison.
Then your code will be easier to understand and less error-prone.

[mdn-loose-equals]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality
[concept-type-conversion]: /tracks/javascript/concepts/type-conversion
[utf-16-list]: https://www.fileformat.info/info/charset/UTF-16/list.htm
[mdn-locale-compare]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
[mdn-locale-compare-options]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#parameters
