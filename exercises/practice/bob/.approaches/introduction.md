# Introduction

There are various idiomatic approaches to solve Bob.
A basic approach can use a series of `if` statements to test the conditions.
Or a `switch` statement can be used.
An array can contain answers from which the right response is selected by an index calculated from scores given to the conditions.

## General guidance

Regardless of the approach used, some things you could look out for include

- If the input is trimmed, [trim][trim] only once.

- Use the [endsWith][endswith] `String` method instead of checking the last character by index for `?`.

- Don't copy/paste the logic for determining a shout and for determing a question into determing a shouted question.
  Combine the two determinations instead of copying them.
  Not duplicating the code will keep the code [DRY][dry].

- Perhaps consider making `IsQuestion` and `IsShout` values set once instead of functions that are possibly called twice.

- If an `if` statement can return, then an `else if` or `else` is not needed.
  Execution will either return or will continue to the next statement anyway.

- If the body of an `if` statement is only one line, curly braces aren't needed.
  Some teams may still require them in their style guidelines, though.

## Approach: `if` statements

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

For more information, check the [`if` statements approach][approach-if].

## Approach: `switch` statement

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

For more information, check the [`switch` statement approach][approach-switch].

## Other approaches

Besides the aforementioned, idiomatic approaches, you could also approach the exercise as follows:

### Other approach: answer array

An array can be defined that contains Bob’s answers, and each condition is given a score.
The correct answer is selected from the array by using the score as the array index.
For more information, check the [Answer array approach][approach-answer-array].

## Which approach to use?

Which to use is pretty much a matter of personal preference.
Some may prefer the answer array approach to avoid the series of `if` statements or `switch` cases,
but some may find the answer array approach to be less readable.

[trim]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
[endswith]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
[dry]: https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
[approach-if]: https://exercism.org/tracks/javascript/exercises/bob/approaches/if-staements
[approach-switch]: https://exercism.org/tracks/javascript/exercises/bob/approaches/switch-statement
[approach-answer-array]: https://exercism.org/tracks/javascript/exercises/bob/approaches/answer-array
