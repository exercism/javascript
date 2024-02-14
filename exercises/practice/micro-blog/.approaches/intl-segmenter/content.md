# Intl.Segmenter

```javascript
let string = '👨‍👨‍👧‍👧💜🤧🤒🏥😀';

const splitWithSegmenter = (s) =>
  Array.from(new Intl.Segmenter().segment(String(s)), (x) => x.segment)
    .slice(0, 5)
    .join('');

console.log(splitWithSegmenter(string)); // will be "👨‍👨‍👧‍👧💜🤧🤒🏥" - correct, yay!
```

This solution:

- Uses the [Intl.Segmenter object][segmenter] to split the string by graphemes and form an array from the result.
- Then it separates the first 5 graphemes.
- Finally, it joins them back into a string.

<!-- prettier-ignore-start -->
~~~~exercism/note
At the time of writing (February 2024) this method is not fully supported by the stable release of the Mozilla Firefox browser.
However, support for the Intl.Segmenter object is being worked on in the Nightly release of the browser.
~~~~
<!-- prettier-ignore-end -->

[segmenter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter
