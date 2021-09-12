# About

A _string_ is the JavaScript data type to store text data.
There is no separate data type for an individual character.

## Creating a String

You create a string [literal][literal] by wrapping the text in single quotes or double quotes. On Exercism, single quotes are used.

<!-- prettier-ignore-start -->
```javascript
'Hello, World!'
"Hello, World!"
```
<!-- prettier-ignore-end -->

Some special characters of the text need to be prefixed with a backslash `\`, see [escape sequences on MDN][mdn-escape-sequences].

<!-- prettier-ignore-start -->
```javascript
const text = 'I\'m having fun.\nWhat about you?';
console.log(text);
// => I'm having fun.
// => What about you?
```
<!-- prettier-ignore-end -->

Besides single and double quotes, you can also create a string by wrapping the text in backticks. This syntax allows to include quotes and even new lines without the need to escape them. It also allows to embed expressions, see [Template Strings][mdn-template-strings] for more details.

```javascript
`A multi-line string
with 'single quotes'
and "double quotes"`;
```

## Strings as Lists of Characters

A string can be treated as a list of characters where the first character has index `0`.
You can access an individual character of the string using square brackets and the index of the letter you want to retrieve. Alternatively, there is also the `charAt` method.

```javascript
'cat'[1];
// => 'a'

'cat'.charAt(2);
// => 't'
```

You can determine the number of characters in a string `a` with `a.length`.

## Concatenation and Methods

The simplest way to concatenate strings is to use the addition operator `+`.

```javascript
'I like' + ' ' + 'cats.';
// => "I like cats."
```

Strings provide a lot of helper methods, see [MDN Docs on String Methods][mdn-string-methods] for a full list. The following list shows some commonly used helpers.

- [`toUpperCase`][mdn-to-upper-case] and [`toLowerCase`][mdn-to-lower-case] - change the case of all characters
- [`trim`][mdn-trim] - remove whitespace at the beginning and end
- [`includes`][mdn-includes], [`startsWith`][mdn-starts-with] and [`endsWith`][mdn-ends-with] - determine whether another string is part of the given string
- [`slice`][mdn-slice] - extract a section of the string

## Strings are Immutable

Applying the methods above will never change the original string. Instead a new string will be created and returned. Strings (and other primitive data types) are immutable in JavaScript. That also means you cannot assign a different character at some index using the bracket syntax shown above (like you would in arrays).

```javascript
const str = 'cat';
str[1] = 'u'; // fails silently
console.log(str);
// => 'cat'
```

[literal]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#literals
[mdn-escape-sequences]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_sequences
[mdn-template-strings]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
[mdn-string-methods]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Instance_methods
[mdn-to-upper-case]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
[mdn-to-lower-case]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
[mdn-trim]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
[mdn-slice]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
[mdn-includes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
[mdn-starts-with]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
[mdn-ends-with]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
