# Regular expression to match a duplicate letter

```javascript
export function isIsogram(word) {
  return !/([a-z]).*?\1/i.test(word);
}
```

- This solution uses a [regular expression][regex] (also known as "regex') [`test`][test] method to see if there is a duplicated letter.
- The `[a-z]` [character class][char-class] looks for any `a`-`z` letter.
- The parentheses "capture" the letter and remember it in a [capturing group][group].

In the next part of the pattern `.*?`:

- `.` looks for another character which is not a line terminator.
- `*` looks for zero or more of those characters.
- `?` looks for as few of those characters as possible, _until_

`\1` finds a repeat of the first captured character.
If no repeat is found for the first captured character,
then the regex tries again and matches the next `a`-`z` as the first captured character, and so on.

The `i` at the end of the pattern means to [ignore case][ignore-case] when matching, so `[a-z]` will also find `[A-Z]`.

The `!` at the beginning of the pattern is the [logical NOT][logical-not] operator.
The function returns `true` if the regex does _not_ find a repeated letter.

[regex]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[test]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
[char-class]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
[group]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Backreferences
[ignore-case]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
[logical-not]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
