# Design

## Learning objectives

- Reference to OOP
- Javascript is a "prototype-based language", what does that mean?
- How to use a constructor function to create a "template object" with fields and methods using prototype syntax
- What does `this` mean/do
- How to create a new instance with `new`
- How to do the same as above with class syntax

## Out of Scope

The following topics will be introduced later and should therefore not be part of this concept exercise.

- `this` in non-class contexts
- inheritance between classes (`extends`, `super`)
- `instanceof` (introduced in the inheritance concept)

## Concepts

The Concept this exercise unlocks is:

- `classes`

## Prerequisites

- `functions` as they are the basis for classes and default parameters are needed in the exercise
- `objects` as they are the basis for instances
- `conditionals-ternary` because it is helpful in the exercise

## Analyzer

This exercise could benefit from the following rules in the [analyzer][analyzer].

- Check that task 1 and 2 was solved with prototype syntax and the rest with class syntax.
- In task 4 and 5, check that the methods of the size and position objects were used instead of manipulating the values directly, e.g. via `this.position.x = ...`.

## Notes

The exercise is ported from [Windowing System Exercise in the Swift track][swift-windowing-system].
Task 6 was omitted because it did not add much additional value in the JavaScript version.
Task 7 was modified a bit so it is easier to test.

[analyzer]: https://github.com/exercism/javascript-analyzer
[swift-windowing-system]: https://github.com/exercism/swift/blob/main/exercises/concept/windowing-system/.docs/instructions.md
