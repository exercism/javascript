# Design

## Learning objectives

- How to create a string
- How to retrieve a letter of a string
- How to determine the length of a string
- String methods (toUpper, toLower, trim etc.)
- String concatenation

## Out of scope

- Codepoints
- Template strings

## Concepts

- `strings`

## Prerequisites

- `basics`

## Analyzer

This exercise could benefit from the following rules added to the the [analyzer][analyzer]:

- Verify that the `frontDoorResponse` function uses `[0]` or `charAt(0)`. `slice(0, 1)` / `substring(0, 1)` works but is not optimal.
- Verify that `frontDoorPassword` uses `toUpperCase()` and `slice(1).toLowerCase()`, or `substring(1).toLowerCase()`
- Verify that the `backDoorResponse` function uses `trim()` or `trimEnd()`, and `[n-1]` or `charAt(n-1)` together with `.length`.
- Verify that the `backDoorPassword` function re-uses `frontDoorPassword`, and builds the string using `+ ', please` or `${}, please`.

[analyzer]: https://github.com/exercism/javascript-analyzer
