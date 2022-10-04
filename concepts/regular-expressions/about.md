# About

## Regular Expressions in JavaScript

A [Regular Expression][mdn-regular-expressions] (or Regex) is a sequence of characters that we can use to target and manipulate certain elements in strings. Hence, we can:

- **Search** for a text in a string
- **Replace** substrings in a string
- **Extract** information from a string

This concept is focused on using regular expressions in JavaScript. If you want to learn about how to write regular expressions, [Eloquent JavaScript][eloquent-javascript] might be a good resource.

> 💡 JavaScript's regex flavor is part of the ECMA-262 standard for the language. This means that you don't have to worry about browser-specific compatibility.

## How to create Regular Expressions

In JavaScript, a regular expressions is mostly written in the format `/pattern/modifiers` where 'pattern' is the main regex, and 'modifiers' are a series of characters which we can add to indicate special options (like superpowers).

Nevertheless, we have two ways of creating a regular expression:

1. **Regular Expression Literal**:

```javascript
const regex = /[a-z]/;
```

2. Constructor **RegExp**:

```javascript
const regex = new RegExp('[a-z]');
```

In both cases, JavaScript is creating an object out of the regex. It is recommended to use immutable patterns with the literal as default.

The RegExp constructor can be used for cases where the regex will change or we don't know it yet (like an input).

## 🏴‍☠️ Flags

Regular expressions have optional superpowers called [`flags`][mdn-flags] that allow for additional features. These flags can be used separately or together in any order, and are included as part of the regular expression.

Some of the widely used are:

- `/g` - Global Search
- `/i` - Case Insensitive
- `/m` - Multiline Search

Here is a simple example:

```javascript
const re = /home/gi;
const str = 'Home, sweet home.';

str.match(re);

// => ["Home", "home"]
```

The `g` character allows us to parse all possible matches within a string. Without this feature, JavaScript would have extracted only the first `Home` match.

The Case Insensitive flag `/i` enables us to be flexible when it comes to finding a pattern. This way it doesn't matter if what we are looking for is in `UPPERCASE` or `lowercase`.

When using the `RegExp` constructor, the syntax of adding flags is different. In this case, we just need to pass the flags as a second argument.

## Commonly used functions

When regular expressions are combined with current build-in functions in JavaScript, we have some powerful ways of manipulating and getting data from strings.

The `test()` method is a great way of searching and knowing if a target value exists within a given string. In this way, it returns a boolean value, `true` or `false`.

The `match()` method extracts the regular expression match from a given string. Returning an array with information and matches.

_When to use one or the other?_ Use the `test()` when you want a fast way of checking a value within a string, use `match()` if you need to use that value or want more information about the match.

### Test

The [test()][mdn-regex-test]] method executes a search for a match between a regular expression and a specified string. Returns true or false.

```javascript
const str = 'It is difficult to test if you have a virus';
const result = /virus$/.test(str);

console.log(result);

// => true
```

### Match

Okey but, what if we want to get the actual values of the regular expression search?

Instead of returning just a boolean, with the [match()][mdn-regex-match] method, we get a useful array whose contents depend on the presence or absence of the found matches.

In this way, we are able both to **search** and to **extract** information from any string. For example:

```javascript
const funnyQuote =
  'If you see someone crying, ask if it is because of their haircut.';
const regex1 = /someone/;
const regex2 = /happy/;

funnyQuote.match(regex1);
// => ["someone", index: 3, input: "If you see someone crying, ask if it is because of their haircut.", groups: undefined]

funnyQuote.match(regex2);
// => null
```

When the Global Search flag `/g` is present, instead of getting the only match alongside useful information such as the index or input, the method returns all of the occurrences present in the array:

```javascript
const funnyQuote =
  'If you see someone crying, ask if it is because of their haircut.';

const regex3 = /if/gi;

funnyQuote.match(regex3);
// => ["If", "if"];
```

### Replace

The [replace()][mdn-regex-replace] method in JavaScript allows us to search for a value within a given string, and replacing it with a desired new value.

```javascript
string.replace(searchValue, newValue);
```

The pattern for searching the substitution can be a single string, or a regular expression.

```javascript
let string = 'I like dogs!';
let result = string.replace('dogs', 'cats');

let string = 'I would love to travel to Japan';
let result = string.replace(/Japan/g, 'Hawaii');
```

Moreover, we can apply a function on the replacement position in order to make additional changes to each value.

```javascript
let text = 'Say hello to the chatbot.';
let result = text.replace(/chatbot|hello/gi, function (word) {
  return word.toUpperCase();
});
// => "Say HELLO to the CHATBOT"
```

> 💡 In the end, the combination of regular expressions and the `replace()` method is a more dynamic way of replacing elements. Using a single string may be limited.

### Split

The [split()][mdn-regex-split] method in JavaScript represents a different way of using and manipulating strings with regular expressions.

In this way, we will be using regex in order to divide a given string by recognizing a pattern, e.g. `str.split(/[,.\s]/)`. This pattern will be used as the `separator`.

```javascript
const str = 'hello,user.how are.you';

const result = str.split(/[,.\s]/);

console.log(result);
// => ['hello', 'user', 'how', 'are', 'you']
```

## Performance with Regex

Regarding performance, both of them create a RegExp object. The main difference is how often the regex is compiled:

- With `Regular Expression Literal`: one time during initial code parsing and compiling
- With `RegExp()` syntax: Every time new Object gets created.

Using literal syntax may be a better option not only because of performance, but also for simplicity and readability. For more details see [this](https://stackoverflow.com/a/32523333) Stackoverflow discussion.

1. It is shorter and doesn’t force you to think in terms of class-like constructors.
2. When using the `RegExp()` constructor, you also need to escape quotes and double-escape backslashes. It makes regular expressions that are hard to read and understand by their nature even more harder.

Nevertheless, for this particular challenge, we are practising with both methods. Hence you are able to decide which one to apply depending on the occasion.

[using-regular-expressions-in-javascript]: https://www.regular-expressions.info/javascript.html
[mdn-regex-cheatsheet]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
[mdn-regular-expressions]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[mdn-common-functions]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#using_regular_expressions_in_javascript
[mdn-flags]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags
[mdn-regex-test]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
[mdn-regex-match]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
[mdn-regex-replace]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
[mdn-regex-split]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
[demystifying-regular-expressions-with-javascript]: https://livecodestream.dev/post/demystifying-regular-expressions-with-javascript/
[how-to-use-the-js-replace-method-on-a-string]: https://www.freecodecamp.org/news/javascript-regex-match-example-how-to-use-the-js-replace-method-on-a-string/
[eloquent-javascript]: https://eloquentjavascript.net/09_regexp.html
