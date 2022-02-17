# Introduction

## 1. Regular Expressions in JavaScript

A [Regular Expression][mdn-regular-expressions] (or Regex) is a sequence of characters that we can use to target and manipulate certain elements in strings. Hence, we can: 

- **Search** for a text in a string
- **Replace** substrings in a string
- **Extract** information from a string

> 💡 JavaScript's regex flavor is part of the ECMA-262 standard for the language. This means that you don't have to worry about browser-specific compatibility. 

## 2. How to create Regular Expressions

In JavaScript, a regular expressions is mostly written in the format ``/pattern/modifiers`` where 'pattern' is the main regex, and 'modifiers' are a series of characters which we can add to indicate special options (like superpowers).

Nevertheless, we have two ways of creating a regular expression:

1. **Regular Expression Literal**: 

```javascript
const regex = /[a-z]/gi;
```

2. Constructor **RegExp**: 

```javascript
const re = new RegExp(/[a-z], 'gi'/);
``` 

In both methods, JavaScript is also creating an Object out of the regex. It is recommended to use immutable patterns with the literal, and the RegExp for those regex which are probably going to change or we don't know yet (like an input). 

## 3. 🏴‍☠️ Flags 

Regular expressions have optional superpowers called [``flags``][mdn-flags] that allow for additional features. These flags can be used separately or together in any order, and are included as part of the regular expression.

Some of the widely used are:

- ``/g`` - Global Search
- ``/i`` - Case Insensitive
- ``/m`` - Multiline Search 

Here is a simple example:

```javascript
const re = /home/gi;
const str = 'Home, sweet home.';
const myArray = str.match(re);
console.log(myArray);

=> // ["Home", "home"]
``` 

The ``g`` character allows us to parse all possible matches within a string. Without this feature, JavaScript would have extracted only the first ``Home`` match. 

The Case Insensitive flag ``/i`` enables us to be flexible when it comes to finding a pattern. This way it doesn't matter if what we are looking for is in ``UPPERCASE`` or ``lowercase``.

## 4. Most common Functions

When regular expressions are combined with current build-in functions in JavaScript, we have some powerful ways of manipulating and getting data from strings. 

These are some of the most common functions used alongside regex. 

### Test 

The [test()][[mdn-regex-test]] method executes a search for a match between a regular expression and a specified string. Returns true or false.

```javascript
const str = 'It is difficult to test if you have a virus';
const result = /virus$/.test(str);

console.log(result); // true
```

### Match 

Okey but, what if we want to get the actual values of the regular expression search?

Instead of returning just a boolean, with the [match()][mdn-regex-match] method, we get a useful array whose contents depend on the presence or absence of the found matches.

In this way, we are able both to **search** and to **extract** information from any string. For example:

``` javascript
const funnyQuote = 'If you see someone crying, ask if it is because of their haircut.';
const regex1 = /someone/;
const regex2 = /happy/;

funnyQuote.match(regex1); // ["someone", index: 3, input: "If you see someone crying, ask if it is because of their haircut.", groups: undefined]

funnyQuote.match(regex2); // null
```

When the Global Search flag ``/g`` is present, instead of getting the only match alongside useful information such as the index or input, the method returns all of the occurances displayed in the array: 

``` javascript
const funnyQuote = 'If you see someone crying, ask if it is because of their haircut.';

const regex3 = /if/gi;

funnyQuote.match(regex3) // ["If", "if"];
```

### Replace

The [replace()][mdn-regex-replace] method in JavaScript allows us to search for a value within a given string, and replacing it with a desired new value. 

```javascript
string.replace(searchValue, newValue)
``` 

The pattern for searching the substitution can be a single string, or a regular expression. 

```javascript
let string = "I like dogs!";
let result = string.replace("dogs", "cats");

let string = "I would love to travel to Japan";
let result = string.replace(/Japan/g, "Hawaii");
```

Moreover, we can apply a function on the replacement position in order to make additional changes to each value. 

```javascript
let text = "Say hello to the chatbot.";
let result = text.replace(/chatbot|hello/gi, function (word) {
  return word.toUpperCase();
});
// -> "Say HELLO to the CHATBOT"
``` 

> 💡 In the end, the combination of regular expressions and the ``replace()`` method is a more dynamic way of replacing elements. Using a single string may be limited. 

### Split

The [split()][mdn-regex-split] method in JavaScript represents a different way of using and manipulating strings with regular expressions. 

In this way, we will be using regex in order to divide a given string by recognizing a pattern, e.g. `str.split(/[,.\s]/)`. This pattern will be used as the ``separator``. 

```javascript
const str = 'hello,user.how are.you';

const result = str.split(/[,.\s]/);

console.log(result);
//--> ['hello', 'user', 'how', 'are', 'you']
``` 

In the last example, we said to the regex to search for all characters between the square brackets ``[a comma, dot, and whitespace]``. After this process, the ``split()`` method recognizes this pattern as the ``separator``, and divides the given string using that anchor. 

You don't have to worry about the ``/g`` flag in this case. The method does not stop on the first occurrence. However, you may want to use other flags such as ``/i`` or ``/m``.


## 5. Performance with Regex

Regarding performance, both of them create a RegExp object. The main difference is how often the regex is compiled: 

- With ``Regular Expression Literal``: one time during initial code parsing and compiling
- With ``RegExp()`` syntax: Every time new Object gets created. 

According to [this](https://stackoverflow.com/a/32523333)answer from Alexander Abakumov in StackOverflow, using literal syntax may be a better option not only because of performance, but also for simplicity and readability. 

1. It is shorter and doesn’t force you to think in terms of class-like constructors.
2. When using the ``RegExp()`` constructor, you also need to escape quotes and double-escape backslashes. It makes regular expressions that are hard to read and understand by their nature even more harder.

Nevertheless, for this particular challenge, we are practising with both methods. Hence you are able to decide which one to apply depending on the occasion. 

## 6. Useful Resources

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