# Hints

## 1. Check Valid Command

- Use the [test()][mdn-regex-test] method for returning a boolean.
- Remember that we can use [flags][mdn-flags] at the end of the regular expression for additional features such as case insensitive.

## 2. Remove Encrypted Emojis

- In this case we must use the [RexExp][mdn-regular-expressions] constructor to build our regular expression.
- Thanks to the common encryption of each emoji, we can use `[0-9]` to search for any digit after the `emoji`word.
- The character `+` matches one or more consecutive items.
- Use the [split()][mdn-regex-split] method alongside the regex for each emoji to get rid of all encryption.
- Finally, return this splitted array as a string using the [join()][mdn-join] method.

## 3. Check Valid Phone Number

- In this exercise we are playing with `groups and ranges`. Read this [documentation][mdn-groups] for learning more about it.
- This [article][phone-validation] is really good at explaining different ways of number validation.
- You may also want to use this [cheatsheet][mdn-regex-cheatsheet] for a broad view of available features in regular expressions.
- Use the `test()` method to check whether the phone number is valid or not.
- Return the final answer with a simple `if statement`.

## 4. Get Website Link

- We are targeting words that are joined by one or more `.(dots)`.
- Remember to put the flag `g` at the end so we can get all the domains in any sentence.
- Use the [match()][mdn-regex-match] method to return an array with all the previous matches.

## 5. Greet the user

- First, use the [replace()][mdn-regex-replace] method directly to the given string.
- Use [Named Capture Groups][mdn-groups] to store the `name` and `surname` into different values.
- Pass a `(...match)` destructuring to the replacer function so you can get the name and surname into the object within the matched groups.
- Use the `pop()` method to store the matched object with `name` and `surname`.
- Finally, implement a `template String` so you can get the values from the regular expression object. See [this][mdn-capturing-groups] example for knowing about how match() stores objects.

[mdn-regex-cheatsheet]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
[mdn-regular-expressions]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[mdn-common-functions]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#using_regular_expressions_in_javascript
[mdn-flags]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags
[mdn-regex-test]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
[mdn-regex-match]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
[mdn-regex-replace]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
[mdn-regex-split]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
[mdn-join]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
[mdn-groups]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges
[phone-validation]: https://www.w3resource.com/javascript/form/phone-no-validation.php
[mdn-capturing-groups]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match#using_named_capturing_groups
