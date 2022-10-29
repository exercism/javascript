## JavaScript representations

The [JavaScript representer][github-javascript-representer] applies the following normalizations: 

- [All comments are removed][docs-representer-normalizations-comments]
- [All whitespace is normalized][docs-representer-normalizations-whitespace]
- [Identifiers are normalized to a placeholder value][docs-representer-normalizations-identifiers]

[github-javascript-representer]: https://github.com/exercism/javascript-representer
[docs-representer-normalizations-comments]: https://exercism.org/docs/tracks/javascript/representer-normalizations#h-remove-comments
[docs-representer-normalizations-whitespace]: https://exercism.org/docs/tracks/javascript/representer-normalizations#h-normalize-whitespace
[docs-representer-normalizations-identifiers]: https://exercism.org/docs/tracks/javascript/representer-normalizations#h-normalize-identifiers

### Before you submit

Please check the following things:

1. You don't duplicate analyzer feedback
2. You check the "examples" tab in the submit dialog and see if the feedback makes sense for _all_ tabs.
3. You check that you have not referred to whitespace or comments
4. You check that you don't refer to function names, or variable names as they appear in the solution, but rather use the mapping provided (or leave names out).
   Only _exported_ names (required by the tests) you can safely refer to because these are always the same for everyone.
