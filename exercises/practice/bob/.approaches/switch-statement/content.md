# `switch` statement

```javascript
export function hey(message) {
  const speech = message.trim();
  if (speech == '') {
    return 'Fine. Be that way!';
  }

  const isQuestion = speech.endsWith('?');
  const isShout = /[A-Z]{1}/.test(speech) && speech == speech.toUpperCase();

  switch (true) {
    case isQuestion && isShout:
      return "Calm down, I know what I'm doing!";
    case isShout:
      return 'Whoa, chill out!';
    case isQuestion:
      return 'Sure.';
    default:
      return 'Whatever.';
  }
}
```

In this approach you use a [`switch`][switch] statement to test if there is a question or a shout.
The `switch` returns the right response for a question, shout, shouted question, or for not being a shout or question.

The [`String`][string] [trimEnd][trimend] method is applied to the input to eliminate any whitespace at the end of the input.
If the string has no characters left, it returns the response for saying nothing.

<!-- prettier-ignore-start -->
~~~~exercism/caution
Note that a `null` or `undefined` `String` would be different from a `String` of all whitespace.
A `null` or `undefined` `String` would raise a `TypeError` if `trimEnd` were applied to it.
~~~~
<!-- prettier-ignore-end -->

The first half of the shout condition

```javascript
/[A-Z]{1}/.test(speech);
```

is constructed from a [regular expression pattern][regex] to ensure there is at least one uppercase letter character in the `String`.
This is because the second half of the condition tests that the uppercased input is the same as the input.
If the input were only `"123"` it would equal itself uppercased, but without letters it would not be a shout.

The uppercasing is done by using the `String` method [toUpperCase][touppercase].

The `isQuestion` and `isShout` values are tested in a `switch`.
If neither `isQuestion` and `isShout` are `true`, the `default` arm of the `switch` returns the response when the input is neither a question nor a shout.

## Shortening

Note that when the body of an `if` statement is a short single line, both the test expression and the body could be put on the same line, like so

```javascript
if (input == '') return 'Fine. Be that way!';
```

It may not comply with some coding styles, but your team preferences may allow it.

[switch]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[trimend]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd
[regex]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[touppercase]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
[ternary]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
