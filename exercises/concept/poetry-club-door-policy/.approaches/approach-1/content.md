# Title TBA

```js
export function frontDoorResponse(line) {
  return line[0];
}

export function frontDoorPassword(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export function backDoorResponse(line) {
  const trimmed = line.trim();
  return trimmed[trimmed.length - 1];
}

export function backDoorPassword(word) {
  return frontDoorPassword(word) + ', please';
}
```

In this approach you use string indexing, string length, and various string methods to return the correct passwords.

## Different ways to implement `frontDoorPassword`

For `frontDoorPassword`, there are a variety of ways to make strings uppercase and lowercase.

One such way is [`toUpperCase`][mdn-to-upper-case], the method used in the code sample above.

Another way is to use [`String.fromCharCode`][mdn-from-char-code] along with [`charCodeAt`][mdn-char-code-at], like so: `String.fromCharCode(line.charCodeAt(0) - 32)`

This method is much longer than the others and it also only works for lowercase english letters, so for it to work with uppercase input, [`toLowerCase`][mdn-to-lower-case] or additional logic is needed.

A final method is to use [`toLocaleUpperCase`][mdn-to-locale-lower-case], which is very similar to `toUpperCase`.

When using `toLocaleUpperCase`, you can specify a locale string as an argument, but otherwise functions similarly to `toUpperCase`.

All of these different ways can be applied to `toLowerCase` with minimal adjustments.

The `String.fromCharCode` way introduces unnecessary complexity into your code, while both the `toUpperCase` and `toLocaleUpperCase` methods are fairly concise, so those two methods are generally the preferred ways.

## Different ways to implement `backDoorResponse`

There are many ways to go about trimming whitespace for `backDoorResponse`.

The built-in string method [`trim`][mdn-trim], trims any leading and trailing whitespace from a string. This is a fairly standard solution.

The string method [`trimEnd`][mdn-trim-end] can also be used, as we only need to trim trailing whitespace to get the last non-whitespace character.

Another option is to use [`replaceAll`][mdn-replace-all] with `' '` as the argument to remove all whitespace in the string.

This would merge all the words in the string into one, but that doesn't matter here as we only care about the last character and not the rest of the string.

Similarly, both [`replace`][mdn-replace] and `replaceAll` could be used with a regex that has the global flag for the same effect.

Lastly, you could not even bother to trim the whitespace at all and just use a loop:

```js
for (let index = line.length - 1; index >= 0; index--) {
    if (line[index] != ' ') {
        return line[index];
    };
};
```

## Different ways to get a character from a string

In various parts of the code sample above, we use `[index]` access to get a character from a string.

However, there are other methods of doing this as well.

One other way is to use [`charAt`][mdn-char-at], which is very similar to `[index]` access.

Another method is [`at`][mdn-at], which is the same as `[index]` access, except it accepts negative numbers.

A negative number will count backwards from the end of the string, unlike positive numbers, which count forwards from the start.

In addition, [`substring`][mdn-substring] and [`slice`][mdn-slice] can be used. These string methods are normally used to get portions of strings, rather than a single character.

An important distiction is that `slice` accepts negative numbers like `at` does, but `substring` does not.

[mdn-to-upper-case]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
[mdn-from-char-code]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
[mdn-char-code-at]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
[mdn-to-lower-case]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
[mdn-to-locale-lower-case]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
[mdn-trim]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
[mdn-trim-end]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd
[mdn-replace-all]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
[mdn-replace]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
[mdn-char-at]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
[mdn-at]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at
[mdn-substring]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
[mdn-slice]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
