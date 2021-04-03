# Design

## Learning objectives

- Know how to use `Set` to remove duplicate elements from an array
- Know how to check whether a value is in a `Set`
- Know how to add and remove elements from a `Set`
- Understand the lookup performance of `Set` vs. `Array`

## Out of Scope

- Implementing common set operations like `union` and `difference`
- `WeakSet`

## Concepts

The Concepts this exercise unlocks are:

- `sets`

## Prerequisites

- `spread-operator` because it is used to convert a `Set` to an `Array`
- `equality` because it is referenced in the `about.md` file

## Analyzer

This exercise could benefit from the following rules in the [analyzer][analyzer]:

For all tasks, check that the student actually used a `Set`.

1. `addSong`

   - Verify that `has` wasn't used to check for the presence of the song

2. `removeSong`

   - Verify that `has` wasn't used to check for the presence of the song

[analyzer]: https://github.com/exercism/javascript-analyzer
