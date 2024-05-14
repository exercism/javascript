# Instruction append

## Unicode code points vs code units.

A "normal" UTF-16 encoded string can be represented as a series of characters, where each character can be up to 16 bits long (hence, the name UTF-16).
This means there are a maximum of 2¹⁶ (two to the power of sixteen), or 65536 possible characters representable with 16 bits, or 1 code **unit**.
These 65536 characters form what's known as the [Basic Multilingual Set][basic-multilingual-set], which is large enough for the most common characters of most languages.

However, some symbols, can't fit in just 1 code unit. The solution is to represent them with two code units.
These two UTF-16 code units, often also reffered to as a _surrogate pair_, form a code **point**.

So, in summary, when reffering to UTF-16 encoding:

- A `code unit` is 16 (or less) bits representing a single character.
- A `code point` is one or two code units representing a single character.

To add more confusion to the mix, theres also _grapheme clusters_,
that are basically sequences of Unicode characters (code points) that should be treated as a single visual unit.
For example, some emojis, like this one 👨‍👦.

## UTF-16 in Javascript

Most built-in Javascript methods will work with UTF-16 encoded strings, however they work based on UTF-16 code units.
For example, a [`String.prototype.split("")`][split] method will separate a string by code units.

On the other hand, [`String iterators`][iterator] iterate by code points.

You can read a lot more, and find examples about Unicode strings, on [MDN][MDN].

[basic-multilingual-set]: https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane
[split]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
[iterator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator
[MDN]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters
