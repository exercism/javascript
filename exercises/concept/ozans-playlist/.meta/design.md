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

- `array-destructuring` because examples use array destructuring
- `comparison` because this is where equality is explained
- `array-loops` because it introduces the for-of loop
- `rest-and-spread`
- `arrays`

## Analyzer

This exercise could benefit from the following rules in the [analyzer][analyzer]:

For all tasks, verify that the student actually used a `Set`.

1. `addTrack`

   - Verify that there was no redundant `Set.has()` call

2. `deleteTrack`

   - Verify that there was no redundant `Set.has()` call

[analyzer]: https://github.com/exercism/javascript-analyzer
