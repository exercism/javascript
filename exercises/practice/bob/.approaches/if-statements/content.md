# `if` statements

```javascript
export function hey(message) {
  const speech = message.trimEnd();
  if (speech == "") {
    return "Fine. Be that way!";
  }

  const isQuestion = speech.endsWith("?");
  const isShout = /[A-Z]{1}/.test(speech) && speech == speech.toUpperCase();

  if (isShout) {
    return isQuestion
      ? "Calm down, I know what I'm doing!"
      : "Whoa, chill out!";
  }
  if (isQuestion) {
    return "Sure.";
  }
  return "Whatever.";
```

In this approach you have a series of `if` statements using the private methods to evaluate the conditions.
As soon as the right condition is found, the correct response is returned.

<!-- prettier-ignore-start -->
~~~~exercism/note
Note that there are no `else if` or `else` statements.
If an `if` statement can return, then an `else if` or `else` is not needed.
Execution will either return or will continue to the next statement anyway.
~~~~
<!-- prettier-ignore-end -->

The [`String`][string] [trimEnd][trimend] method is applied to the input to eliminate any whitespace at the end of the input.
If the string has no characters left, it returns the response for saying nothing.

The `String` method [endsWith][endswith] is used to determine if the input ends with a question mark.

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

If `isShout ` is `true`, a [ternary operator][ternary] is used to return the response for whether `isQuestion` is also `true`,
or only `isShout` is true.

## Shortening

Note that when the body of an `if` statement is a short single line, both the test expression and the body could be put on the same line, like so

```javascript
if (speech == '') return 'Fine. Be that way!';
```

It may not comply with some coding styles, but your team preferences may allow it.

[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[trimend]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd
[endswith]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
[regex]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[touppercase]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
[ternary]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
