# Design

## Learning objectives

- Know how to use a set to remove duplicate elements from an array
- Know how to convert between a set and an array
- Know how to check whether a value is in a set
- Know how to add and remove elements from a set
- Know how to iterate over a set
- Understand when a set might be preferable to an array

## Out of Scope

- Implementing common set operations like `union` and `difference`
- `WeakSet`

## Concepts

The Concepts this exercise unlocks are:

- `sets`

## Prerequisites

- `array-destructuring` because examples use array destructuring and the spread operator
- `equality` because it is referenced in the introduction and `about.md`
- `strings` because one task involves splitting a string

## Analyzer

This exercise could benefit from the following rules in the [analyzer][analyzer]:

For all tasks, verify that the student actually used a `Set`.

1. `addTrack`

   - Verify that there was no redundant `Set.has()` call

2. `deleteTrack`

   - Verify that there was no redundant `Set.has()` call

[analyzer]: https://github.com/exercism/javascript-analyzer
