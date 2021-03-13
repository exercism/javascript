# Design

## Learning objectives

### Comparison
- How to compare numbers and strings with relational operators (`<`, `>`, `>=`, `<=`)
- Equality checks with strict equals (`===`) and not strict equals (`!==`)
- Why to avoid loose equals (`==`) and comparing values of different types

### Conditionals
How to write if-statements
- `if(){}`
- `if(){} else{}`
- `if(){} else if(){} else{}`

## Out of Scope
* Details about loose equality `==` and truthy/falsy (can be taught later when the student learn more about type coercion)
* Shallow/deep comparison of objects
* Ternary operator `x ? y : z` (will be taught later to avoid overloading this early exercise)
* `switch`, `for`

## Concepts
The Concepts this exercise unlocks are:
- `comparison`
- `conditionals`

## Prerequisites
- `booleans` because they are the result of the comparison and used in the conditions
- `numbers` because they are used to practice comparison
- `strings` also because they are used to practice comparison

## Analyzer

This exercise could benefit from the following rules in the [analyzer][analyzer]:

- Verify that `needsLicense` does include an unnecessary if-statement where the student returns `true`/`false`
- Verify that in `calculateResellPrice` the student actually practiced if/else if/else and did not use early returns

## Notes
The exercise is inspired by [Vehicle Purchase Exercise in the Julia track][julia-vehicle-purchase] but the original exercise included more concepts and the tasks were more difficult to transfer into code. To keep the concept exercise rather trivial as it should be, the tasks were extremely simplified or replaced.

[analyzer]: https://github.com/exercism/javascript-analyzer
[julia-vehicle-purchase]: https://github.com/exercism/julia/blob/main/exercises/concept/vehicle-purchase/.docs/instructions.md