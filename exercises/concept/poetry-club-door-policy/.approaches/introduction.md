# Introduction

There are various ways to solve each part of Poetry Club Door Policy. A commonality between most of the parts is needing to get a character from the provided string.

There are multiple ways to do this, one of which is the standard way of using `[index]` access.

One other way is to use [`charAt`][mdn-char-at], which is the same as `[index]` access for most purposes.

Another method is [`at`][mdn-at], which is the same as `[index]` access, except it accepts negative numbers.

A negative number will count backwards from the end of the string, unlike positive numbers, which count forwards from the start.

In addition, [`substring`][mdn-substring] and [`slice`][mdn-slice] can be used. These string methods are normally used to get portions of strings, rather than a single character.

An important distiction is that `slice` accepts negative numbers like `at` does, but `substring` does not.

## Different ways to implement `frontDoorPassword`

For `frontDoorPassword`, there are a variety of ways to make strings uppercase and lowercase.

### Approach: `toUpperCase` and `toLowerCase`

```js
export function frontDoorPassword(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
```

This approach is a standard method that uses [`toUpperCase`][mdn-to-upper-case] and [`toLowerCase`][mdn-to-lower-case].

### Approach: `toLocaleUpperCase` and `toLocaleLowerCase`

```js
export function frontDoorPassword(word) {
  return word[0].toLocaleUpperCase() + word.substring(1).toLocaleLowerCase();
}
```

This approach uses [`toLocaleUpperCase`][mdn-to-locale-upper-case] and [`toLocaleLowerCase`][mdn-to-locale-lower-case], which are very similar to `toUpperCase` and `toLowerCase`.

When using `toLocaleUpperCase` or `toLocaleLowerCase`, you can specify a locale string as an argument and the output will be adjusted to that locale.

### Approach: `String.fromCharCode` and `charCodeAt`

```js
export function frontDoorPassword(word) {
  let charCode = word.charCodeAt(0);
  if (charCode >= 97) charCode -= 32;
  let password = String.fromCharCode(charCode);
  for (let index = 1; index < word.length; index++) {
    charCode = word.charCodeAt(index);
    if (charCode <= 90) charCode += 32;
    password += String.fromCharCode(charCode);
  }
  return password;
}
```

This approach uses [`String.fromCharCode`][mdn-from-char-code] along with [`charCodeAt`][mdn-char-code-at].

This method is much longer than the others and it only works with english letters, so it is less than ideal.

## Different ways to implement `backDoorResponse`

There are many ways to go about trimming whitespace for `backDoorResponse`.

### Approach: `trim` and `[index]` access

```js
export function backDoorResponse(line) {
  const trimmed = line.trim();
  return trimmed[trimmed.length - 1];
}
```

This standard approach uses `[index]` access and the built-in string method [`trim`][mdn-trim], which trims any leading and trailing whitespace from a string.

### Approach: `trimEnd` and `at`

```js
export function backDoorResponse(line) {
  return line.trimEnd().at(-1);
}
```

This approach uses the string method [`trimEnd`][mdn-trim-end], which only trims trailing whitespace, unlike `trim`.

It also uses `at` instead of `[index]` access make the solution shorter.

### Approach: `replaceAll` and `charAt`

```js
export function backDoorResponse(line) {
  const trimmed = line.replaceAll(' ', '');
  return trimmed.charAt(trimmed.length - 1);
}
```

This approach uses [`replaceAll`][mdn-replace-all] to remove all of the spaces in the string.

This merges all the words in the string together, but that doesn't matter here as we only care about the last character and not the rest of the string.

### Approach: `replace` and literal `RegExp`

```js
export function backDoorResponse(line) {
  const trimmed = line.replace(/\s/g, '');
  return trimmed[trimmed.length - 1];
}
```

This approach uses [`replace`][mdn-replace] with a [regular expression literal][mdn-regular-expressions], achieving a similar result to the previous approach.

The main difference is that the previous approach only removes spaces, while this approach can remove any type of whitespace.

### Approach: `for` loop

```js
export function backDoorResponse(line) {
  for (let index = line.length - 1; index >= 0; index--) {
    if (line[index] != ' ') {
      return line[index];
    }
  }
  return '';
}
```

This approach does not trim whitespace. Instead, it uses a [for loop][mdn-for] to return the first character that is not a space from the end of the string.

[mdn-char-at]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
[mdn-at]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at
[mdn-substring]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
[mdn-slice]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
[mdn-to-upper-case]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
[mdn-to-lower-case]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
[mdn-to-locale-upper-case]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
[mdn-to-locale-lower-case]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
[mdn-from-char-code]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
[mdn-char-code-at]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
[mdn-trim]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
[mdn-trim-end]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd
[mdn-replace-all]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
[mdn-replace]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
[mdn-regular-expressions]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
[mdn-for]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
