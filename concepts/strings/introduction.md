# Introduction

A _string_ is the JavaScript data type to store text data.

## Creating a String

You create a string by wrapping the text in single quotes or double quotes.
On Exercism, single quotes are used.

<!-- prettier-ignore-start -->
```javascript
'Hello, World!'
"Hello, World!"
```
<!-- prettier-ignore-end -->

## Strings as Lists of Characters

A string can be treated as a list of characters where the first character has index `0`.
You can access an individual character of the string using square brackets and the index of the letter you want to retrieve.

```javascript
'cat'[1];
// => 'a'
```

You can determine the number of characters in a string by accessing the `length` property.

```javascript
'cat'.length;
// => 3
```

## Concatenation and Methods

The simplest way to concatenate strings is to use the addition operator `+`.

```javascript
'I like' + ' ' + 'cats.';
// => "I like cats."
```

Strings provide a lot of helper methods, see [MDN Docs on String Methods][mdn-string-methods] for a full list.
The following list shows some commonly used helpers.

- [`toUpperCase`][mdn-to-upper-case] and [`toLowerCase`][mdn-to-lower-case] - change the case of all characters
- [`trim`][mdn-trim] - remove whitespace at the beginning and end
- [`includes`][mdn-includes], [`startsWith`][mdn-starts-with] and [`endsWith`][mdn-ends-with] - determine whether another string is part of the given string
- [`slice`][mdn-slice] - extract a section of the string

Strings are immutable in JavaScript. So a "modification", e.g. by some of the methods above, will always create a new string instead.

[mdn-string-methods]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Instance_methods
[mdn-to-upper-case]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
[mdn-to-lower-case]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
[mdn-trim]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
[mdn-slice]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
[mdn-includes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
[mdn-starts-with]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
[mdn-ends-with]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
