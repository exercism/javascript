# Answer array

```javascript
const answers = [
  'Whatever.',
  'Sure.',
  'Whoa, chill out!',
  "Calm down, I know what I'm doing!",
];

export function hey(message) {
  const speech = message.trimEnd();
  if (speech == '') {
    return 'Fine. Be that way!';
  }

  const isQuestion = speech.endsWith('?') ? 1 : 0;
  const isShout =
    /[A-Z]{1}/.test(speech) && speech == speech.toUpperCase() ? 2 : 0;
  return answers[isQuestion + isShout];
}
```

In this approach you define an array that contains Bob’s answers, and each condition is given a score.
The correct answer is selected from the array by using the score as the array index.

The [`String`][string] [trimEnd][trimend] method is applied to the input to eliminate any whitespace at the end of the input.
If the string has no characters left, it returns the response for saying nothing.

<!-- prettier-ignore-start -->
~~~~exercism/caution
Note that a `null` or `undefined` `String` would be different from a `String` of all whitespace.
A `null` or `undefined` `String` would raise a `TypeError` if `trimEnd` were applied to it.
~~~~
<!-- prettier-ignore-end -->

The first half of the shout condition

```
/[A-Z]{1}/.test(speech)
```

is constructed from a [regular expression pattern][regex] to ensure there is at least one uppercase letter character in the `String`.
This is because the second half of the condition tests that the uppercased input is the same as the input.
If the input were only `"123"` it would equal itself uppercased, but without letters it would not be a shout.

The uppercasing is done by using the `String` method [toUpperCase][touppercase].

The conditions of being a question and being a shout are assigned scores through the use of the [ternary operator][ternary].
For example, giving a question a score of `1` would use an index of `1` to get the element from the answers array, which is `"Sure."`.

| isShout | isQuestion | Index     | Answer                                |
| ------- | ---------- | --------- | ------------------------------------- |
| `false` | `false`    | 0 + 0 = 0 | `"Whatever."`                         |
| `false` | `true`     | 0 + 1 = 1 | `"Sure."`                             |
| `true`  | `false`    | 2 + 0 = 2 | `"Whoa, chill out!"`                  |
| `true`  | `true`     | 2 + 1 = 3 | `"Calm down, I know what I'm doing!"` |

## Shortening

Note that when the body of an `if` statement is a short single line, both the test expression and the body could be put on the same line, like so

```javascript
if (speech == '') return 'Fine. Be that way!';
```

It may not comply with some coding styles, but your team preferences may allow it.

[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[trimend]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd
[regex]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[touppercase]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
[ternary]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
