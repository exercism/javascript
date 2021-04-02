# About

Strings are useful for holding data that can be represented in text form.
There are two ways to access an individual character in a string.

The first is the `charAt()` method:

```javascript
'cat'.charAt(1);
// => "a"
```

The other way is to treat a `string` as a list of characters, where individual characters correspond to a numerical index (starts at zero):

```javascript
'cat'[1];
// => "a"
```

Some of the most-used operations on strings are to check their `length` and to concatenate them using the `+` string operators.

```javascript
'cat'.length;
// => 3

'I like' + ' ' + 'cats';
// => "I like cats"
```

You can find all the methods in the [MDN docs][mdn-docs].

## String interpolation

Strings in JavaScript support concatenation using [`+` and slight variations][https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#long_literal_strings] and interpolation using [string template literals][mdn-template-strings].

```javascript
const NUMBER_OF_CATS = 4;
const concatenation = 'I have ' + NUMBER_OF_CATS + ' cats';
// => "I have 4 cats"

const interpolation = `I have ${NUMBER_OF_CATS} cats`;
// => I have 4 cats
```

[mdn-docs]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Instance_methods
[mdn-template-strings]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
[mdn-concatenation]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#long_literal_strings
