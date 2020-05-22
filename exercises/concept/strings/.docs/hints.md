## 1. Get the first letter of a sentence

- Any `string` in JavaScript has two methods to access characters at a certain
  position: a regular method `.method(position)`, and using `array` style
  indexers `[position]`.
- `.charAt(position)` will get the character at `position`.

## 2. Capitalize a word

- Capitalization means having a single Uppercase character, followed by
  lowercase characters.
- There are two methods to take a part of a string (for example, everything
  except the first character).
- `.slice(position)` can slice up a string at a position.

## 3. Get the last letter of a sentence

- This is similar to getting the first letter, except that it might be
  preferable to use the number of characters in the string to find the position
  of the last character.
- The number of characters in a string is given by its `.length` property.

## 4. Trim a sentence

- `.trim()` method is available on the `String.prototype` (methods
  that work on `string`).

## 5. Be polite

- There are various ways to concatenate a `string` in JavaScript. It's also
  possible to use `string` templating.
- Use `+ other` or `.concat(other)` to concatenate, use backticks (`) to build
  a _string template literal_.
