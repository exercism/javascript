# Design

## Learning objectives

- What does a for loop do
- Syntax `for(...){...}`
- What are the different parts of the for loop header
- How to iterate over an array with a for loop
- What is the increment/decrement operator `i++`/`i--`

## Out of Scope

The following topics are out of scope because they are covered by another concept exercise.

- Other loops like `while`
- Other possibilities of iterating over an array
- `break` and `continue` are only mentioned in the about.md file here because they will be more in focus in the `while` exercise

## Concepts

The Concepts this exercise unlocks are:

- `for-loops`
- `increment-decrement`

## Prerequisites

- `arrays` because they are used to iterate over them in the exercise
- `comparison` for writing the condition in the loop header
- `conditionals` because they introduced the student to the concept of conditional execution

## Analyzer

This exercise could benefit from the following rules in the [analyzer][analyzer]:

For all tasks check that the student actually used a for loop.

1. `totalBirdCount`

   - Verify that the condition is written with `< x.length` instead of `<= y.length -1`.
   - Check whether a shorthand assignment `+=` was used to increase the sum (non-essential feedback).
   - Verify the total was properly initialized with `0` instead of e.g. `null`
   - Verify the increment operator was used in loop header step

2. `birdsInWeek`

   - Verify a helper variable was used instead of duplicating the calculation in the initialization and condition of the loop
   - Other checks should be the same as for `totalBirdCount`

3. `fixBirdCountLog`

   - Check whether a shorthand assignment `+=` was used to increase the loop counter (non-essential feedback)
   - Check whether the increment operator was used in the loop body

## Notes

The exercise is inspired by [Bird Watcher Exercise in the C# track][csharp-bird-watcher] but the original exercise included more concepts and subsequently also tasks that cover all of these concepts.
Since the exercise for the JavaScript track should be focussed on the for loop, the tasks where reduced and changed accordingly.

[analyzer]: https://github.com/exercism/javascript-analyzer
[csharp-bird-watcher]: https://github.com/exercism/csharp/blob/main/exercises/concept/bird-watcher/.docs/instructions.md
