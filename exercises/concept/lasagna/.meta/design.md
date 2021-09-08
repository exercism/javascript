# Design

## Learning objectives

- Know what a variable is.
- Know what a constant variable is.
- Know how to define a variable.
- Know how to export a variable
- Know how to return a value from a function (explicit return).

## Out of scope

This exercise is really just to introduce the bare minimum a student needs to know to solve a very basic exercise on Exercism.
Details about the primitive data types, different ways to define functions etc. will all be properly introduced in the later concept exercises.

We don't even explicitly teach the basics of numbers and arithmetic operators in the introduction. Given the general code examples that are provided and some "I will just try that", the student should be fine solving the exercise nevertheless.

## Concepts

- `basics`

## Prerequisites

There are no prerequisites.

## Analyzer

This exercise could benefit from the following rules added to the the [analyzer][analyzer]:

- Verify that the `remainingMinutesInOven` function uses the `EXPECTED_MINUTES_IN_OVEN` constant.
- Verify that the `preparationTimeInMinutes` function uses the `PREPARATION_MINUTES_PER_LAYER` constant.
- Verify that the `totalTimeInMinutes` function calls the `preparationTimeInMinutes` function.
- Verify that no extra _bookkeeping_ or _intermediate_ variables are declared

[analyzer]: https://github.com/exercism/javascript-analyzer
