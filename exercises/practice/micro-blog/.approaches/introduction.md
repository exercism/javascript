# Introduction

As noted in this exercise's introduction, most built-in Javascript methods for working with strings are Unicode-aware, but work with UTF-16 code units.
This might not be a problem, if all of the input contains characters represented by one code unit and you might not even notice it.
Unfortunately, this isn't the case with our micro-blog.

Different approaches we'll compare include:

- Using a `String iterator`
- Using a `Regular Expression`
- Using `Intl.Segmenter`

## General guidance

The main part of this exercise is figuring out how to split a Unicode encoded string and count up to 5 characters of it.

## Approach: `String iterator`

```javascript
function splitWithIterator(string) {
  return [...string].slice(0, 5).join('');
}
```

For more information, and a detailed explanation, check the [`String iterator` approach][iterator].

## Approach: `Regular Expression`

```javascript
function splitWithRegex(string) {
  return string.match(/.{0,5}/gu)[0];
}
```

For more information, and a detailed explanation, check the [`Regular Expression` approach][regex]

## Other approaches

The aformentioned approaches both use UTF-16 code points, so character made of multiple code units aren't a problem.
But what about characters made of multiple code _points_, like some emoji?

### Other approach: `Intl.Segmenter`

The `Intl.Segmenter` object enables locale-sensitive string splitting and by default splits by graphemes,
so it should work well with symbols like emoji made of multiple code points.
For more information, and a detailed explanation, check the [`Intl.Segmenter` approach][separator].

## Which approach is the best in terms of performance?

Testing with the following two strings on [JSBench.me][jsbench-me] yielded:

```javascript
let string1 = '👨‍👨‍👧‍👧💜🤧🤒🏥😀';
let string2 = 'The quick brown fox jumps over the lazy dog. It barked.';
```

- The `String iterator` approach benched fastest.
- The `RegEx` approach was about 12% slower than the first.
- The `Intl.Segmenter` approach was the slowest of the three, by a considerable margin.

[iterator]: https://exercism.org/tracks/javascript/exercises/micro-blog/approaches/iterators
[regex]: https://exercism.org/tracks/javascript/exercises/micro-blog/approaches/regex
[separator]: https://exercism.org/tracks/javascript/exercises/micro-blog/approaches/intl-segmenter
[jsbench-me]: https://jsbench.me/
